
import { Progress } from "../ui/progress";
import { Card } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, DollarSign, TrendingUp, CheckSquare, ListTodo } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchUrlAnalytics } from "../../services/urlAnalytics";
import { toast } from "sonner";

interface AnalyticsDashboardProps {
  url: string;
}

interface AnalyticsData {
  revenue: string;
  users: string;
  monthlyGrowth: { month: string; value: number }[];
  projectCompletion: number;
  taskCompletion: number;
  url: string;
}

export const AnalyticsDashboard = ({ url }: AnalyticsDashboardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        setIsLoading(true);
        const analyticsData = await fetchUrlAnalytics(url);
        setData(analyticsData);
      } catch (err) {
        console.error("Failed to fetch analytics:", err);
        setError("Failed to analyze this URL. Please try another one.");
        toast.error("Failed to analyze the website");
      } finally {
        setIsLoading(false);
      }
    };

    loadAnalytics();
  }, [url]);

  if (isLoading) {
    return (
      <div className="text-center text-white py-20">
        <div className="animate-pulse mx-auto h-10 w-10 rounded-full bg-white/30 mb-4"></div>
        <h2 className="text-xl">Analyzing {url}...</h2>
        <p className="text-neutral-200 mt-2">This may take a moment</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-white py-20">
        <div className="bg-red-500/20 p-4 rounded-lg mb-4 mx-auto max-w-md">
          <p className="text-white">{error}</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Analytics for: {url}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-white/10 border-white/20">
          <div className="flex items-center gap-4">
            <DollarSign className="h-8 w-8 text-green-400" />
            <div>
              <p className="text-sm text-neutral-200">Total Revenue</p>
              <h3 className="text-2xl font-bold text-white">${data.revenue}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white/10 border-white/20">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-blue-400" />
            <div>
              <p className="text-sm text-neutral-200">Total Users</p>
              <h3 className="text-2xl font-bold text-white">{data.users}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white/10 border-white/20">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CheckSquare className="h-5 w-5 text-purple-400" />
              <p className="text-sm text-neutral-200">Project Completion</p>
            </div>
            <Progress value={data.projectCompletion} className="bg-white/20" />
            <p className="text-right text-sm text-white">{data.projectCompletion}%</p>
          </div>
        </Card>

        <Card className="p-6 bg-white/10 border-white/20">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <ListTodo className="h-5 w-5 text-yellow-400" />
              <p className="text-sm text-neutral-200">Task Completion</p>
            </div>
            <Progress value={data.taskCompletion} className="bg-white/20" />
            <p className="text-right text-sm text-white">{data.taskCompletion}%</p>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-white/10 border-white/20">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-orange-400" />
          <h3 className="text-lg font-semibold text-white">Monthly Growth</h3>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.monthlyGrowth}>
              <XAxis dataKey="month" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0,0,0,0.8)', 
                  border: 'none',
                  borderRadius: '4px',
                  color: '#fff'
                }} 
              />
              <Bar dataKey="value" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};
