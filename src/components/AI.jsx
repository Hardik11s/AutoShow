import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Set the chatbot configuration
    window.embeddedChatbotConfig = {
      chatbotId: "9HEYSSUtDLahaL5LM5lUS",
      domain: "www.chatbase.co"
    };

    // Create a script element for the chatbot
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("chatbotId", "9HEYSSUtDLahaL5LM5lUS");
    script.setAttribute("domain", "www.chatbase.co");

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Optionally add any other UI elements here */}
    </div>
  );
};

export default Chatbot;
