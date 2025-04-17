
import { Progress } from "../ui/progress";
import { Card } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, DollarSign, TrendingUp, CheckSquare, ListTodo } from "lucide-react";

interface AnalyticsDashboardProps {
  url: string;
}

const mockData = {
  revenue: "124,500",
  users: "12,345",
  monthlyGrowth: [
    { month: "Jan", value: 4000 },
    { month: "Feb", value: 3000 },
    { month: "Mar", value: 2000 },
    { month: "Apr", value: 2780 },
    { month: "May", value: 1890 },
    { month: "Jun", value: 2390 },
  ],
  projectCompletion: 75,
  taskCompletion: 60,
};

export const AnalyticsDashboard = ({ url }: AnalyticsDashboardProps) => {
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
              <h3 className="text-2xl font-bold text-white">${mockData.revenue}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white/10 border-white/20">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-blue-400" />
            <div>
              <p className="text-sm text-neutral-200">Total Users</p>
              <h3 className="text-2xl font-bold text-white">{mockData.users}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white/10 border-white/20">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CheckSquare className="h-5 w-5 text-purple-400" />
              <p className="text-sm text-neutral-200">Project Completion</p>
            </div>
            <Progress value={mockData.projectCompletion} className="bg-white/20" />
            <p className="text-right text-sm text-white">{mockData.projectCompletion}%</p>
          </div>
        </Card>

        <Card className="p-6 bg-white/10 border-white/20">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <ListTodo className="h-5 w-5 text-yellow-400" />
              <p className="text-sm text-neutral-200">Task Completion</p>
            </div>
            <Progress value={mockData.taskCompletion} className="bg-white/20" />
            <p className="text-right text-sm text-white">{mockData.taskCompletion}%</p>
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
            <BarChart data={mockData.monthlyGrowth}>
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
