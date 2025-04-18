
interface AnalyticsData {
  revenue: string;
  users: string;
  monthlyGrowth: { month: string; value: number }[];
  projectCompletion: number;
  taskCompletion: number;
  url: string;
  // New metrics
  averageSessionTime: string;
  bounceRate: string;
  conversionRate: string;
  topPages: { path: string; visits: number; conversionRate: string }[];
  deviceDistribution: { device: string; percentage: number }[];
  trafficSources: { source: string; percentage: number }[];
}

export async function fetchUrlAnalytics(url: string): Promise<AnalyticsData> {
  console.log(`Analyzing URL: ${url}`);
  
  try {
    // Extract domain information for more realistic analytics
    const domain = extractDomain(url);
    const urlHash = createSimpleHash(url);
    
    // More sophisticated revenue generation based on domain features
    const domainAge = calculateDomainSimulatedAge(domain);
    const domainLength = domain.length;
    const hasCommonTLD = ['com', 'org', 'net', 'io'].includes(domain.split('.').pop() || '');
    
    // Generate more realistic revenue based on domain characteristics
    const baseRevenue = 5000 + (domainAge * 2000) + (hasCommonTLD ? 8000 : 2000);
    const revenueVariance = (urlHash % 300000);
    const revenue = formatRevenue(baseRevenue + revenueVariance);
    
    // Generate users count based on domain characteristics
    const baseUsers = 2000 + (domainAge * 800) + (hasCommonTLD ? 5000 : 1000);
    const usersVariance = (urlHash % 15000);
    const users = formatUsers(baseUsers + usersVariance);
    
    // Generate session time (in minutes and seconds)
    const avgSession = Math.max(1, Math.floor(2 + (urlHash % 8)));
    const avgSeconds = Math.floor(urlHash % 60);
    const averageSessionTime = `${avgSession}m${avgSeconds}s`;
    
    // Generate bounce rate (percentage of visitors who leave after viewing one page)
    const bounceRate = `${Math.min(85, Math.max(25, 40 + (urlHash % 30)))}%`;
    
    // Generate conversion rate
    const conversionRate = `${Math.max(0.5, Math.min(15, 2 + (urlHash % 10)))}%`;
    
    // Generate monthly growth data with a more realistic trend
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const growthTrend = domainAge > 3 ? 1.2 : 1.8; // Older domains have steadier growth
    const volatility = urlHash % 2 === 0 ? 0.3 : 0.6;
    
    let lastValue = 1500 + (urlHash % 1000);
    const monthlyGrowth = months.map((month, index) => {
      // Create a more realistic growth pattern
      const trendFactor = 1 + (((index + 1) * 0.08) * growthTrend);
      const randomVariance = ((urlHash + index) % 500) * volatility;
      const value = Math.floor(lastValue * trendFactor + randomVariance);
      lastValue = value;
      return { month, value };
    });
    
    // Top pages
    const paths = [
      "/", 
      "/about", 
      "/products", 
      "/contact", 
      "/blog",
      "/services",
      "/pricing"
    ];
    
    const topPages = paths.slice(0, 5).map((path, index) => {
      const visits = Math.floor(baseUsers / (index + 2) + (urlHash % 200));
      const pageConvRate = (10 - index) / 2 + (urlHash % 5) / 10;
      return {
        path: path,
        visits: visits,
        conversionRate: `${pageConvRate.toFixed(1)}%`
      };
    });
    
    // Device distribution
    const mobileBias = urlHash % 100 > 50 ? 0.15 : -0.1; // Some sites have more mobile users
    const deviceDistribution = [
      { device: "Mobile", percentage: Math.min(65, Math.max(35, 48 + mobileBias * 100 + (urlHash % 20))) },
      { device: "Desktop", percentage: Math.min(60, Math.max(25, 42 - mobileBias * 100 + (urlHash % 15))) },
      { device: "Tablet", percentage: Math.min(25, Math.max(5, 10 + (urlHash % 10))) }
    ];
    
    // Normalize device distribution to 100%
    const totalPercentage = deviceDistribution.reduce((sum, item) => sum + item.percentage, 0);
    deviceDistribution.forEach(item => {
      item.percentage = Math.round(item.percentage * 100 / totalPercentage);
    });
    
    // Make sure the total is exactly 100%
    let remainingPercentage = 100 - deviceDistribution.reduce((sum, item) => sum + item.percentage, 0);
    deviceDistribution[0].percentage += remainingPercentage;
    
    // Traffic sources
    const trafficSources = [
      { source: "Organic Search", percentage: Math.min(70, Math.max(20, 40 + (urlHash % 30))) },
      { source: "Direct", percentage: Math.min(50, Math.max(10, 25 + (urlHash % 20))) },
      { source: "Social", percentage: Math.min(40, Math.max(5, 15 + (urlHash % 20))) },
      { source: "Referral", percentage: Math.min(30, Math.max(5, 15 + (urlHash % 15))) },
      { source: "Email", percentage: Math.min(15, Math.max(1, 5 + (urlHash % 10))) }
    ];
    
    // Normalize traffic sources to 100%
    const totalTrafficPercentage = trafficSources.reduce((sum, item) => sum + item.percentage, 0);
    trafficSources.forEach(item => {
      item.percentage = Math.round(item.percentage * 100 / totalTrafficPercentage);
    });
    
    // Make sure the total is exactly 100%
    let remainingTrafficPercentage = 100 - trafficSources.reduce((sum, item) => sum + item.percentage, 0);
    trafficSources[0].percentage += remainingTrafficPercentage;
    
    // Generate completion percentages with more variety
    const projectCompletion = Math.min(99, Math.max(30, 25 + domainAge * 10 + (urlHash % 20)));
    const taskCompletion = Math.min(99, Math.max(20, 20 + domainAge * 5 + (urlHash % 40)));
    
    return {
      revenue,
      users,
      monthlyGrowth,
      projectCompletion,
      taskCompletion,
      url,
      averageSessionTime,
      bounceRate,
      conversionRate,
      topPages,
      deviceDistribution,
      trafficSources
    };
  } catch (error) {
    console.error("Error analyzing URL:", error);
    throw new Error("Failed to analyze URL");
  }
}

// Extract domain from URL
function extractDomain(url: string): string {
  try {
    // Remove protocol and get domain
    let domain = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
    // Remove path, query string and hash
    domain = domain.split('/')[0];
    return domain;
  } catch {
    return url;
  }
}

// Calculate simulated domain age (1-10 years)
function calculateDomainSimulatedAge(domain: string): number {
  const hash = createSimpleHash(domain);
  return 1 + (hash % 9); // 1-10 years
}

// Create a simple numeric hash from a string
function createSimpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Format revenue with commas and currency symbol
function formatRevenue(num: number): string {
  return num.toLocaleString();
}

// Format user count with commas
function formatUsers(num: number): string {
  return num.toLocaleString();
}
