
import { useState } from "react";
import { UrlForm } from "../components/demo/UrlForm";
import { AnalyticsDashboard } from "../components/demo/AnalyticsDashboard";

const Demo = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [url, setUrl] = useState("");

  const handleSubmit = (submittedUrl: string) => {
    setUrl(submittedUrl);
    setShowDashboard(true);
  };

  const handleBackToForm = () => {
    setShowDashboard(false);
    setUrl("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-800 to-purple-900 relative overflow-hidden">
      {/* Enhanced nebula effect */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 4 + "px",
              height: Math.random() * 4 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDuration: Math.random() * 5 + 2 + "s",
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
        
        {/* Larger glowing elements */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`glow-${i}`}
            className="absolute rounded-full bg-orange-500/30 blur-3xl animate-float"
            style={{
              width: Math.random() * 200 + 100 + "px",
              height: Math.random() * 200 + 100 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDuration: Math.random() * 15 + 20 + "s",
              animationDelay: Math.random() * 5 + "s",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
        {!showDashboard ? (
          <>
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Website Analytics Platform
              </h1>
              <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
                Enter your website URL below to get detailed analytics and insights about your online presence.
              </p>
            </div>
            <UrlForm onSubmit={handleSubmit} />
          </>
        ) : (
          <div className="animate-fade-in">
            <button
              onClick={handleBackToForm}
              className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-md"
            >
              ← Back to URL form
            </button>
            <AnalyticsDashboard url={url} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;
