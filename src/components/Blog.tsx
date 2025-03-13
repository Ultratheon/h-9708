
const blogPosts = [
  {
    title: "A dynamic bank offers a few fresh moves",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    date: "Mar 16, 2024",
    readTime: "5 min read"
  },
  {
    title: "The simple economy goes global",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    date: "Mar 15, 2024",
    readTime: "3 min read"
  },
  {
    title: "How fintech builds interactive tech stack",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    date: "Mar 14, 2024",
    readTime: "4 min read"
  }
];

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

const Blog = () => {
  return (
    <section className="py-16 container-padding bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Learn From The Blog
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-neutral-400 mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-semibold text-white group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          What Our Customers Are Saying
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

export default Blog;
