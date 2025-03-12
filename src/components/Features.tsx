
import { Check, CreditCard, BarChart, Globe, Clock } from "lucide-react";

const features = [
  {
    title: "Simple Checkout",
    description: "Streamlined checkout process optimized for conversion and user experience.",
    icon: CreditCard,
  },
  {
    title: "Recurring Billing",
    description: "Automated billing system for subscriptions and recurring payments.",
    icon: Clock,
  },
  {
    title: "Global Payments",
    description: "Accept payments from customers anywhere in the world.",
    icon: Globe,
  },
  {
    title: "Detailed Analytics",
    description: "Get insights into your business with comprehensive reporting.",
    icon: BarChart,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Everything You Need to Run & Grow Your Business
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          All the tools and features you need to accept payments, manage subscriptions, and scale your business globally.
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
