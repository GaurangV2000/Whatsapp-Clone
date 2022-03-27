import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Chats.css";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

const Chats = () => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <>
      <div className="chats">
        <div className="chat_header">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <div className="chat_headerinfo">
            <h3>Room name</h3>
            <p>Last seen ...</p>
          </div>

          <div className="chat_headerright">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>

        <div className="chat_body">
          <p className={`chat_message ${true && "chat_receiver"}`}>
            <span className="chat_name">gaurang vasoya</span>
            hey guys
            <span className="chat_timestamp">3:52PM</span>
          </p>
        </div>

        <div className="chat_footer">
          <InsertEmoticonIcon />

          <form>
            <input
              type="text"
              value={input}
              placeholder="Type a Message"
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage} type="submit">
              Send a Message
            </button>
          </form>
          <MicIcon />
        </div>
      </div>
    </>
  );
};

export default Chats;
