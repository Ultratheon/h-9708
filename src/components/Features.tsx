
import { MessageSquare, Brain, Database, Zap } from "lucide-react";

const features = [
  {
    title: "Natural Language Interface",
    description: "Interact with your business data through simple conversations rather than complex dashboards.",
    icon: MessageSquare,
  },
  {
    title: "AI-Powered Insights",
    description: "Get intelligent analysis and recommendations tailored to your specific business needs and data.",
    icon: Brain,
  },
  {
    title: "Data Integration",
    description: "Connect with your existing systems and databases to provide comprehensive business intelligence.",
    icon: Database,
  },
  {
    title: "20× Faster Than Traditional Methods",
    description: "Use your native language to describe what you need instead of writing code or complex queries.",
    icon: Zap,
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
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-white">{feature.title}</h3>
              </div>
              <p className="text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
