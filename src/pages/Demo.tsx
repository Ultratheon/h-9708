
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-800 to-purple-900 relative overflow-hidden">
      {/* Nebula effect */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 3 + "px",
              height: Math.random() * 3 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDuration: Math.random() * 3 + 2 + "s",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        {!showDashboard ? (
          <UrlForm onSubmit={handleSubmit} />
        ) : (
          <AnalyticsDashboard url={url} />
        )}
      </div>
    </div>
  );
};

export default Demo;
