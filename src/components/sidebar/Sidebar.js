import React from "react";
import "./sidebar.css";
import { Posts } from "../../dummyData";
import {
  Bookmark,
  Groups,
  Chat,
  Event,
  HelpOutline,
  RssFeed,
  WorkOutline,
  School,
} from "@mui/icons-material";
import CloseFriends from "../closeFriends/CloseFriends";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <Groups className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
         
          {/* <li className="sidebarFriend">
            <img
              src="/assests/person/person2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Freen Sarocha</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assests/person/person2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Freen Sarocha</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assests/person/person2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Freen Sarocha</span>
          </li>{" "}
          <li className="sidebarFriend">
            <img
              src="/assests/person/person2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Freen Sarocha</span>
          </li>{" "}
          <li className="sidebarFriend">
            <img
              src="/assests/person/person2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Freen Sarocha</span>
          </li>{" "}
          <li className="sidebarFriend">
            <img
              src="/assests/person/person2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Freen Sarocha</span>
          </li> */}

          { Posts.map((u) => <CloseFriends key={u.id} user={u}/>)}
         
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
