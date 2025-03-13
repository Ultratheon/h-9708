
const testimonials = [
  {
    quote: "Switching to this platform has transformed how we handle payments. The simplicity is unmatched.",
    author: "Sarah Chen",
    role: "CEO at TechFlow",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
  },
  {
    quote: "The recurring billing feature alone has saved us countless hours of manual work each month.",
    author: "Mark Thompson",
    role: "Founder of DataSync",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote: "Their global payment solutions helped us expand into new markets seamlessly.",
    author: "Elena Rodriguez",
    role: "COO at GlobalTech",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 container-padding bg-neutral-900">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" className="w-full max-w-4xl">
            {/* Dark background */}
            <rect width="1200" height="700" fill="#0F172A"/>
            
            {/* Left side content area */}
            <g>
              {/* Heading text */}
              <text x="100" y="180" fill="#FFFFFF" fontFamily="Arial" fontWeight="bold" fontSize="50">Intelligent AI</text>
              <text x="100" y="240" fill="#FFFFFF" fontFamily="Arial" fontWeight="bold" fontSize="50">for your business</text>
              <text x="100" y="300" fill="#FFFFFF" fontFamily="Arial" fontWeight="bold" fontSize="50">analytics</text>
              
              {/* Divider line */}
              <line x1="100" y1="340" x2="450" y2="340" stroke="#3B82F6" strokeWidth="3"/>
              
              {/* Description text */}
              <text x="100" y="400" fill="#FFFFFF" fontFamily="Arial" fontSize="20" opacity="0.9">Osiri AI transforms your business data into</text>
              <text x="100" y="430" fill="#FFFFFF" fontFamily="Arial" fontSize="20" opacity="0.9">actionable insights through natural conversation.</text>
              <text x="100" y="460" fill="#FFFFFF" fontFamily="Arial" fontSize="20" opacity="0.9">Connect your data sources and ask questions</text>
              <text x="100" y="490" fill="#FFFFFF" fontFamily="Arial" fontSize="20" opacity="0.9">in plain language — get powerful visualizations</text>
              <text x="100" y="520" fill="#FFFFFF" fontFamily="Arial" fontSize="20" opacity="0.9">and insights instantly.</text>
              
              {/* CTA button */}
              <rect x="100" y="570" width="200" height="50" rx="25" ry="25" fill="#3B82F6"/>
              <text x="145" y="603" fill="#FFFFFF" fontFamily="Arial" fontWeight="bold" fontSize="18">Experience Osiri</text>
            </g>
            
            {/* Right side - Device mockups with dashboard */}
            <g transform="translate(550, 100)">
              {/* Tablet device frame */}
              <rect x="120" y="0" width="240" height="180" rx="10" ry="10" fill="#E5E7EB"/>
              <rect x="125" y="5" width="230" height="170" rx="5" ry="5" fill="#FFFFFF"/>
              
              {/* Tablet screen content - simple chart */}
              <rect x="135" y="15" width="210" height="150" fill="#F8FAFC"/>
              <text x="145" y="35" fontFamily="Arial" fontSize="10" fill="#334155">Monthly Revenue</text>
              
              {/* Simple bar chart */}
              <rect x="155" y="115" width="15" height="40" fill="#8B5CF6"/>
              <rect x="175" y="95" width="15" height="60" fill="#3B82F6"/>
              <rect x="195" y="75" width="15" height="80" fill="#06B6D4"/>
              <rect x="215" y="65" width="15" height="90" fill="#10B981"/>
              <rect x="235" y="45" width="15" height="110" fill="#6366F1"/>
              <rect x="255" y="85" width="15" height="70" fill="#EC4899"/>
              <rect x="275" y="105" width="15" height="50" fill="#F59E0B"/>
              
              {/* Main dashboard mockup */}
              <rect x="0" y="60" width="500" height="320" rx="15" ry="15" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
              
              {/* Dashboard content */}
              <g>
                {/* Header area */}
                <rect x="0" y="60" width="500" height="50" rx="15" ry="15" fill="#F8FAFC"/>
                <circle cx="25" cy="85" r="15" fill="#3B82F6"/>
                <text x="50" y="90" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#0F172A">Osiri</text>
                <text x="85" y="90" fontFamily="Arial" fontSize="14" fill="#64748B">data assistant</text>
                
                {/* Left sidebar */}
                <rect x="0" y="110" width="150" height="270" fill="#F8FAFC"/>
                <text x="20" y="140" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="#334155">Manage data</text>
                
                {/* Saved insights section */}
                <text x="20" y="180" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="#334155">Saved insights</text>
                
                {/* Sample connections */}
                <rect x="15" y="195" width="120" height="25" rx="5" ry="5" fill="#F1F5F9"/>
                <text x="25" y="212" fontFamily="Arial" fontSize="10" fill="#64748B">(Sample) E-commerce</text>
                
                <rect x="15" y="230" width="120" height="25" rx="5" ry="5" fill="#F1F5F9"/>
                <text x="25" y="247" fontFamily="Arial" fontSize="10" fill="#64748B">(Sample) Marketing</text>
                
                <rect x="15" y="265" width="120" height="25" rx="5" ry="5" fill="#F1F5F9"/>
                <text x="25" y="282" fontFamily="Arial" fontSize="10" fill="#64748B">(Sample) Operations</text>
                
                {/* Main content area */}
                <g>
                  <rect x="150" y="110" width="350" height="270" fill="#FFFFFF"/>
                  
                  {/* Chart title */}
                  <text x="170" y="140" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#0F172A">Revenue Growth by Channel</text>
                  
                  {/* Tabs */}
                  <rect x="170" y="155" width="50" height="20" rx="5" ry="5" fill="#3B82F6"/>
                  <text x="180" y="169" fontFamily="Arial" fontSize="10" fill="#FFFFFF">All</text>
                  
                  <rect x="230" y="155" width="60" height="20" rx="5" ry="5" fill="#F1F5F9"/>
                  <text x="240" y="169" fontFamily="Arial" fontSize="10" fill="#64748B">Online</text>
                  
                  <rect x="300" y="155" width="50" height="20" rx="5" ry="5" fill="#F1F5F9"/>
                  <text x="310" y="169" fontFamily="Arial" fontSize="10" fill="#64748B">Retail</text>
                  
                  {/* Chart area */}
                  <rect x="170" y="185" width="310" height="160" fill="#F8FAFC" rx="5" ry="5"/>
                  
                  {/* Bar chart */}
                  <rect x="190" y="315" width="20" height="20" fill="#3B82F6"/>
                  <rect x="190" y="280" width="20" height="35" fill="#3B82F6"/>
                  
                  <rect x="220" y="295" width="20" height="40" fill="#3B82F6"/>
                  <rect x="250" y="275" width="20" height="60" fill="#3B82F6"/>
                  <rect x="280" y="255" width="20" height="80" fill="#3B82F6"/>
                  <rect x="310" y="225" width="20" height="110" fill="#3B82F6"/>
                  <rect x="340" y="245" width="20" height="90" fill="#3B82F6"/>
                  <rect x="370" y="265" width="20" height="70" fill="#3B82F6"/>
                  <rect x="400" y="285" width="20" height="50" fill="#3B82F6"/>
                  <rect x="430" y="305" width="20" height="30" fill="#3B82F6"/>
                  
                  {/* X-axis labels */}
                  <text x="195" y="345" fontFamily="Arial" fontSize="8" fill="#64748B">Jan</text>
                  <text x="225" y="345" fontFamily="Arial" fontSize="8" fill="#64748B">Feb</text>
                  <text x="255" y="345" fontFamily="Arial" fontSize="8" fill="#64748B">Mar</text>
                  <text x="285" y="345" fontFamily="Arial" fontSize="8" fill="#64748B">Apr</text>
                  <text x="315" y="345" fontFamily="Arial" fontSize="8" fill="#64748B">May</text>
                  <text x="345" y="345" fontFamily="Arial" fontSize="8" fill="#64748B">Jun</text>
                  <text x="375" y="345" fontFamily="Arial" fontSize="8" fill="#64748B">Jul</text>
                  <text x="405" y="345" fontFamily="Arial" fontSize="8" fill="#64748B">Aug</text>
                  <text x="435" y="345" fontFamily="Arial" fontSize="8" fill="#64748B">Sep</text>
                </g>
              </g>
              
              {/* Phone mockup */}
              <g transform="translate(420, 180)">
                <rect x="0" y="0" width="130" height="220" rx="15" ry="15" fill="#E5E7EB"/>
                <rect x="5" y="5" width="120" height="210" rx="10" ry="10" fill="#FFFFFF"/>
                
                {/* Phone content */}
                <rect x="5" y="5" width="120" height="25" rx="10" ry="10" fill="#F8FAFC"/>
                <text x="65" y="21" fontFamily="Arial" fontSize="10" fill="#0F172A" textAnchor="middle">Osiri</text>
                
                {/* Mobile interface */}
                <text x="15" y="45" fontFamily="Arial" fontWeight="bold" fontSize="8" fill="#334155">Ask a question</text>
                
                <rect x="10" y="55" width="110" height="70" rx="5" ry="5" fill="#F8FAFC"/>
                <text x="15" y="70" fontFamily="Arial" fontSize="7" fill="#64748B">What were our top</text>
                <text x="15" y="80" fontFamily="Arial" fontSize="7" fill="#64748B">performing product</text>
                <text x="15" y="90" fontFamily="Arial" fontSize="7" fill="#64748B">categories last month?</text>
                
                {/* Mini chart on phone */}
                <rect x="15" y="105" width="10" height="15" fill="#8B5CF6"/>
                <rect x="30" y="100" width="10" height="20" fill="#3B82F6"/>
                <rect x="45" y="90" width="10" height="30" fill="#06B6D4"/>
                <rect x="60" y="105" width="10" height="15" fill="#10B981"/>
                <rect x="75" y="110" width="10" height="10" fill="#6366F1"/>
                <rect x="90" y="115" width="10" height="5" fill="#EC4899"/>
                
                {/* Labels */}
                <text x="20" y="130" fontFamily="Arial" fontSize="5" fill="#64748B">A</text>
                <text x="35" y="130" fontFamily="Arial" fontSize="5" fill="#64748B">B</text>
                <text x="50" y="130" fontFamily="Arial" fontSize="5" fill="#64748B">C</text>
                <text x="65" y="130" fontFamily="Arial" fontSize="5" fill="#64748B">D</text>
                <text x="80" y="130" fontFamily="Arial" fontSize="5" fill="#64748B">E</text>
                <text x="95" y="130" fontFamily="Arial" fontSize="5" fill="#64748B">F</text>
                
                {/* Chat interface */}
                <rect x="10" y="150" width="110" height="55" rx="10" ry="10" fill="#F1F5F9"/>
                <circle cx="22" cy="165" r="8" fill="#3B82F6"/>
                <text x="22" y="165" fontFamily="Arial" fontWeight="bold" fontSize="6" fill="#FFFFFF" textAnchor="middle">O</text>
                
                <text x="35" y="162" fontFamily="Arial" fontWeight="bold" fontSize="6" fill="#334155">Osiri</text>
                <text x="35" y="172" fontFamily="Arial" fontSize="6" fill="#64748B">Category C had the highest</text>
                <text x="35" y="180" fontFamily="Arial" fontSize="6" fill="#64748B">sales last month with 42%</text>
                <text x="35" y="188" fontFamily="Arial" fontSize="6" fill="#64748B">growth year-over-year.</text>
                
                {/* Chat input */}
                <rect x="10" y="215" width="85" height="25" rx="12" ry="12" fill="#F8FAFC" stroke="#E5E7EB" strokeWidth="1"/>
                <text x="20" y="230" fontFamily="Arial" fontSize="7" fill="#94A3B8">Ask about your data...</text>
                
                <circle cx="110" cy="226" r="10" fill="#3B82F6"/>
                <text x="110" y="230" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="#FFFFFF" textAnchor="middle">→</text>
              </g>
            </g>
          </svg>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          See What Our Customers Are Saying
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of businesses that trust us with their payments.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <p className="text-neutral-300 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-neutral-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
