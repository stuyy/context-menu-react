import React from 'react';
import { MessageContainer } from './components/MessageContainer';
import { messages } from './__mocks__/messages';

function App() {
  return (
    <div>
      <MessageContainer messages={messages} />
    </div>
  );
}

export default App;
