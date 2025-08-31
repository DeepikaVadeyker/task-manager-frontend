import { useState } from "react";
import './chatbot.css';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    // Add user message
    setMessages([...messages, { role: "user", content: input }]);

    // Call API Gateway (Lambda → Bedrock)
    const res = await fetch("https://te7cymaihh.execute-api.us-east-2.amazonaws.com/dev/chat", {  
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input })
    });
    const data = await res.json();

    // Add bot response
    setMessages(m => [...m, { role: "assistant", content: data.reply }]);
    setInput("");
  };

  return (
    <div className="p-4 border rounded w-full max-w-md">
      <div className="h-64 overflow-y-auto border p-2 mb-2">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === "user" ? "text-right" : "text-left"}>
            <span className={msg.role === "user" ? "bg-blue-200 p-1 rounded" : "bg-gray-200 p-1 rounded"}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-grow border p-2"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 ml-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
