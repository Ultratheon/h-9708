
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

interface UrlFormProps {
  onSubmit: (url: string) => void;
}

export const UrlForm = ({ onSubmit }: UrlFormProps) => {
  const [url, setUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple URL validation
    if (!url || !url.match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/)) {
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

  return (
    <div className="max-w-lg mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6 text-white tracking-tight">
        Analyze Your Website
      </h1>
      <p className="text-neutral-200 mb-8">
        Enter your website URL below to get detailed analytics and insights
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="url"
          placeholder="https://your-website.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          disabled={isSubmitting}
        />
        <Button 
          type="submit"
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Analyzing..." : "Generate Analytics"}
        </Button>
      </form>
    </div>
  );
};
