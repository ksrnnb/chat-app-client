import Login from './Login';
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
    <Login />
  );
}

export default App;
