import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { addDoc, collection } from "firebase/firestore";
import {db} from './Firebase';

const SidebarChat = ({ id, Name, addNewChat }) => {
  const [seed, setSeed] = useState("");
  const postCollectionRef = collection(db, "Rooms");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Plz Enter the name for chat");
    if (roomName) {
      addDoc(postCollectionRef, { Name: roomName });
    }
  };

  return !addNewChat ? (
    <>
      <div className="sidebarchat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarchat_info">
          <h2>{Name}</h2>
          <p>Lasst message</p>
        </div>
      </div>
    </>
  ) : (
    <div onClick={createChat} className="sidebarchat">
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
