import { CiVideoOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import userData from "../../userData";


import Message from "./Message";

export default function ChatSection({currentuser}) {
    const user = userData[currentuser];
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
      <div id="chatarea"></div>
        <Message />
    </div>
  );
}
