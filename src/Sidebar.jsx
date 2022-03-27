import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import { ImportExportTwoTone, Room, SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import { db, auth } from "./Firebase";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const postCollectionRef = collection(db, "Rooms");

  // useEffect(() => {
  //   db.collection("Rooms").onSnapshot((snapshot) => {
  //     setRooms(
  //       snapshot.doc.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     );
  //   });
  // });

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setRooms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  return (
    <>
      <div className="sidebar">
        <div className="sidebar_header">
          <Avatar />
          <div className="sidebar_headerright">
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

        <div className="sidebar_search">
          <div className="sidebar_searchcontainer">
            <SearchOutlined />
            <input placeholder="enter the thing you want to" type="text" />
          </div>
        </div>

        <div className="sidebar_chats">
          <SidebarChat addNewChat />
          {rooms.map((room) => (
            <SidebarChat key={room.id} id={room.id} Name={room.Name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
