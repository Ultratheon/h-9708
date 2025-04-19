import { Progress } from "../ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, DollarSign, TrendingUp, CheckSquare, ListTodo, Clock, MousePointerClick, ZapOff, Layout, Monitor, Smartphone, Tablet } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchUrlAnalytics } from "../../services/urlAnalytics";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltipContent, ChartTooltip } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

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
  averageSessionTime: string;
  bounceRate: string;
  conversionRate: string;
  topPages: { path: string; visits: number; conversionRate: string }[];
  deviceDistribution: { device: string; percentage: number }[];
  trafficSources: { source: string; percentage: number }[];
}

export const AnalyticsDashboard = ({ url }: AnalyticsDashboardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState("overview");

  const COLORS = ['#FF7E47', '#5B8FF9', '#5AD8A6', '#F6BD16', '#6C5CE7', '#FF85C0'];

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

  // Prepare the data for device distribution pie chart
  const deviceData = data.deviceDistribution.map((item) => ({
    name: item.device,
    value: item.percentage,
  }));

  // Prepare the data for traffic sources pie chart
  const trafficData = data.trafficSources.map((item) => ({
    name: item.source,
    value: item.percentage,
  }));

  return (
    <div className="space-y-8 text-white bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F] min-h-screen p-8 rounded-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              Performance Insights
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-sm opacity-80">
                Analytics for: <span className="font-medium">{url}</span>
              </p>
              <Badge variant="outline" className="text-xs bg-white/10 hover:bg-white/20">
                {new Date().toLocaleDateString()}
              </Badge>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setSelectedTab}>
          <div className="border-b border-white/10">
            <TabsList className="bg-transparent">
              <TabsTrigger 
                value="overview" 
                className={cn("data-[state=active]:border-orange-500 data-[state=active]:text-white border-b-2 border-transparent rounded-none",
                  selectedTab === "overview" ? "border-orange-500 text-white" : "text-white/70"
                )}
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="audience" 
                className={cn("data-[state=active]:border-orange-500 data-[state=active]:text-white border-b-2 border-transparent rounded-none",
                  selectedTab === "audience" ? "border-orange-500 text-white" : "text-white/70"
                )}
              >
                Audience
              </TabsTrigger>
              <TabsTrigger 
                value="pages" 
                className={cn("data-[state=active]:border-orange-500 data-[state=active]:text-white border-b-2 border-transparent rounded-none",
                  selectedTab === "pages" ? "border-orange-500 text-white" : "text-white/70"
                )}
              >
                Pages
              </TabsTrigger>
              <TabsTrigger 
                value="conversions" 
                className={cn("data-[state=active]:border-orange-500 data-[state=active]:text-white border-b-2 border-transparent rounded-none",
                  selectedTab === "conversions" ? "border-orange-500 text-white" : "text-white/70"
                )}
              >
                Conversions
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <DollarSign className="h-8 w-8 text-orange-400" />
                  <div>
                    <p className="text-sm text-neutral-200">Total Revenue</p>
                    <h3 className="text-2xl font-bold text-white">${data.revenue}</h3>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <Users className="h-8 w-8 text-blue-400" />
                  <div>
                    <p className="text-sm text-neutral-200">Total Users</p>
                    <h3 className="text-2xl font-bold text-white">{data.users}</h3>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <Clock className="h-8 w-8 text-purple-400" />
                  <div>
                    <p className="text-sm text-neutral-200">Avg. Session Time</p>
                    <h3 className="text-2xl font-bold text-white">{data.averageSessionTime}</h3>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <MousePointerClick className="h-8 w-8 text-green-400" />
                  <div>
                    <p className="text-sm text-neutral-200">Conversion Rate</p>
                    <h3 className="text-2xl font-bold text-white">{data.conversionRate}</h3>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 border-white/20 overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-orange-400" />
                    Monthly Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ChartContainer 
                      className="h-full"
                      config={{
                        growth: {
                          label: "Growth",
                          theme: {
                            light: "#FF7E47",
                            dark: "#FF7E47",
                          },
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data.monthlyGrowth}>
                          <XAxis dataKey="month" stroke="#fff" />
                          <YAxis stroke="#fff" />
                          <ChartTooltip 
                            content={
                              <ChartTooltipContent
                                formatter={(value) => [`${value} visits`, "Monthly Visits"]}
                              />
                            }
                          />
                          <Bar dataKey="value" fill="var(--color-growth)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-6">
                <Card className="bg-white/10 border-white/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <ZapOff className="h-5 w-5 text-yellow-400" />
                      Bounce Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-neutral-200">Current rate</p>
                        <p className="text-xl font-bold">{data.bounceRate}</p>
                      </div>
                      <Progress value={parseInt(data.bounceRate)} max={100} className="h-2 bg-white/20" indicatorClassName="bg-yellow-400" />
                      <p className="text-xs text-neutral-300">
                        {parseInt(data.bounceRate) > 50 
                          ? "High bounce rate. Consider improving your landing page."
                          : "Good bounce rate. Your content is engaging visitors."}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-6">
                  <Card className="bg-white/10 border-white/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-semibold flex items-center gap-2">
                        <CheckSquare className="h-5 w-5 text-purple-400" />
                        Project Completion
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2">
                        <Progress value={data.projectCompletion} className="bg-white/20" />
                        <p className="text-right text-sm font-semibold">{data.projectCompletion}%</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 border-white/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-semibold flex items-center gap-2">
                        <ListTodo className="h-5 w-5 text-yellow-400" />
                        Task Completion
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2">
                        <Progress value={data.taskCompletion} className="bg-white/20" />
                        <p className="text-right text-sm font-semibold">{data.taskCompletion}%</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="audience" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Monitor className="h-5 w-5 text-blue-400" />
                    Device Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={deviceData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {deviceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`${value}%`, "Percentage"]}
                          contentStyle={{ 
                            backgroundColor: 'rgba(0,0,0,0.8)', 
                            border: 'none',
                            borderRadius: '4px',
                            color: '#fff'
                          }} 
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center mt-4 gap-4">
                    {deviceData.map((entry, index) => (
                      <div key={`legend-${index}`} className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-sm" 
                          style={{ backgroundColor: COLORS[index % COLORS.length] }} 
                        />
                        <span className="text-sm">{entry.name}: {entry.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Layout className="h-5 w-5 text-green-400" />
                    Traffic Sources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={trafficData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {trafficData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`${value}%`, "Percentage"]}
                          contentStyle={{ 
                            backgroundColor: 'rgba(0,0,0,0.8)', 
                            border: 'none',
                            borderRadius: '4px',
                            color: '#fff'
                          }} 
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-wrap justify-center mt-4 gap-x-4 gap-y-2">
                    {trafficData.map((entry, index) => (
                      <div key={`legend-${index}`} className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-sm" 
                          style={{ backgroundColor: COLORS[index % COLORS.length] }} 
                        />
                        <span className="text-sm whitespace-nowrap">{entry.name}: {entry.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="pages" className="space-y-6">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Layout className="h-5 w-5 text-blue-400" />
                  Top Pages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4">Page</th>
                        <th className="text-right py-3 px-4">Visits</th>
                        <th className="text-right py-3 px-4">Conversion Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.topPages.map((page, index) => (
                        <tr 
                          key={index} 
                          className="border-b border-white/10 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-3 px-4 text-left">
                            {page.path}
                          </td>
                          <td className="py-3 px-4 text-right font-mono">
                            {page.visits.toLocaleString()}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <span className={
                              parseFloat(page.conversionRate) > 5 
                                ? "text-green-400" 
                                : parseFloat(page.conversionRate) > 2
                                  ? "text-yellow-400"
                                  : "text-red-400"
                            }>
                              {page.conversionRate}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center text-sm text-white/60">
              <p>To view more detailed page analytics, upgrade to our Pro plan.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="conversions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/10 border-white/20 col-span-1 md:col-span-3">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold">Conversion Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1 w-full md:w-auto text-center p-4 border border-white/10 rounded-lg">
                      <p className="text-sm text-neutral-300 mb-1">Conversion Rate</p>
                      <h3 className="text-3xl font-bold text-orange-400">{data.conversionRate}</h3>
                      <p className="text-xs text-neutral-400 mt-1">Industry avg: 3.2%</p>
                    </div>
                    
                    <div className="flex-1 w-full md:w-auto p-4 text-center border border-white/10 rounded-lg">
                      <p className="text-sm text-neutral-300 mb-1">Revenue per User</p>
                      <h3 className="text-3xl font-bold text-blue-400">
                        ${(parseInt(data.revenue.replace(/,/g, '')) / parseInt(data.users.replace(/,/g, ''))).toFixed(2)}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1">Last month: $2.85</p>
                    </div>
                    
                    <div className="flex-1 w-full md:w-auto p-4 text-center border border-white/10 rounded-lg">
                      <p className="text-sm text-neutral-300 mb-1">Conversion Impact</p>
                      <h3 className="text-3xl font-bold text-green-400">
                        {data.projectCompletion > 75 ? "High" : data.projectCompletion > 50 ? "Medium" : "Low"}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1">Based on completion metrics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center text-sm text-white/60 p-6">
              <p>For detailed conversion funnel analysis, upgrade to our Pro plan.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
