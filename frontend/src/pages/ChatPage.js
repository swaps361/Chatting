// src/pages/ChatPage.js
import React, { useState } from 'react';
import ChatBox from '../components/ChatBox';
import ChatInput from '../components/ChatInput';

const ChatPage = () => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div
      className="chat-page min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(/pic.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-lg w-full bg-transparent rounded-lg shadow-lg overflow-hidden">
        <ChatBox username={username} />
        <ChatInput username={username} />
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
          className="p-2 border border-gray-300 rounded-lg mt-4"
        />
      </div>
    </div>
  );
};

export default ChatPage;
