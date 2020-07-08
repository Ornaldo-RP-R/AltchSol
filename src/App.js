import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPic from "./Pictures/Main.jpg";
import LoginTopHeader from "./components/LoginTopHeader/LoginTopHeader.component";
import MenuHeader from "./components/MenuHeader/MenuHeader.component";
import KategoryCollections from "./components/KategoryCollections/KategoryCollections";
import Sections from "./components/Sections/Sections.component";
import TopGames from "./Pictures/TopGames.gif";
import VideoPoker from "./Pictures/VideoPoker.gif";

function App() {
  return (
    <div className="App">
      <LoginTopHeader />
      <MenuHeader />
      <img className="MainPhoto" src={MainPic} />
      <KategoryCollections />
      <Sections title="TOP SLOT GAMES" ImageSrc={TopGames} />
      <Sections title="VIDEO POKER" ImageSrc={VideoPoker} />
    </div>
  );
}

export default App;
