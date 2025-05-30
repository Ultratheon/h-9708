
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      content: "OsiriAI transformed how we understand our customer data. The insights are incredibly actionable and have directly contributed to a 40% increase in our conversion rates.",
      rating: 5,
      avatar: "/lovable-uploads/452c2d11-5db4-4449-8370-3c7d4c6e265a.png"
    },
    {
      name: "Marcus Rodriguez",
      role: "Data Director, RetailPro",
      content: "Finally, an AI that speaks business language. Instead of complex dashboards, I can just ask questions and get immediate insights that drive real decisions.",
      rating: 5,
      avatar: "/lovable-uploads/6ac89d8c-4d30-45a0-abc0-f2d835e9a77d.png"
    },
    {
      name: "Emily Watson",
      role: "Operations Manager, FoodChain+",
      content: "The predictive analytics helped us optimize our inventory management. We've reduced waste by 35% while improving customer satisfaction scores.",
      rating: 5,
      avatar: "/lovable-uploads/95d109a3-40d5-4a88-8d97-d37381be91ed.png"
    }
  ];

  return (
    <section className="py-20 bg-neutral-900" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Data-Driven Leaders
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            See how businesses are transforming their decision-making with AI-powered insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-slate-900 via-blue-950/30 to-purple-950/20 rounded-2xl p-8 border border-neutral-700">
              {/* Mobile Analytics Dashboard */}
              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">📱</span>
                  </div>
                  Mobile-First Analytics
                </h3>
                <p className="text-blue-300 text-sm">Real-time insights optimized for mobile decision-making</p>
              </div>

              {/* Mobile Dashboard Visualization */}
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Live Data</span>
                  </div>
                  <div className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                    Mobile Dashboard
                  </div>
                </div>

                {/* Interactive Chart */}
                <div className="h-48 relative mb-4">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6"/>
                        <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id="mobileLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06B6D4"/>
                        <stop offset="50%" stopColor="#3B82F6"/>
                        <stop offset="100%" stopColor="#8B5CF6"/>
                      </linearGradient>
                      <filter id="mobileGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Grid */}
                    {[0, 1, 2, 3, 4].map(i => (
                      <line key={i} x1="30" y1={40 * i + 20} x2="370" y2={40 * i + 20} stroke="#374151" strokeWidth="1" opacity="0.3"/>
                    ))}
                    {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                      <line key={i} x1={50 * i + 30} y1="20" x2={50 * i + 30} y2="180" stroke="#374151" strokeWidth="1" opacity="0.3"/>
                    ))}
                    
                    {/* Mobile Usage Area Chart */}
                    <path
                      d="M 30 140 Q 80 120 130 100 T 230 80 T 330 60 L 330 180 L 30 180 Z"
                      fill="url(#mobileGradient)"
                    />
                    
                    {/* Mobile Usage Line */}
                    <path
                      d="M 30 140 Q 80 120 130 100 T 230 80 T 330 60"
                      stroke="url(#mobileLineGradient)"
                      strokeWidth="3"
                      fill="none"
                      filter="url(#mobileGlow)"
                      className="animate-pulse"
                    />
                    
                    {/* Data Points */}
                    {[
                      { x: 30, y: 140, color: "#06B6D4", label: "45%" },
                      { x: 130, y: 100, color: "#3B82F6", label: "67%" },
                      { x: 230, y: 80, color: "#8B5CF6", label: "78%" },
                      { x: 330, y: 60, color: "#EC4899", label: "89%" }
                    ].map((point, i) => (
                      <g key={i}>
                        <circle 
                          cx={point.x} 
                          cy={point.y} 
                          r="6" 
                          fill={point.color}
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                          filter="url(#mobileGlow)"
                        />
                        <circle 
                          cx={point.x} 
                          cy={point.y} 
                          r="3" 
                          fill="white"
                        />
                        <text 
                          x={point.x} 
                          y={point.y - 15} 
                          fill="#9CA3AF" 
                          fontSize="11" 
                          textAnchor="middle"
                          fontWeight="bold"
                        >
                          {point.label}
                        </text>
                      </g>
                    ))}
                    
                    {/* Labels */}
                    <text x="30" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Q1</text>
                    <text x="130" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Q2</text>
                    <text x="230" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Q3</text>
                    <text x="330" y="195" fill="#9CA3AF" fontSize="10" textAnchor="middle">Q4</text>
                  </svg>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Mobile Engagement Growth</span>
                  </div>
                  <span className="text-cyan-400 font-bold">+89%</span>
                </div>
              </div>

              {/* Mobile Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-lg p-4 border border-emerald-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-xs">📊</span>
                    </div>
                    <span className="text-gray-300 text-xs font-medium">Active Users</span>
                  </div>
                  <div className="text-xl font-bold text-white">2.4M</div>
                  <div className="text-emerald-400 text-xs">↗ +23% mobile</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-4 border border-blue-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-xs">⚡</span>
                    </div>
                    <span className="text-gray-300 text-xs font-medium">Speed Index</span>
                  </div>
                  <div className="text-xl font-bold text-white">1.2s</div>
                  <div className="text-blue-400 text-xs">98% faster</div>
                </div>
              </div>

              {/* Real-time Insights */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <p className="text-purple-400 font-semibold text-xs">Mobile Insight</p>
                    <p className="text-gray-300 text-xs">78% of users prefer mobile analytics over desktop dashboards</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <p className="text-cyan-400 font-semibold text-xs">Performance Alert</p>
                    <p className="text-gray-300 text-xs">Mobile load times improved by 40% with AI optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
