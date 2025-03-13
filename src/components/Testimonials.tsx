
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
    <section id="testimonials" className="py-16 container-padding bg-[#050A16]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-left">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
              Intelligent AI<br />
              for your business<br />
              analytics
            </h2>
            
            <div className="w-32 h-1 bg-blue-500 my-6"></div>
            
            <p className="text-lg text-gray-300 mb-8">
              Osiri AI transforms your business data into
              actionable insights through natural conversation.
              Connect your data sources and ask questions
              in plain language — get powerful visualizations
              and insights instantly.
            </p>
            
            <button className="px-6 py-3 bg-transparent hover:bg-blue-600 text-white border border-white hover:border-blue-600 rounded-full transition duration-300 ease-in-out">
              Experience Osiri
            </button>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <img 
              src="/lovable-uploads/39884eb2-a9e7-480f-b23f-164550d5a316.png" 
              alt="Osiri AI Dashboard" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Testimonials Section (Hidden for now as per the new design) */}
      <div className="hidden max-w-4xl mx-auto mt-24">
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
