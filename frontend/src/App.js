// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <Provider store={store}>
      <ChatPage />
    </Provider>
  );
}

export default App;
