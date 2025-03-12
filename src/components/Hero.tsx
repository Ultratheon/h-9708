
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 container-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight text-white">
          Simplifying Payments for Growing Business
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
          Streamline your payment processes and focus on what matters most - growing your business. Simple, secure, and seamless.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-neutral-900 px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-neutral-800 text-white px-6 py-3 rounded-lg hover:bg-neutral-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-16 glass-card rounded-xl p-4 max-w-4xl mx-auto animate-float">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt="Dashboard Preview"
          className="rounded-lg w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
