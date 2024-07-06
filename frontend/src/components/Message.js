// src/components/Message.js
import React from 'react';

const Message = ({ message, username }) => (
  <div className={`message mb-4 p-2 bg-white rounded-lg shadow-md ${message.sender === 'You' ? 'bg-blue-100' : ''}`}>
    <div className="text-sm text-gray-500">{message.sender === 'You' ? username : message.sender}</div>
    <div>{message.text}</div>
    <div className="text-xs text-gray-400">{new Date(message.timestamp).toLocaleTimeString()}</div>
  </div>
);

export default Message;
