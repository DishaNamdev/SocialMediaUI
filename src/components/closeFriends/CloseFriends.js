import React from 'react';
import { Users} from "../../dummyData";

import "./closeFriends.css";
function CloseFriends({user}) {
  return (
    <div>
       <li className="sidebarFriend">
            <img
              src={user.photo}
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">{Users.filter((u)=> u.id === user.userId )[0].username}</span>
          </li>
    </div>
  )
}

export default CloseFriends
