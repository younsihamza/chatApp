import { useState } from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import SideBar from "./components/sidebar/SideBar";
import ChatSection from "./components/ChatSection/ChatSection";
import userData from "./userData";
import "./App.css";

function App() {
  const [currentuser , setCurrentUser] = useState(0);
  const [myData,setMyData] = useState(userData);
  function handleNewMessage()
  {
    setMyData((current)=> [...current]);
  }
  function handleuser(index)
  {
    setCurrentUser(index);
  }
  return (
    <>
      <SideBar  setCurrentUser={handleuser} currentuser={currentuser}/>
      <ChatSection key={currentuser} currentuser={currentuser} myData={myData} handleNewMessage={handleNewMessage}/>
    </>
  );
}

export default App;
