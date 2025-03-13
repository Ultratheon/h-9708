import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
const Hero = () => {
  const words = ["Business", "Restaurants", "Telecom", "Construction", "Retail", "E-commerce", "SaaS"];
  const wordColors = ["from-blue-400 to-purple-500", "from-orange-400 to-pink-500", "from-blue-500 to-cyan-400", "from-yellow-400 to-orange-500", "from-emerald-400 to-teal-500", "from-purple-400 to-pink-500", "from-cyan-400 to-blue-500"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Speech bubble texts for the three rows
  const topRowBubbles = ["Tell me how to integrate a BB6630", "Show me the sales month over month", "What country does my app downloads come from"];
  const middleRowBubbles = ["Which wine is our best seller and why", "Generate the daily report on today", "Why am I losing orders despite rising traffic"];
  const bottomRowBubbles = ["What product or customer trends are emerging over time", "How are discounts and promotions really affecting my margins"];
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
        setFade(false);
      }, 500); // Wait for fade out before changing word
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(wordInterval);
  }, []);

  // Helper function to duplicate arrays for seamless sliding
  const duplicateForScroll = array => [...array, ...array];
  return <section className="pt-32 pb-16 container-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight text-white">
          Meet Osiri, your first AI assistant capable of making your company conversational.
          <div className="flex items-center justify-center">
            <span className="whitespace-nowrap">Customized for</span>
            <div className="inline-block ml-2 min-w-[120px] text-center">
              <span className={`inline-block transition-opacity duration-500 font-extrabold italic bg-gradient-to-r ${wordColors[currentWordIndex]} bg-clip-text text-transparent ${fade ? 'opacity-0' : 'opacity-100'}`}>
                {words[currentWordIndex]}
              </span>
            </div>
          </div>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-4 max-w-xl mx-auto">
          Integrate Osiri with your business and turn data into actionable insights through natural conversations.
        </p>

        {/* Speech bubbles - positioned closer to the subtitle text */}
        <div className="mb-10 overflow-hidden relative">
          {/* Top row - with duplicated content for seamless loop */}
          <div className="flex whitespace-nowrap animate-unified-slide mb-3 w-fit">
            {duplicateForScroll(topRowBubbles).map((text, index) => <div key={`top-${index}`} className="speech-bubble bg-neutral-800 text-white px-4 py-2 rounded-full text-sm mx-2 inline-block">
                {text}
              </div>)}
          </div>
          
          {/* Middle row - with duplicated content for seamless loop */}
          <div className="flex whitespace-nowrap animate-unified-slide mb-3 w-fit" style={{
          animationDelay: '-10s'
        }}>
            {duplicateForScroll(middleRowBubbles).map((text, index) => <div key={`middle-${index}`} className="speech-bubble bg-neutral-800 text-white px-4 py-2 rounded-full text-sm mx-2 inline-block">
                {text}
              </div>)}
          </div>
          
          {/* Bottom row - with duplicated content for seamless loop */}
          <div className="flex whitespace-nowrap animate-unified-slide w-fit" style={{
          animationDelay: '-20s'
        }}>
            {duplicateForScroll(bottomRowBubbles).map((text, index) => <div key={`bottom-${index}`} className="speech-bubble bg-neutral-800 text-white px-4 py-2 rounded-full text-sm mx-2 inline-block">
                {text}
              </div>)}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-neutral-900 px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
            Access Platform
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-neutral-800 text-white px-6 py-3 rounded-lg hover:bg-neutral-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-16 glass-card rounded-xl p-4 max-w-4xl mx-auto">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt="Dashboard Preview" className="rounded-lg w-full" />
      </div>
    </section>;
};
export default Hero;