
import { MessageSquare, Brain, Search, Zap } from "lucide-react";

const features = [
  {
    title: "AI Chat with Web Browsing & Copywriting",
    description: "Engage with an intelligent AI assistant that can browse the web for real-time information and create compelling copy for your business needs. Get instant answers, research insights, and professional content generation.",
    icon: MessageSquare,
    highlights: ["Real-time web research", "Professional copywriting", "Instant responses", "Content optimization"]
  },
  {
    title: "Ads Creation & Content Strategy",
    description: "Automatically generate high-converting advertisements and develop comprehensive content strategies. From social media campaigns to email marketing, create engaging content that drives results.",
    icon: Brain,
    highlights: ["Auto ad generation", "Multi-platform campaigns", "Content calendar", "Performance optimization"]
  },
  {
    title: "Ultra Deep Business Audit & Market Research",
    description: "Receive comprehensive business audits with critical scoring and in-depth market research. Identify opportunities, weaknesses, and strategic advantages in your industry landscape.",
    icon: Search,
    highlights: ["Critical scoring system", "Market analysis", "Opportunity identification", "Strategic insights"]
  },
  {
    title: "Competitors, SEO, Metadata & Keywords",
    description: "Analyze your competition, optimize your search presence, and discover high-value keywords. Get complete SEO insights including metadata optimization and competitive intelligence.",
    icon: Zap,
    highlights: ["Competitor analysis", "SEO optimization", "Keyword research", "Metadata enhancement"]
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Turn Your Business Data Into Conversations
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          Osiri transforms how you interact with your business information, making complex data accessible through natural language conversations.
        </p>
        
        {/* Updated grid layout to match the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-xl hover:border-neutral-600 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-4 rounded-xl border border-cyan-500/30">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {feature.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center gap-2 text-sm text-neutral-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
