import React from "react";
import "./App.css";
import MainPic from "./Pictures/Main.jpg";
import LoginTopHeader from "./components/LoginTopHeader/LoginTopHeader.component";
import MenuHeader from "./components/MenuHeader/MenuHeader.component";
import KategoryCollections from "./components/KategoryCollections/KategoryCollections";
import Sections from "./components/Sections/Sections.component";
import TopGames from "./Pictures/TopGames.gif";
import VideoPoker from "./Pictures/VideoPoker.gif";
import Games from "./components/Games/Games.component";
import { connect } from "react-redux";
import {
  editDisplayedArrayForSlotGames,
  editDisplayedArrayForVideoPoker,
  setLastIndexForSlotGames,
  setLastIndexForVideoPoker,
  setStartIndexForSlotGames,
  setStartIndexForVideoPoker,
  moveGamesForSlotGames,
  moveGamesForVideoPoker,
  setFilterValueForSlotGames,
  setFilterValueForVideoGames,
} from "./redux/Games/Games.actions";
function App({
  displayedArrayOfSlotGames,
  displayedArrayOfVideoPoker,
  editDisplayedArrayForSlotGames,
  editDisplayedArrayForVideoPoker,
  setLastIndexForSlotGames,
  setLastIndexForVideoPoker,
  setStartIndexForSlotGames,
  setStartIndexForVideoPoker,
  moveGamesForSlotGames,
  moveGamesForVideoPoker,
  filterValueForSlotGames,
  filterValueForVideoPoker,
  setFilterValueForSlotGames,
  setFilterValueForVideoGames,
}) {
  return (
    <div className="App">
      <LoginTopHeader />
      <MenuHeader />
      <img className="MainPhoto" src={MainPic} />
      <KategoryCollections />
      <Sections
        title="TOP SLOT GAMES"
        ImageSrc={TopGames}
        FilteredValue={filterValueForSlotGames}
        HandleChange={(e) => {
          setFilterValueForSlotGames(e.target.value);
        }}
      />
      <Games
        editDisplayedArray={editDisplayedArrayForVideoPoker}
        setStartIndex={setStartIndexForVideoPoker}
        setLastIndex={setLastIndexForVideoPoker}
        moveGames={moveGamesForVideoPoker}
        displayedArrayOfObject={displayedArrayOfSlotGames}
      />
      <Sections
        title="VIDEO POKER"
        ImageSrc={VideoPoker}
        FilteredValue={filterValueForVideoPoker}
        HandleChange={(e) => {
          setFilterValueForVideoGames(e.target.value);
        }}
      />
      <Games
        editDisplayedArray={editDisplayedArrayForSlotGames}
        setStartIndex={setStartIndexForSlotGames}
        setLastIndex={setLastIndexForSlotGames}
        moveGames={moveGamesForSlotGames}
        displayedArrayOfObject={displayedArrayOfVideoPoker}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  displayedArrayOfSlotGames: state.games.displayedArrayOfSlotGames,
  displayedArrayOfVideoPoker: state.games.displayedArrayOfVideoPoker,
  filterValueForSlotGames: state.games.filterValueForSlotGames,
  filterValueForVideoPoker: state.games.filterValueForVideoPoker,
});
const mapDispatchToProps = (dispatch) => ({
  editDisplayedArrayForSlotGames: (displayedArray) =>
    dispatch(editDisplayedArrayForSlotGames(displayedArray)),
  editDisplayedArrayForVideoPoker: (displayedArray) =>
    dispatch(editDisplayedArrayForVideoPoker(displayedArray)),
  setLastIndexForSlotGames: (Index) =>
    dispatch(setLastIndexForSlotGames(Index)),
  setLastIndexForVideoPoker: (Index) =>
    dispatch(setLastIndexForVideoPoker(Index)),
  setStartIndexForSlotGames: (Index) =>
    dispatch(setStartIndexForSlotGames(Index)),
  setStartIndexForVideoPoker: (Index) =>
    dispatch(setStartIndexForVideoPoker(Index)),
  moveGamesForSlotGames: (Increment) =>
    dispatch(moveGamesForSlotGames(Increment)),
  moveGamesForVideoPoker: (Increment) =>
    dispatch(moveGamesForVideoPoker(Increment)),
  setFilterValueForSlotGames: (FilterValue) =>
    dispatch(setFilterValueForSlotGames(FilterValue)),
  setFilterValueForVideoGames: (FilterValue) =>
    dispatch(setFilterValueForVideoGames(FilterValue)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
