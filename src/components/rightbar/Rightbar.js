import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
function Rightbar({profile}) {

  const HomeRightbar = () =>{
    return (
      <>
          <div className="birthdayContainer">
          <img className="birthdayImg" src="/assests/post/gift2.avif" alt="" />
          <span className="birthdayText">
            {" "}
            <b> Pola Foaster</b> and <b>3 other friends</b> have a birthday
            today
          </span>
        </div>
        <img src="/assests/post/ad.jpeg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          { Users.map((u) => <Online key={u.id} user={u}/>)}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () =>{
    return (<>
      <h4 className="rightbarTitle">User Infomation</h4>
      <div className="rightbarInfo">
        <span className="rightbarInfoKey">City: </span>
        <span className="rightbarInfoValue">New York</span>
      </div>
      <div className="rightbarInfo">
        <span className="rightbarInfoKey">From: </span>
        <span className="rightbarInfoValue">Sanawad</span>
      </div>
      <div className="rightbarInfo">
        <span className="rightbarInfoKey">Relationship: </span>
        <span className="rightbarInfoValue">Single</span>
      </div>

      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assests/person/person2.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jyoti Singh</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assests/person/preson3.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Vandana Chouhan</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assests/person/preson3.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Aayushi Gupta</span>
        </div>
       
        <div className="rightbarFollowing">
          <img src="assests/person/person4.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Patrali Sarkar</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/person/person5.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ayushi Sinha</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/person/person2.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Jayabala</span>
        </div>
  
        <div className="rightbarFollowing">
          <img src="assests/person/person4.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Pratiksha Birla</span>
        </div>
      </div>
    </>);
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar/>
      </div>
    </div>
  );
}

export default Rightbar;
