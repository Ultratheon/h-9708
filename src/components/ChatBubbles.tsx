
import React from "react";
import { ArrowRight } from "lucide-react";

const row1Questions = [
  "Tell me how to integrate a BB6630",
  "What's Verizon's standard for post pictures?",
  "What PPE is required for working at heights?"
];

const row2Questions = [
  "Generate a safety meeting agenda focused on fall protection",
  "Workplace safety incident report template",
  "What's the proper procedure for testing soil compaction?"
];

const ChatBubbles = () => {
  return (
    <div className="w-full text-center mt-8 mb-12">
      <h3 className="text-xl font-semibold text-blue-500 mb-6">
        Ask Industry-Specific Questions
      </h3>
      
      <div className="questions-container">
        {/* First row of questions */}
        <div className="question-row">
          {row1Questions.map((question, index) => (
            <div key={`row1-${index}`} className="question-bubble">
              {question}
              <ArrowRight className="arrow w-4 h-4" />
            </div>
          ))}
        </div>
        
        {/* Second row of questions */}
        <div className="question-row">
          {row2Questions.map((question, index) => (
            <div key={`row2-${index}`} className="question-bubble">
              {question}
              <ArrowRight className="arrow w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBubbles;
