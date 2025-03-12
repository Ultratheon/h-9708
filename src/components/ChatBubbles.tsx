
import React from "react";

// Each row has its own set of bubbles with different timing
const row1Bubbles = [
  { text: "Tell me how to integrate a BB6630", delaySeconds: 0 },
  { text: "Generate the daily report on expenses", delaySeconds: 5 },
  { text: "What countries do my app downloads come from", delaySeconds: 10 }
];

const row2Bubbles = [
  { text: "Why am I losing orders despite rising traffic", delaySeconds: 2 },
  { text: "Which wine is our best seller and why", delaySeconds: 7 },
  { text: "How are discounts affecting our margins", delaySeconds: 12 }
];

const row3Bubbles = [
  { text: "Create an ad for our new product launch", delaySeconds: 3.5 },
  { text: "Analyze the latest customer feedback", delaySeconds: 8.5 },
  { text: "What's our customer satisfaction score", delaySeconds: 13.5 }
];

const ChatBubbles = () => {
  return (
    <div className="mb-12 h-[140px] overflow-hidden relative">
      {/* Row 1 */}
      <div className="bubble-track">
        {row1Bubbles.map((bubble, index) => (
          <div
            key={`row1-${index}`}
            className="bubble-item speech-bubble"
            style={{ animationDelay: `${bubble.delaySeconds}s` }}
          >
            {bubble.text}
          </div>
        ))}
      </div>
      
      {/* Row 2 */}
      <div className="bubble-track">
        {row2Bubbles.map((bubble, index) => (
          <div
            key={`row2-${index}`}
            className="bubble-item speech-bubble"
            style={{ animationDelay: `${bubble.delaySeconds}s` }}
          >
            {bubble.text}
          </div>
        ))}
      </div>
      
      {/* Row 3 */}
      <div className="bubble-track">
        {row3Bubbles.map((bubble, index) => (
          <div
            key={`row3-${index}`}
            className="bubble-item speech-bubble"
            style={{ animationDelay: `${bubble.delaySeconds}s` }}
          >
            {bubble.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBubbles;
