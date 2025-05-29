
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const Hero = () => {
  const words = ["Business", "Restaurants", "Telecom", "Construction", "Retail", "E-commerce", "SaaS"];
  const wordColors = ["from-blue-400 to-purple-500", "from-orange-400 to-pink-500", "from-blue-500 to-cyan-400", "from-yellow-400 to-orange-500", "from-emerald-400 to-teal-500", "from-purple-400 to-pink-500", "from-cyan-400 to-blue-500"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const topRowBubbles = ["Tell me how to integrate a BB6630", "Show me the sales month over month", "What country does my app downloads come from"];
  const middleRowBubbles = ["Which wine is our best seller and why", "Generate the daily report on today", "Why am I losing orders despite rising traffic"];
  const bottomRowBubbles = ["What product or customer trends are emerging over time", "How are discounts and promotions really affecting my margins"];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
        setFade(false);
      }, 500);
    }, 3000);

    return () => clearInterval(wordInterval);
  }, []);

  const duplicateForScroll = array => [...array, ...array];

  return (
    <>
      <Helmet>
        <title>OsiriAI - Your AI Business Assistant | Data Insights Through Conversation</title>
        <meta name="description" content="OsiriAI transforms your business data into actionable insights through natural conversations. Customize for any industry including Retail, E-commerce, Restaurants, and more." />
        <meta name="keywords" content="AI business assistant, conversational AI, business intelligence, data insights, natural language processing" />
        <link rel="canonical" href="https://osiriai.com/" />
      </Helmet>
      
      <section className="pt-32 pb-16 container-padding" aria-label="AI Business Assistant Introduction">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            <span className="bg-gradient-to-r from-red-400 to-magenta-500 bg-clip-text text-transparent">
              Meet Osiri, your first AI assistant capable of making your company conversational.
            </span>
            <div className="flex items-center justify-center text-white">
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

          <div className="mb-10 overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-unified-slide mb-4 w-fit">
              {duplicateForScroll(topRowBubbles).map((text, index) => (
                <div 
                  key={`top-${index}`} 
                  className="speech-bubble bg-neutral-800 text-white px-5 py-3 rounded-full text-base mx-3 inline-block font-medium shadow-lg"
                >
                  {text}
                </div>
              ))}
            </div>
            
            <div 
              className="flex whitespace-nowrap animate-unified-slide mb-4 w-fit" 
              style={{
                animationDelay: '-10s'
              }}
            >
              {duplicateForScroll(middleRowBubbles).map((text, index) => (
                <div 
                  key={`middle-${index}`} 
                  className="speech-bubble bg-neutral-800 text-white px-5 py-3 rounded-full text-base mx-3 inline-block font-medium shadow-lg"
                >
                  {text}
                </div>
              ))}
            </div>
            
            <div 
              className="flex whitespace-nowrap animate-unified-slide w-fit" 
              style={{
                animationDelay: '-20s'
              }}
            >
              {duplicateForScroll(bottomRowBubbles).map((text, index) => (
                <div 
                  key={`bottom-${index}`} 
                  className="speech-bubble bg-neutral-800 text-white px-5 py-3 rounded-full text-base mx-3 inline-block font-medium shadow-lg"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/demo" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg flex items-center justify-center gap-2">
              Access Platform
              <ArrowRight className="w-4 h-4" />
            </a>
            <button className="bg-neutral-800 text-white px-6 py-3 rounded-lg hover:bg-neutral-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="mt-16 w-full py-16 -mx-6 md:-mx-8 lg:-mx-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-card rounded-xl p-4 backdrop-blur-lg bg-neutral-900/40 border border-neutral-800/30 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-1">Business Analytics Dashboard</h2>
                    <p className="text-slate-300 text-sm">Real-time insights for your growing business</p>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <p className="text-slate-300 text-xs mb-1">Total Revenue</p>
                      <p className="text-lg font-bold text-white">$328K</p>
                      <p className="text-green-400 text-xs">+12.5%</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <p className="text-slate-300 text-xs mb-1">Active Users</p>
                      <p className="text-lg font-bold text-white">24.6K</p>
                      <p className="text-blue-400 text-xs">+8.2%</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <p className="text-slate-300 text-xs mb-1">Conversion</p>
                      <p className="text-lg font-bold text-white">3.24%</p>
                      <p className="text-yellow-400 text-xs">+0.3%</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <p className="text-slate-300 text-xs mb-1">Orders</p>
                      <p className="text-lg font-bold text-white">1,309</p>
                      <p className="text-purple-400 text-xs">+15.8%</p>
                    </div>
                  </div>

                  {/* Charts Preview */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h3 className="text-white font-semibold mb-3 text-sm">Revenue Trends</h3>
                      <div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded flex items-end justify-around p-2">
                        <div className="bg-blue-500 w-4 h-16 rounded-t"></div>
                        <div className="bg-blue-500 w-4 h-20 rounded-t"></div>
                        <div className="bg-blue-500 w-4 h-12 rounded-t"></div>
                        <div className="bg-blue-500 w-4 h-24 rounded-t"></div>
                        <div className="bg-blue-500 w-4 h-18 rounded-t"></div>
                        <div className="bg-blue-500 w-4 h-28 rounded-t"></div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h3 className="text-white font-semibold mb-3 text-sm">Traffic Sources</h3>
                      <div className="flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border-8 border-blue-500 border-r-green-500 border-b-yellow-500 border-l-red-500"></div>
                      </div>
                      <div className="mt-3 space-y-1">
                        <div className="flex items-center text-xs">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-slate-300">Organic 45%</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-slate-300">Direct 25%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
