import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HelloRequest } from './chatpb/chat-app_pb';
import { ChatAppServiceClient } from './chatpb/Chat-appServiceClientPb';

async function sendHello() {
  const request = new HelloRequest();
  request.setName("John");

  const client = new ChatAppServiceClient("http://localhost:8080");
  const res = await client.helloMessage(request, {});

  console.log(res.getMessage());
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={sendHello}>Hello Request</button>
      <h3></h3>
    </div>
  );
}

export default App;
