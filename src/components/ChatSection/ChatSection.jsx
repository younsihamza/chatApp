import { CiVideoOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import Conversation from "./conversation";
import Message from "./Message";
import { useState ,useRef} from "react";
export default function ChatSection({ currentuser, myData, handleNewMessage }) {
  const user = myData[currentuser];
  const divConv = useRef();
  const [tableMessage, setTableMessage] = useState(user.conversation);
  function handleNew(message) {
    setTableMessage((current) => {
      const newTable = [...current, message];
      user.conversation = newTable;
      return newTable
    });
  }
  return (
    <div id="ChatSection">
      <div id="selected-user">
        <div>
          <p id="nameUser">{user.name}</p>
          <p id="activeSection">
            <div id="active"></div>
            <p>Active now</p>
          </p>
        </div>
        <div id="call-video">
          <button>
            <CiVideoOn />
          </button>
          <button>
            <IoCallOutline />
          </button>
        </div>
      </div>
      <div id="chatarea" ref={divConv}>
        <Conversation selecteduser={user} />
      </div>
      <Message handleNewMessage={handleNew} />
    </div>
  );
}
