// src/components/ChatBox.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import { addMessage } from '../features/chat/chatSlice';
import io from 'socket.io-client';
import { motion, AnimatePresence } from 'framer-motion';

const socket = io('http://localhost:4000');

const ChatBox = ({ username }) => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    const handleMessage = (message) => {
      dispatch(addMessage(message));
    };

    socket.on('receiveMessage', handleMessage);

    return () => {
      socket.off('receiveMessage', handleMessage);
    };
  }, [dispatch]);

  return (
    <div className="chat-box p-4 bg-gray-100 rounded-lg shadow-lg overflow-y-scroll h-72 sm:h-96">
      <AnimatePresence initial={false}>
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Message message={message} username={username} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ChatBox;
