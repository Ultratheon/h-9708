const Pricing = () => {
  return <section className="py-16 container-padding bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-neutral-400 text-center max-w-xl mx-auto mb-12">
          Choose the plan that's right for your business
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* First Card - $20 (was $99) */}
          <div className="glass-card rounded-xl p-6 flex flex-col h-full border-t-2 border-t-blue-500 hover:translate-y-[-8px] transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$39</span>
              <span className="text-neutral-400">/month</span>
            </div>
            <p className="text-neutral-400 mb-6">Perfect for small businesses getting started with AI.</p>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-neutral-300">1 User</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-neutral-300">1 Integration</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-neutral-300">Automated Insights</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors mt-auto">
              Get Started
            </button>
          </div>
          
          {/* Second Card - $99 (was $199) */}
          <div className="bg-neutral-800 rounded-xl p-6 flex flex-col h-full relative border-t-2 border-t-purple-500 scale-105 z-10 hover:translate-y-[-8px] transition-transform duration-300 shadow-lg">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs font-bold py-1 px-3 rounded-full">
              POPULAR
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Business</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">$99</span>
              <span className="text-neutral-400">/month</span>
            </div>
            <p className="text-neutral-400 mb-6">Ideal for growing businesses needing more capabilities.</p>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-white">3 Users</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-white">3 Integrations</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-white">Automated Insights</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-white">Added Layer of Security</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-white">24/7 Support</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors mt-auto">
              Get Started
            </button>
          </div>
          
          {/* Third Card - Custom */}
          <div className="glass-card rounded-xl p-6 flex flex-col h-full border-t-2 border-t-neutral-500 hover:translate-y-[-8px] transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-white">Custom</span>
            </div>
            <p className="text-neutral-400 mb-6">For larger organizations with specific requirements.</p>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neutral-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-neutral-300">Unlimited Users</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neutral-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-neutral-300">Custom Integrations</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neutral-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-neutral-300">Advanced Analytics</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neutral-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-neutral-300">Enterprise Security</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neutral-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-neutral-300">Dedicated Success Manager</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors mt-auto">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Pricing;