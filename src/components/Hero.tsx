import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
const Hero = () => {
  const topRowBubbles = ["How can i lower this months labor at my store?", "Show me the sales month over month?", "What country does my app downloads come from?", "What's our best-selling product today?", "Are weekday or weekend sales stronger?"];
  const middleRowBubbles = ["Which wine is our best seller and why?", "Generate the daily report on today?", "Why am I losing orders despite rising traffic?", "Does this Ad resonate with my audience?"];
  const bottomRowBubbles = ["What product or customer trends are emerging over time?", "How are discounts and promotions really affecting my margins?", "Can you create a margarita AD for todays holiday?"];
  const duplicateForScroll = array => [...array, ...array];
  return <>
      <Helmet>
        <title>OsiriAI - Your AI Business Assistant | Data Insights Through Conversation</title>
        <meta name="description" content="OsiriAI transforms your business data into actionable insights through natural conversations. Customize for any industry including Retail, E-commerce, Restaurants, and more." />
        <meta name="keywords" content="AI business assistant, conversational AI, business intelligence, data insights, natural language processing" />
        <link rel="canonical" href="https://osiriai.com/" />
      </Helmet>
      
      <section className="pt-32 pb-8 container-padding" aria-label="AI Business Assistant Introduction">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-balance leading-tight">
            <span className="text-white">
              Supercharge your Business with an <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">AI-Powered</span> Command Center
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 font-medium mb-8">
            Connect your business → Analyze Data → Ask the important questions
          </p>
          
          <div className="mb-8 overflow-hidden relative">
            <div className="flex whitespace-nowrap animate-unified-slide mb-4 w-fit">
              {duplicateForScroll(topRowBubbles).map((text, index) => <div key={`top-${index}`} className="speech-bubble bg-neutral-800 text-white px-5 py-3 rounded-full text-base mx-3 inline-block font-medium shadow-lg">
                  {text}
                </div>)}
            </div>
            
            <div className="flex whitespace-nowrap animate-unified-slide mb-4 w-fit" style={{
            animationDelay: '-10s'
          }}>
              {duplicateForScroll(middleRowBubbles).map((text, index) => <div key={`middle-${index}`} className="speech-bubble bg-neutral-800 text-white px-5 py-3 rounded-full text-base mx-3 inline-block font-medium shadow-lg">
                  {text}
                </div>)}
            </div>
            
            <div className="flex whitespace-nowrap animate-unified-slide w-fit" style={{
            animationDelay: '-20s'
          }}>
              {duplicateForScroll(bottomRowBubbles).map((text, index) => <div key={`bottom-${index}`} className="speech-bubble bg-neutral-800 text-white px-5 py-3 rounded-full text-base mx-3 inline-block font-medium shadow-lg">
                  {text}
                </div>)}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/demo" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg flex items-center justify-center gap-2">
              Access Platform
              <ArrowRight className="w-4 h-4" />
            </a>
            <button className="bg-neutral-800 text-white px-6 py-3 rounded-lg hover:bg-neutral-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="mt-4 w-full py-8 -mx-6 md:-mx-8 lg:-mx-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/07c348da-ce97-41ee-931e-c6ee2dedcf1c.png" 
                alt="AI Analytics Dashboard Preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Hero;