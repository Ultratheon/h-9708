
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Search, Globe } from "lucide-react";
import { Card } from "../ui/card";

interface UrlFormProps {
  onSubmit: (url: string) => void;
}

export const UrlForm = ({ onSubmit }: UrlFormProps) => {
  const [url, setUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple URL validation
    if (!url) {
      toast.error("Please enter a URL");
      return;
    }
    
    if (!url.match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/)) {
      toast.error("Please enter a valid URL");
      return;
    }
    
    // Ensure URL has http:// or https:// prefix
    let formattedUrl = url;
    if (!formattedUrl.startsWith('http')) {
      formattedUrl = 'https://' + formattedUrl;
    }
    
    setIsSubmitting(true);
    
    // Simulate a brief loading period to give the user feedback
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmit(formattedUrl);
    }, 800);
  };

  const handleQuickDemo = (demoUrl: string) => {
    setUrl(demoUrl);
    // Submit the form after a brief delay to allow the user to see the change
    setTimeout(() => {
      // Ensure URL has http:// or https:// prefix
      let formattedUrl = demoUrl;
      if (!formattedUrl.startsWith('http')) {
        formattedUrl = 'https://' + formattedUrl;
      }
      
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        onSubmit(formattedUrl);
      }, 800);
    }, 200);
  };

  return (
    <Card className="max-w-2xl mx-auto bg-white/10 border-white/20 p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-tight text-center">
        Analyze Your Website
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Globe className="h-5 w-5 text-white/50" />
          </div>
          <Input
            type="text"
            placeholder="Enter website URL (e.g. example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pl-10"
            disabled={isSubmitting}
          />
        </div>
        
        <Button 
          type="submit"
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white flex items-center justify-center gap-2 h-12"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin h-4 w-4 border-2 border-white border-r-transparent rounded-full" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Search className="h-5 w-5" />
              <span>Analyze Website</span>
            </>
          )}
        </Button>
      </form>
      
      <div className="mt-8 pt-6 border-t border-white/10">
        <p className="text-sm text-white/70 mb-3 text-center">
          Try a quick demo with these websites:
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {["google.com", "amazon.com", "twitter.com", "github.com"].map((site) => (
            <Button 
              key={site}
              variant="outline" 
              size="sm"
              className="bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white"
              onClick={() => handleQuickDemo(site)}
              disabled={isSubmitting}
            >
              {site}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};
