import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="105a8fbd-69ee-4f61-9710-1038251dc0a2"
      userName={localStorage.getItem("username")} // username
      userSecret={localStorage.getItem("password")} // password
      renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps} />}
    />
  );
}

export default App;
