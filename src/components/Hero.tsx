
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const words = ["Business", "Restaurants", "Telecom", "Construction", "Retail", "E-commerce", "SaaS"];
  const wordColors = [
    "from-blue-400 to-purple-500",
    "from-orange-400 to-pink-500",
    "from-blue-500 to-cyan-400",
    "from-yellow-400 to-orange-500", 
    "from-emerald-400 to-teal-500",
    "from-purple-400 to-pink-500",
    "from-cyan-400 to-blue-500"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Speech bubble examples organized by rows
  const bubbleGroups = [
    // Row 1
    [
      "Tell me how to integrate a BB6630",
      "Show me the sales month over month",
      "What countries do my app downloads come from",
      "Generate the daily report on expenses"
    ],
    // Row 2
    [
      "Why am I losing orders despite rising traffic",
      "Which wine is our best seller and why",
      "What product trends are emerging this quarter",
      "How are discounts affecting our margins"
    ],
    // Row 3
    [
      "What's our customer satisfaction score",
      "Create an ad for our new product launch",
      "Plan an email campaign for Black Friday",
      "Analyze the latest customer feedback"
    ]
  ];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setFade(true);
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(false);
      }, 500); // Wait for fade out before changing word
    }, 3000); // Change word every 3 seconds
    
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <section className="pt-32 pb-16 container-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight text-white">
          Meet Osiri, your first AI assistant capable of making your company conversational. Customized for{" "}
          <span 
            className={`inline-block transition-opacity duration-500 font-extrabold italic bg-gradient-to-r ${wordColors[currentWordIndex]} bg-clip-text text-transparent ${fade ? 'opacity-0' : 'opacity-100'}`}
          >
            {words[currentWordIndex]}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-xl mx-auto">
          Integrate Osiri with your business and turn data into actionable insights through natural conversations.
        </p>

        {/* Continuous flowing speech bubbles */}
        <div className="mb-10 relative h-[180px] md:h-[160px] overflow-hidden">
          {bubbleGroups.map((bubbles, rowIndex) => (
            <div key={`row-${rowIndex}`} className="relative h-[60px] mb-1 overflow-hidden">
              {bubbles.map((text, bubbleIndex) => (
                <div 
                  key={`bubble-${rowIndex}-${bubbleIndex}`}
                  className="speech-bubble absolute whitespace-nowrap bubble-animation hover:bg-neutral-700 transition-colors cursor-pointer"
                  style={{ 
                    animationDelay: `${(bubbleIndex * 4) + (rowIndex * 1)}s`,
                    animationIterationCount: 'infinite'
                  }}
                >
                  {text}
                </div>
              ))}
            </div>
          ))}
        </div>

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
