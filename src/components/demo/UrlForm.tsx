
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Search, Globe, ShoppingBag, Sparkles } from "lucide-react";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface UrlFormProps {
  onSubmit: (url: string) => void;
}

export const UrlForm = ({ onSubmit }: UrlFormProps) => {
  const [url, setUrl] = useState("");
  const [appStoreUrl, setAppStoreUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("website");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submittedUrl = activeTab === "website" ? url : appStoreUrl;
    
    if (!submittedUrl) {
      toast.error(`Please enter a ${activeTab === "website" ? "URL" : "App Store link"}`);
      return;
    }
    
    // URL validation based on tab
    if (activeTab === "website") {
      if (!submittedUrl.match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/)) {
        toast.error("Please enter a valid URL");
        return;
      }
    } else {
      if (!submittedUrl.includes("apps.apple.com") && !submittedUrl.includes("play.google.com")) {
        toast.error("Please enter a valid App Store or Play Store URL");
        return;
      }
    }
    
    let formattedUrl = submittedUrl;
    if (!formattedUrl.startsWith('http')) {
      formattedUrl = 'https://' + formattedUrl;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmit(formattedUrl);
    }, 800);
  };

  return (
    <Card className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
      <div className="p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Get Started
            </h2>
          </div>
          <p className="text-lg text-neutral-300">
            Choose your platform type and enter your link to unlock powerful AI analytics
          </p>
        </div>
        
        <Tabs defaultValue="website" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20">
            <TabsTrigger 
              value="website" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white text-neutral-300"
            >
              <Globe className="w-4 h-4 mr-2" />
              Website URL
            </TabsTrigger>
            <TabsTrigger 
              value="appstore"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white text-neutral-300"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              App Store Link
            </TabsTrigger>
          </TabsList>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <TabsContent value="website">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Globe className="h-5 w-5 text-cyan-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Enter website URL (e.g. example.com, google.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-12 h-14 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-neutral-400 focus:border-cyan-400 focus:ring-cyan-400/50 text-lg"
                  disabled={isSubmitting}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="appstore">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <ShoppingBag className="h-5 w-5 text-purple-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Enter App Store or Play Store URL"
                  value={appStoreUrl}
                  onChange={(e) => setAppStoreUrl(e.target.value)}
                  className="pl-12 h-14 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-neutral-400 focus:border-purple-400 focus:ring-purple-400/50 text-lg"
                  disabled={isSubmitting}
                />
              </div>
            </TabsContent>
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white flex items-center justify-center gap-3 h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-r-transparent rounded-full" />
                  <span>Analyzing with AI...</span>
                </>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  <span>Generate AI Analytics</span>
                </>
              )}
            </Button>
          </form>
        </Tabs>

        {activeTab === "website" && (
          <div className="mt-10 pt-8 border-t border-white/20">
            <p className="text-sm text-neutral-400 mb-4 text-center">
              Try our AI analytics with these popular websites:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: "google.com", gradient: "from-blue-500 to-green-500" },
                { name: "amazon.com", gradient: "from-orange-500 to-yellow-500" },
                { name: "twitter.com", gradient: "from-blue-400 to-cyan-400" },
                { name: "github.com", gradient: "from-gray-600 to-gray-800" }
              ].map((site) => (
                <Button 
                  key={site.name}
                  variant="outline" 
                  size="sm"
                  className={`bg-gradient-to-r ${site.gradient} text-white border-0 hover:scale-105 transition-transform duration-200 shadow-lg`}
                  onClick={() => setUrl(site.name)}
                  disabled={isSubmitting}
                >
                  {site.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
