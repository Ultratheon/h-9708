
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const Hero = () => {
  const topRowBubbles = ["Tell me how to integrate a BB6630", "Show me the sales month over month", "What country does my app downloads come from"];
  const middleRowBubbles = ["Which wine is our best seller and why", "Generate the daily report on today", "Why am I losing orders despite rising traffic"];
  const bottomRowBubbles = ["What product or customer trends are emerging over time", "How are discounts and promotions really affecting my margins"];

  const duplicateForScroll = array => [...array, ...array];

  return (
    <>
      <Helmet>
        <title>OsiriAI - Your AI Business Assistant | Data Insights Through Conversation</title>
        <meta name="description" content="OsiriAI transforms your business data into actionable insights through natural conversations. Customize for any industry including Retail, E-commerce, Restaurants, and more." />
        <meta name="keywords" content="AI business assistant, conversational AI, business intelligence, data insights, natural language processing" />
        <link rel="canonical" href="https://osiriai.com/" />
      </Helmet>
      
      <section className="pt-32 pb-8 container-padding" aria-label="AI Business Assistant Introduction">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            <span className="text-white">
              Meet <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Osiri</span>, your first AI assistant capable of making your company conversational.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 mb-4 max-w-xl mx-auto">
            Integrate Osiri with your business and turn data into actionable insights through natural conversations.
          </p>

          <div className="mb-8 overflow-hidden relative">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/demo" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg flex items-center justify-center gap-2">
              Access Platform
              <ArrowRight className="w-4 h-4" />
            </a>
            <button className="bg-neutral-800 text-white px-6 py-3 rounded-lg hover:bg-neutral-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="mt-8 w-full py-8 -mx-6 md:-mx-8 lg:-mx-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-card rounded-xl p-6 backdrop-blur-lg bg-neutral-900/40 border border-neutral-800/30 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="rounded-lg overflow-hidden">
                {/* AI-Powered Data Visualization Dashboard */}
                <div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 p-8">
                  <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">O</span>
                          </div>
                          AI Business Analytics Dashboard
                        </h2>
                        <p className="text-blue-300">Real-time insights powered by artificial intelligence</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm">Live Analytics</span>
                      </div>
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-12 gap-6">
                      {/* Revenue Prediction Chart */}
                      <div className="col-span-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-white font-semibold">AI Revenue Prediction</h3>
                          <div className="flex items-center gap-2 text-green-400 text-sm">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            +23.5% accuracy improvement
                          </div>
                        </div>
                        
                        {/* Animated Line Chart */}
                        <div className="h-64 relative">
                          <svg className="w-full h-full" viewBox="0 0 400 200">
                            {/* Grid */}
                            <defs>
                              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                              </linearGradient>
                              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#06B6D4"/>
                                <stop offset="100%" stopColor="#3B82F6"/>
                              </linearGradient>
                            </defs>
                            
                            {/* Grid lines */}
                            {[0, 1, 2, 3, 4].map(i => (
                              <line key={i} x1="0" y1={40 * i} x2="400" y2={40 * i} stroke="#374151" strokeWidth="0.5" opacity="0.3"/>
                            ))}
                            {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                              <line key={i} x1={50 * i} y1="0" x2={50 * i} y2="200" stroke="#374151" strokeWidth="0.5" opacity="0.3"/>
                            ))}
                            
                            {/* Actual Data Line */}
                            <path
                              d="M 0 150 Q 50 120 100 110 T 200 90 T 300 70"
                              stroke="#06B6D4"
                              strokeWidth="3"
                              fill="none"
                              className="animate-pulse"
                            />
                            
                            {/* Predicted Data Line */}
                            <path
                              d="M 200 90 Q 250 75 300 70 T 400 50"
                              stroke="#3B82F6"
                              strokeWidth="3"
                              fill="none"
                              strokeDasharray="8,4"
                              className="animate-pulse"
                              style={{ animationDelay: '0.5s' }}
                            />
                            
                            {/* Area under curve */}
                            <path
                              d="M 0 150 Q 50 120 100 110 T 200 90 T 300 70 L 300 200 L 0 200 Z"
                              fill="url(#areaGradient)"
                              opacity="0.6"
                            />
                            
                            {/* Data points */}
                            {[
                              { x: 0, y: 150 },
                              { x: 100, y: 110 },
                              { x: 200, y: 90 },
                              { x: 300, y: 70 }
                            ].map((point, i) => (
                              <circle 
                                key={i}
                                cx={point.x} 
                                cy={point.y} 
                                r="4" 
                                fill="#06B6D4"
                                className="animate-pulse"
                                style={{ animationDelay: `${i * 0.2}s` }}
                              />
                            ))}
                          </svg>
                          
                          {/* Labels */}
                          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                            <span>Jun</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6 mt-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">Actual Revenue</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">AI Prediction</span>
                          </div>
                        </div>
                      </div>

                      {/* AI Insights Panel */}
                      <div className="col-span-4 space-y-6">
                        {/* Key Metrics */}
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                          <h3 className="text-white font-semibold mb-4">AI-Generated Insights</h3>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <div>
                                <p className="text-green-400 text-sm font-medium">Revenue Opportunity</p>
                                <p className="text-gray-300 text-xs">Customer segment B shows 34% growth potential</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                              <div>
                                <p className="text-yellow-400 text-sm font-medium">Trend Alert</p>
                                <p className="text-gray-300 text-xs">Seasonal pattern detected in Q2 performance</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                              <div>
                                <p className="text-blue-400 text-sm font-medium">Optimization</p>
                                <p className="text-gray-300 text-xs">Marketing spend efficiency up 28%</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Performance Ring */}
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                          <h3 className="text-white font-semibold mb-4">AI Performance Score</h3>
                          <div className="flex items-center justify-center">
                            <div className="relative w-24 h-24">
                              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  stroke="#374151"
                                  strokeWidth="8"
                                  fill="none"
                                />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  stroke="url(#lineGradient)"
                                  strokeWidth="8"
                                  fill="none"
                                  strokeDasharray="251.2"
                                  strokeDashoffset="62.8"
                                  className="animate-pulse"
                                />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">94%</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-gray-400 text-sm mt-2">Prediction Accuracy</p>
                        </div>
                      </div>

                      {/* Bottom Analytics Cards */}
                      <div className="col-span-12 grid grid-cols-4 gap-4">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400 text-sm">Revenue Growth</span>
                            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg opacity-80"></div>
                          </div>
                          <div className="text-2xl font-bold text-white">+23.5%</div>
                          <div className="text-green-400 text-sm">↗ AI Predicted</div>
                        </div>
                        
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400 text-sm">Customer LTV</span>
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg opacity-80"></div>
                          </div>
                          <div className="text-2xl font-bold text-white">$2,847</div>
                          <div className="text-purple-400 text-sm">AI Enhanced</div>
                        </div>
                        
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400 text-sm">Churn Risk</span>
                            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg opacity-80"></div>
                          </div>
                          <div className="text-2xl font-bold text-white">12.3%</div>
                          <div className="text-yellow-400 text-sm">Early Warning</div>
                        </div>
                        
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400 text-sm">ROI Optimization</span>
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-80"></div>
                          </div>
                          <div className="text-2xl font-bold text-white">+187%</div>
                          <div className="text-cyan-400 text-sm">AI Optimized</div>
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
