
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
                <div className="bg-gray-900 flex h-[600px]">
                  {/* Left Sidebar - Chat Interface */}
                  <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
                    {/* Sidebar Header */}
                    <div className="p-4 border-b border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">O</span>
                        </div>
                        <span className="text-white font-medium">Osiri</span>
                      </div>
                      
                      {/* Navigation */}
                      <nav className="space-y-1">
                        <div className="flex items-center gap-3 p-2 bg-purple-600 rounded-md text-white text-sm">
                          <div className="w-4 h-4 bg-white/20 rounded"></div>
                          Dashboard
                        </div>
                        <div className="flex items-center gap-3 p-2 text-gray-400 text-sm hover:bg-gray-700 rounded">
                          <div className="w-4 h-4 bg-gray-600 rounded"></div>
                          Search
                        </div>
                        <div className="flex items-center gap-3 p-2 text-gray-400 text-sm hover:bg-gray-700 rounded">
                          <div className="w-4 h-4 bg-gray-600 rounded"></div>
                          Notifications
                        </div>
                      </nav>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                      <div className="space-y-3">
                        <div className="bg-gray-700 rounded-lg p-3">
                          <p className="text-white text-sm">Show me revenue trends for Q4</p>
                        </div>
                        <div className="bg-purple-600 rounded-lg p-3 ml-4">
                          <p className="text-white text-sm">Here's your Q4 revenue analysis. Revenue grew 12.5% compared to Q3...</p>
                        </div>
                        <div className="bg-gray-700 rounded-lg p-3">
                          <p className="text-white text-sm">Which products are performing best?</p>
                        </div>
                        <div className="bg-purple-600 rounded-lg p-3 ml-4">
                          <p className="text-white text-sm">Based on your data, here are the top performing products...</p>
                        </div>
                      </div>
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 border-t border-gray-700">
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Ask about your business..." 
                          className="flex-1 bg-gray-700 text-white placeholder-gray-400 px-3 py-2 rounded-md text-sm border-none outline-none"
                        />
                        <button className="bg-purple-600 text-white px-3 py-2 rounded-md">
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Main Dashboard Content */}
                  <div className="flex-1 bg-gray-900 p-6">
                    {/* Dashboard Header */}
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-white mb-1">Welcome Back, John!</h2>
                      <p className="text-gray-400 text-sm">Today you have 3 new leads, 2 follow-ups due</p>
                    </div>

                    {/* KPI Cards */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                        <p className="text-gray-400 text-xs mb-1">Product Revenue</p>
                        <p className="text-lg font-bold text-white">$10,312.10</p>
                        <p className="text-green-400 text-xs">+20% ($1,420)</p>
                      </div>
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                        <p className="text-gray-400 text-xs mb-1">Total Sales Product</p>
                        <p className="text-lg font-bold text-white">224</p>
                        <p className="text-green-400 text-xs">+5% (64)</p>
                      </div>
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                        <p className="text-gray-400 text-xs mb-1">Total Deals</p>
                        <p className="text-lg font-bold text-white">3,612</p>
                        <p className="text-red-400 text-xs">-2% (139)</p>
                      </div>
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                        <p className="text-gray-400 text-xs mb-1">Conversion</p>
                        <p className="text-lg font-bold text-white">67%</p>
                        <p className="text-yellow-400 text-xs">+1.2%</p>
                      </div>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {/* Lead Sources Breakdown - Donut Chart */}
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                        <h3 className="text-white font-semibold mb-3 text-sm">Lead Sources Breakdown</h3>
                        <div className="flex items-center justify-center mb-4">
                          <div className="relative w-32 h-32">
                            <div className="w-32 h-32 rounded-full border-8 border-blue-500"></div>
                            <div className="absolute inset-0 w-32 h-32 rounded-full border-8 border-transparent border-t-purple-500 border-r-pink-500 border-b-green-500 transform rotate-45"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-white font-bold text-lg">3,612</div>
                                <div className="text-gray-400 text-xs">Total Leads</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-300">Website</span>
                            </div>
                            <span className="text-white">1,445</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <span className="text-gray-300">Paid Ads</span>
                            </div>
                            <span className="text-white">903</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                              <span className="text-gray-300">Emails</span>
                            </div>
                            <span className="text-white">732</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-gray-300">Referral</span>
                            </div>
                            <span className="text-white">531</span>
                          </div>
                        </div>
                      </div>

                      {/* Revenue Flow */}
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                        <h3 className="text-white font-semibold mb-3 text-sm">Revenue Flow</h3>
                        <div className="mb-4">
                          <div className="text-2xl font-bold text-white">$284,000</div>
                          <div className="text-gray-400 text-xs">Total Revenue (Last 6 Months)</div>
                        </div>
                        <div className="mb-4">
                          <div className="text-yellow-400 text-sm font-medium">⭐ Best Performing Month</div>
                          <div className="text-gray-300 text-xs">March is the highest revenue with 6 months with $91,500</div>
                        </div>
                        {/* Bar Chart */}
                        <div className="flex items-end justify-between h-20 gap-1">
                          <div className="flex flex-col items-center">
                            <div className="bg-purple-500 w-6 h-12 rounded-t"></div>
                            <span className="text-gray-400 text-xs mt-1">Jan</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="bg-purple-500 w-6 h-16 rounded-t"></div>
                            <span className="text-gray-400 text-xs mt-1">Feb</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="bg-purple-500 w-6 h-20 rounded-t"></div>
                            <span className="text-gray-400 text-xs mt-1">Mar</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="bg-purple-500 w-6 h-14 rounded-t"></div>
                            <span className="text-gray-400 text-xs mt-1">Apr</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="bg-purple-500 w-6 h-18 rounded-t"></div>
                            <span className="text-gray-400 text-xs mt-1">May</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="bg-purple-500 w-6 h-16 rounded-t"></div>
                            <span className="text-gray-400 text-xs mt-1">Jun</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Company Leads Table */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-semibold text-sm">Company Leads</h3>
                        <div className="flex gap-2">
                          <button className="text-gray-400 text-xs px-2 py-1 border border-gray-600 rounded">Filter</button>
                          <button className="text-gray-400 text-xs px-2 py-1 border border-gray-600 rounded">Sort</button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="grid grid-cols-4 gap-4 text-gray-400 text-xs border-b border-gray-700 pb-2">
                          <span>Company</span>
                          <span>Description</span>
                          <span>Domains</span>
                          <span>Location</span>
                        </div>
                        <div className="grid grid-cols-4 gap-4 text-white text-xs py-2">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                              <span className="text-white text-xs">L</span>
                            </div>
                            <span>Loom</span>
                          </div>
                          <span className="text-gray-300">Video messaging tool that he...</span>
                          <span className="text-blue-400">loom.com</span>
                          <span className="text-gray-300">San Francisco, 147 2nd Street, Sal Floor, Unite...</span>
                        </div>
                        <div className="grid grid-cols-4 gap-4 text-white text-xs py-2">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                              <span className="text-white text-xs">N</span>
                            </div>
                            <span>Notion</span>
                          </div>
                          <span className="text-gray-300">All-in-one workspace for no...</span>
                          <span className="text-blue-400">notion.so</span>
                          <span className="text-gray-300">San Francisco, 2300 Harrison Street, United St...</span>
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
