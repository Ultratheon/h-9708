import { Star } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    content: "OsiriAI transformed how we understand our customer data. The insights are incredibly actionable and have directly contributed to a 40% increase in our conversion rates.",
    rating: 5,
    avatar: "/lovable-uploads/452c2d11-5db4-4449-8370-3c7d4c6e265a.png"
  }, {
    name: "Marcus Rodriguez",
    role: "Data Director, RetailPro",
    content: "Finally, an AI that speaks business language. Instead of complex dashboards, I can just ask questions and get immediate insights that drive real decisions.",
    rating: 5,
    avatar: "/lovable-uploads/6ac89d8c-4d30-45a0-abc0-f2d835e9a77d.png"
  }, {
    name: "Emily Watson",
    role: "Operations Manager, FoodChain+",
    content: "The predictive analytics helped us optimize our inventory management. We've reduced waste by 35% while improving customer satisfaction scores.",
    rating: 5,
    avatar: "/lovable-uploads/95d109a3-40d5-4a88-8d97-d37381be91ed.png"
  }];

  return (
    <section className="py-16 container-padding bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          What Our Customers Say
        </h2>
        <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
          See how businesses are transforming their operations with OsiriAI
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-300 leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;