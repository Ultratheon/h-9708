
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface UrlFormProps {
  onSubmit: (url: string) => void;
}

export const UrlForm = ({ onSubmit }: UrlFormProps) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(url);
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
        />
        <Button 
          type="submit"
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
        >
          Generate Analytics
        </Button>
      </form>
    </div>
  );
};
