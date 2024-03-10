import { IoIosSend } from "react-icons/io";
import { ImAttachment } from "react-icons/im";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
export default function Message({handleNewMessage}) {
  const [isrender, setIsrender] = useState(false);
  const inputHold = useRef();
  const handleEmoji = (emo) => {
    inputHold.current.value += emo.emoji;
  };
  function  handleCLickSend()
  {
    if(inputHold.current.value == '')
      return;
    handleNewMessage(inputHold.current.value);
    inputHold.current.value = '';
  }
  function handleEnter (event)
  {
    if(event.key == 'Enter')
    {
      event.preventDefault();
      handleCLickSend();
    }
  }

  return (
    <>
      <div id="message-area">
        <button
          id="emoji"
          onClick={() => {
            setIsrender((current) => !current);
          }}
        >
          <MdOutlineEmojiEmotions />
        </button>
        <textarea type="text" ref={inputHold} placeholder="Your message here..." onKeyDown={handleEnter} />
        <div>
          <button>
            <ImAttachment />
          </button>
          <button className="send" onClick={handleCLickSend}>
            <IoIosSend />
          </button>
        </div>
      </div>
      <EmojiPicker
        open={isrender}
        className="emoji"
        height={500}
        width={400}
        onEmojiClick={handleEmoji}
      />
    </>
  );
}
