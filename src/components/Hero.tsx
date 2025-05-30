import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
const Hero = () => {
  const topRowBubbles = ["Tell me how to integrate a BB6630", "Show me the sales month over month", "What country does my app downloads come from"];
  const middleRowBubbles = ["Which wine is our best seller and why", "Generate the daily report on today", "Why am I losing orders despite rising traffic"];
  const bottomRowBubbles = ["What product or customer trends are emerging over time", "How are discounts and promotions really affecting my margins"];
  const duplicateForScroll = array => [...array, ...array];
  return <>
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
              Meet <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">Osiri</span>, your first AI assistant capable of making your business conversational.
            </span>
          </h1>
          

          <div className="mb-8 overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-unified-slide mb-4 w-fit">
              {duplicateForScroll(topRowBubbles).map((text, index) => <div key={`top-${index}`} className="speech-bubble bg-neutral-800 text-white px-5 py-3 rounded-full text-base mx-3 inline-block font-medium shadow-lg">
                  {text}
                </div>)}
            </div>
            
            <div className="flex whitespace-nowrap animate-unified-slide mb-4 w-fit" style={{
            animationDelay: '-10s'
          }}>
              {duplicateForScroll(middleRowBubbles).map((text, index) => <div key={`middle-${index}`} className="speech-bubble bg-neutral-800 text-white px-5 py-3 rounded-full text-base mx-3 inline-block font-medium shadow-lg">
                  {text}
                </div>)}
            </div>
            
            <div className="flex whitespace-nowrap animate-unified-slide w-fit" style={{
            animationDelay: '-20s'
          }}>
              {duplicateForScroll(bottomRowBubbles).map((text, index) => <div key={`bottom-${index}`} className="speech-bubble bg-neutral-800 text-white px-5 py-3 rounded-full text-base mx-3 inline-block font-medium shadow-lg">
                  {text}
                </div>)}
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
        
        <div className="mt-4 w-full py-8 -mx-6 md:-mx-8 lg:-mx-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-card rounded-xl p-6 backdrop-blur-lg bg-neutral-900/40 border border-neutral-800/30 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="rounded-lg overflow-hidden">
                {/* Revolutionary AI Analytics Dashboard */}
                <div className="bg-gradient-to-br from-slate-900 via-blue-950/30 to-purple-950/20 p-8">
                  <div className="max-w-6xl mx-auto">
                    {/* Enhanced Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-3 flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">Ö</span>
                          </div>
                          Intelligent AI Business Analytics
                        </h2>
                        <p className="text-blue-300 text-lg">Real-time predictive insights powered by advanced machine learning</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 font-medium">AI Processing</span>
                        </div>
                      </div>
                    </div>

                    {/* Advanced Analytics Grid */}
                    <div className="grid grid-cols-12 gap-8">
                      {/* Main Predictive Analytics Chart */}
                      <div className="col-span-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <h3 className="text-white font-bold text-xl mb-2">AI Revenue Forecasting</h3>
                            <p className="text-gray-300">Multi-dimensional predictive modeling with 96.3% accuracy</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-500/10 px-3 py-2 rounded-lg border border-emerald-500/20">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                              +34.7% projected growth
                            </div>
                            <div className="text-xs text-gray-400 bg-gray-700/50 px-3 py-2 rounded-lg">
                              Last updated: Real-time
                            </div>
                          </div>
                        </div>
                        
                        {/* Revolutionary Chart Visualization */}
                        <div className="h-80 relative">
                          <svg className="w-full h-full" viewBox="0 0 500 300">
                            <defs>
                              <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
                                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                              </linearGradient>
                              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#06B6D4" />
                                <stop offset="30%" stopColor="#3B82F6" />
                                <stop offset="70%" stopColor="#8B5CF6" />
                                <stop offset="100%" stopColor="#EC4899" />
                              </linearGradient>
                              <linearGradient id="predictionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#10B981" />
                                <stop offset="100%" stopColor="#06B6D4" />
                              </linearGradient>
                              
                              {/* Glow Effect */}
                              <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge> 
                                  <feMergeNode in="coloredBlur" />
                                  <feMergeNode in="SourceGraphic" />
                                </feMerge>
                              </filter>
                            </defs>
                            
                            {/* Enhanced Grid */}
                            {[0, 1, 2, 3, 4, 5, 6].map(i => <line key={i} x1="50" y1={50 * i + 50} x2="450" y2={50 * i + 50} stroke="#374151" strokeWidth="1" opacity="0.2" />)}
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => <line key={i} x1={50 * i + 50} y1="50" x2={50 * i + 50} y2="300" stroke="#374151" strokeWidth="1" opacity="0.2" />)}
                            
                            {/* Historical Data Area */}
                            <path d="M 50 200 Q 100 180 150 160 T 250 120 T 350 90 L 350 300 L 50 300 Z" fill="url(#primaryGradient)" />
                            
                            {/* Historical Data Line */}
                            <path d="M 50 200 Q 100 180 150 160 T 250 120 T 350 90" stroke="url(#lineGradient)" strokeWidth="4" fill="none" filter="url(#glow)" className="animate-pulse" />
                            
                            {/* AI Prediction Line */}
                            <path d="M 350 90 Q 380 75 410 65 T 450 50" stroke="url(#predictionGradient)" strokeWidth="4" fill="none" strokeDasharray="12,6" filter="url(#glow)" className="animate-pulse" style={{
                            animationDelay: '0.5s'
                          }} />
                            
                            {/* Data Points with Animation */}
                            {[{
                            x: 50,
                            y: 200,
                            color: "#06B6D4"
                          }, {
                            x: 150,
                            y: 160,
                            color: "#3B82F6"
                          }, {
                            x: 250,
                            y: 120,
                            color: "#8B5CF6"
                          }, {
                            x: 350,
                            y: 90,
                            color: "#EC4899"
                          }].map((point, i) => <g key={i}>
                                <circle cx={point.x} cy={point.y} r="8" fill={point.color} className="animate-pulse" style={{
                              animationDelay: `${i * 0.3}s`
                            }} filter="url(#glow)" />
                                <circle cx={point.x} cy={point.y} r="4" fill="white" className="animate-pulse" style={{
                              animationDelay: `${i * 0.3}s`
                            }} />
                              </g>)}
                            
                            {/* AI Prediction Points */}
                            {[{
                            x: 380,
                            y: 75,
                            color: "#10B981"
                          }, {
                            x: 410,
                            y: 65,
                            color: "#06B6D4"
                          }, {
                            x: 450,
                            y: 50,
                            color: "#3B82F6"
                          }].map((point, i) => <g key={`pred-${i}`}>
                                <circle cx={point.x} cy={point.y} r="6" fill={point.color} className="animate-pulse" style={{
                              animationDelay: `${i * 0.4 + 1}s`
                            }} opacity="0.8" />
                                <circle cx={point.x} cy={point.y} r="12" fill="none" stroke={point.color} strokeWidth="2" className="animate-ping" style={{
                              animationDelay: `${i * 0.4 + 1}s`
                            }} opacity="0.3" />
                              </g>)}
                            
                            {/* Value Labels */}
                            <text x="50" y="220" fill="#9CA3AF" fontSize="12" textAnchor="middle">$2.4M</text>
                            <text x="150" y="180" fill="#9CA3AF" fontSize="12" textAnchor="middle">$3.1M</text>
                            <text x="250" y="140" fill="#9CA3AF" fontSize="12" textAnchor="middle">$4.2M</text>
                            <text x="350" y="110" fill="#9CA3AF" fontSize="12" textAnchor="middle">$5.8M</text>
                            <text x="450" y="70" fill="#10B981" fontSize="12" textAnchor="middle" fontWeight="bold">$7.9M</text>
                          </svg>
                          
                          {/* Enhanced Labels */}
                          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-gray-400 px-12">
                            <span className="font-medium">Q1 2024</span>
                            <span className="font-medium">Q2 2024</span>
                            <span className="font-medium">Q3 2024</span>
                            <span className="font-medium">Q4 2024</span>
                            <span className="font-medium text-emerald-400">Q1 2025</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-6">
                          <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                              <span className="text-gray-300 font-medium">Historical Revenue</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                              <span className="text-gray-300 font-medium">AI Predictions</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-400 text-sm">Confidence Level</p>
                            <p className="text-emerald-400 font-bold text-lg">96.3%</p>
                          </div>
                        </div>
                      </div>

                      {/* AI Intelligence Panel */}
                      <div className="col-span-4 space-y-6">
                        {/* Real-time AI Insights */}
                        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-sm"></div>
                            </div>
                            <h3 className="text-white font-bold text-lg">AI Intelligence Hub</h3>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20">
                              <div className="w-3 h-3 bg-emerald-400 rounded-full mt-1 animate-pulse"></div>
                              <div>
                                <p className="text-emerald-400 font-semibold text-sm">Growth Opportunity Detected</p>
                                <p className="text-gray-300 text-xs mt-1">Customer segment analysis reveals 47% untapped potential in enterprise market</p>
                                <p className="text-emerald-300 text-xs mt-2 font-medium">Recommended action: Expand B2B strategy</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                              <div className="w-3 h-3 bg-blue-400 rounded-full mt-1 animate-pulse"></div>
                              <div>
                                <p className="text-blue-400 font-semibold text-sm">Predictive Alert</p>
                                <p className="text-gray-300 text-xs mt-1">Q1 revenue pattern suggests 23% increase in subscription renewals</p>
                                <p className="text-blue-300 text-xs mt-2 font-medium">Confidence: 94.2%</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                              <div className="w-3 h-3 bg-purple-400 rounded-full mt-1 animate-pulse"></div>
                              <div>
                                <p className="text-purple-400 font-semibold text-sm">Market Intelligence</p>
                                <p className="text-gray-300 text-xs mt-1">Competitive analysis shows optimal pricing window opening in Q2</p>
                                <p className="text-purple-300 text-xs mt-2 font-medium">Impact: +$1.2M potential</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* AI Performance Metrics */}
                        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                            AI Model Performance
                          </h3>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="relative w-16 h-16 mx-auto mb-2">
                                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                                  <circle cx="50" cy="50" r="35" stroke="#374151" strokeWidth="6" fill="none" />
                                  <circle cx="50" cy="50" r="35" stroke="url(#lineGradient)" strokeWidth="6" fill="none" strokeDasharray="220" strokeDashoffset="22" className="animate-pulse" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-white font-bold text-sm">96%</span>
                                </div>
                              </div>
                              <p className="text-gray-400 text-xs">Accuracy</p>
                            </div>
                            
                            <div className="text-center">
                              <div className="relative w-16 h-16 mx-auto mb-2">
                                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                                  <circle cx="50" cy="50" r="35" stroke="#374151" strokeWidth="6" fill="none" />
                                  <circle cx="50" cy="50" r="35" stroke="url(#predictionGradient)" strokeWidth="6" fill="none" strokeDasharray="220" strokeDashoffset="44" className="animate-pulse" style={{
                                  animationDelay: '0.5s'
                                }} />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-white font-bold text-sm">87%</span>
                                </div>
                              </div>
                              <p className="text-gray-400 text-xs">Speed</p>
                            </div>
                          </div>
                          
                          <div className="mt-4 p-3 bg-gray-700/30 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-400 text-xs">Processing Power</span>
                              <span className="text-cyan-400 text-xs font-medium">Real-time</span>
                            </div>
                            <div className="w-full bg-gray-600 rounded-full h-2">
                              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-4/5 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Metrics Cards */}
                      <div className="col-span-12 grid grid-cols-4 gap-6">
                        <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-5 border border-emerald-500/20">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-gray-300 font-medium">Revenue Growth</span>
                            <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl opacity-90 flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-sm"></div>
                            </div>
                          </div>
                          <div className="text-3xl font-bold text-white mb-1">+34.7%</div>
                          <div className="text-emerald-400 text-sm font-medium">↗ AI Predicted Growth</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-5 border border-blue-500/20">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-gray-300 font-medium">Customer LTV</span>
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl opacity-90 flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-sm"></div>
                            </div>
                          </div>
                          <div className="text-3xl font-bold text-white mb-1">$3,247</div>
                          <div className="text-blue-400 text-sm font-medium">ML Enhanced</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-5 border border-purple-500/20">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-gray-300 font-medium">Churn Prevention</span>
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl opacity-90 flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-sm"></div>
                            </div>
                          </div>
                          <div className="text-3xl font-bold text-white mb-1">89.4%</div>
                          <div className="text-purple-400 text-sm font-medium">Early Detection</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-xl p-5 border border-orange-500/20">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-gray-300 font-medium">ROI Optimization</span>
                            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl opacity-90 flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-sm"></div>
                            </div>
                          </div>
                          <div className="text-3xl font-bold text-white mb-1">+247%</div>
                          <div className="text-orange-400 text-sm font-medium">AI Optimized</div>
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
    </>;
};
export default Hero;