import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import "./home.css";

function Home() {
  return (
    <>
      <Topbar className="homeTopbar"/>
      <div className="homeContainer">
          <Sidebar className="homeSidebar"/>
          <Feed className="homeFeed"/>
          <Rightbar className="homeRightbar"/>
      </div>
    </>
  )
}

export default Home;
