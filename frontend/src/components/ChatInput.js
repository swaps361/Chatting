// src/components/ChatInput.js
import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const ChatInput = ({ username }) => {
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const message = { text: input, sender: username, timestamp: new Date().toISOString() };
      socket.emit('sendMessage', message);
      setInput('');
    }
  };

  return (
    <div className="chat-input flex items-center p-4 bg-gray-200 rounded-lg shadow-lg">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 rounded-lg border border-gray-300"
        placeholder="Type a message..."
      />
      <button
        onClick={handleSendMessage}
        className="ml-4 p-2 bg-blue-500 text-white rounded-lg shadow-md"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
