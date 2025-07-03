
import { MessageSquare, Brain, Search, Zap } from "lucide-react";

const features = [
  {
    title: "AI Chat with Web Browsing & Copywriting",
    description: "Engage with an intelligent AI assistant that can browse the web for real-time information and create compelling copy for your business needs.",
    icon: MessageSquare,
    iconBg: "from-orange-400 to-yellow-500"
  },
  {
    title: "Ads Creation & Content Strategy", 
    description: "Automatically generate high-converting advertisements and develop comprehensive content strategies for all platforms.",
    icon: Brain,
    iconBg: "from-cyan-400 to-blue-500"
  },
  {
    title: "Ultra Deep Business Audit & Market Research",
    description: "Receive comprehensive business audits with critical scoring and in-depth market research to identify opportunities.",
    icon: Search,
    iconBg: "from-purple-400 to-pink-500"
  },
  {
    title: "Competitors, SEO, Metadata & Keywords",
    description: "Analyze your competition, optimize your search presence, and discover high-value keywords for better rankings.",
    icon: Zap,
    iconBg: "from-green-400 to-emerald-500"
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Turn Your Business Data Into Conversations
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          Osiri transforms how you interact with your business information, making complex data accessible through natural language conversations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral-800 p-6 rounded-xl hover:bg-neutral-700 transition-colors">
              <div className="mb-4">
                <div className={`bg-gradient-to-br ${feature.iconBg} p-3 rounded-2xl w-fit`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-white mb-3">{feature.title}</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
