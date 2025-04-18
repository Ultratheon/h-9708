
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Search, Globe, ShoppingBag } from "lucide-react";
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
    <Card className="max-w-2xl mx-auto bg-white shadow-xl border-0">
      <div className="p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 tracking-tight text-center">
          Analyze Your Platform
        </h2>
        
        <Tabs defaultValue="website" className="mb-6" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="website">Website URL</TabsTrigger>
            <TabsTrigger value="appstore">App Store Link</TabsTrigger>
          </TabsList>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <TabsContent value="website">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Globe className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Enter website URL (e.g. example.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-10 border-gray-200 text-gray-800 placeholder:text-gray-400"
                  disabled={isSubmitting}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="appstore">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <ShoppingBag className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Enter App Store or Play Store URL"
                  value={appStoreUrl}
                  onChange={(e) => setAppStoreUrl(e.target.value)}
                  className="pl-10 border-gray-200 text-gray-800 placeholder:text-gray-400"
                  disabled={isSubmitting}
                />
              </div>
            </TabsContent>
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white flex items-center justify-center gap-2 h-12"
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
                  <span>Analyze {activeTab === "website" ? "Website" : "App"}</span>
                </>
              )}
            </Button>
          </form>
        </Tabs>

        {activeTab === "website" && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-600 mb-3 text-center">
              Try a quick demo with these websites:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["google.com", "amazon.com", "twitter.com", "github.com"].map((site) => (
                <Button 
                  key={site}
                  variant="outline" 
                  size="sm"
                  className="bg-gray-50 hover:bg-gray-100 text-gray-700"
                  onClick={() => setUrl(site)}
                  disabled={isSubmitting}
                >
                  {site}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
