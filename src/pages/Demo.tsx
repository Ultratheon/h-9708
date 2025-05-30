
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background effects to match landing page */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDuration: Math.random() * 10 + 10 + "s",
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
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  AI-Powered
                </span>{" "}
                Analytics Platform
              </h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                Transform your business data into actionable insights. Enter your website or app store link below to get comprehensive analytics powered by AI.
              </p>
            </div>
            <UrlForm onSubmit={handleSubmit} />
          </>
        ) : (
          <div className="animate-fade-in">
            <button
              onClick={handleBackToForm}
              className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20"
            >
              ← Back to Platform
            </button>
            <AnalyticsDashboard url={url} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;
