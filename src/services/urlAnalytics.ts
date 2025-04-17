
interface AnalyticsData {
  revenue: string;
  users: string;
  monthlyGrowth: { month: string; value: number }[];
  projectCompletion: number;
  taskCompletion: number;
  url: string;
}

export async function fetchUrlAnalytics(url: string): Promise<AnalyticsData> {
  console.log(`Attempting to analyze URL: ${url}`);
  
  try {
    // In a real implementation, we would make an actual API call to a service
    // that crawls websites and extracts data. For now, we'll simulate this with
    // randomly generated data based on the URL's characteristics.
    
    // Create a simple hash from the URL to generate consistent but different data for different URLs
    const urlHash = createSimpleHash(url);
    
    // Generate revenue based on the URL hash
    const revenue = formatRevenue(10000 + (urlHash % 500000));
    
    // Generate users count
    const users = formatUsers(5000 + (urlHash % 20000));
    
    // Generate monthly growth data with some variance
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const monthlyGrowth = months.map((month, index) => {
      const baseValue = 2000 + (urlHash % 3000);
      // Create a pattern that follows a mild trend based on the URL hash
      const trend = urlHash % 2 === 0 ? 1 : -1;
      const variance = ((index + 1) * 200 * trend) + ((urlHash + index) % 800);
      return {
        month,
        value: Math.max(500, Math.floor(baseValue + variance))
      };
    });
    
    // Generate completion percentages
    const projectCompletion = 30 + (urlHash % 70); // Between 30% and 99%
    const taskCompletion = 20 + (urlHash % 80); // Between 20% and 99%
    
    return {
      revenue,
      users,
      monthlyGrowth,
      projectCompletion,
      taskCompletion,
      url
    };
  } catch (error) {
    console.error("Error analyzing URL:", error);
    throw new Error("Failed to analyze URL");
  }
}

// Helper functions

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
