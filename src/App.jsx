import { useState } from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import SideBar from "./components/sidebar/SideBar";
import ChatSection from "./components/ChatSection/ChatSection";
import "./App.css";

function App() {
  const [currentuser , setCurrentUser] = useState(0);
  function handleuser(index)
  {
    setCurrentUser(index);
  }
  return (
    <>
      <SideBar setCurrentUser={handleuser} currentuser={currentuser}/>
      <ChatSection currentuser={currentuser}/>
    </>
  );
}

export default App;
