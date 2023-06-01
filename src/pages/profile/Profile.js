import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assests/person/person2.jpg"
                alt=""
              />
              <img
                src="assests/person/person1.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">disha_nmdv</h4>
              <span className="profileInfoDesc">Hello!! my friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/> {/* (1) */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

/*(1) this prop "profile" here shows whether the Rightbar is in Profile page or in the Home page because if the 
Rightbar will be in the Profile page then we won't shows the adds and the birthday we will use some different logic. */