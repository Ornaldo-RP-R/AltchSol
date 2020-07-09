import React, { useEffect } from "react";
import "./Games.styles.css";
import { ContrFunc, getData } from "../../Api/AxiosHelperFunctions";
import { connect } from "react-redux";
import { editFullArray } from "../../redux/Games/Games.actions";
import Swal from "sweetalert2";
const findFirstDisplayedArray = (FullArray) => {
  let displayedArray = [];
  for (let i = 0; i < 5; i++) {
    displayedArray.push(FullArray[i]);
  }
  return displayedArray;
};
const Games = ({
  editFullArray,
  editDisplayedArray,
  setStartIndex,
  setLastIndex,
  moveGames,
  displayedArrayOfObject,
}) => {
  useEffect(() => {
    getData(ContrFunc.Controllers.casino, ContrFunc.Functions.games, null, null)
      .then(async (response) => {
        if (response.data.length > 0) {
          await editDisplayedArray(findFirstDisplayedArray(response.data));
          editFullArray(response.data);
          setLastIndex(5);
          setStartIndex(0);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong please contact Administrator",
        });
      });
  }, [editDisplayedArray, editFullArray, setLastIndex, setStartIndex]);
  return (
    <div className="Games">
      <div
        className="ArrowGreater"
        onClick={() => {
          moveGames(true);
        }}
      >{`>`}</div>
      <div className="AllGames">
        {displayedArrayOfObject
          ? displayedArrayOfObject.map((Game) => {
              return (
                <div key={Game.id} className="EachGame">
                  <img
                    alt="Nothing To Show"
                    src={Game.image}
                    onError={(e) =>
                      (e.target.src = `http://staging-casino.peoples.it/l.ashx?s=default&u=default/casino/thumbs/betsoft/AlkemorsTower.jpg`)
                    }
                  />
                  <div className="PlayButton">
                    <div className="player">
                      <span>Play</span>
                    </div>
                  </div>
                  <div className="nameOfGame"> {Game.name}</div>
                </div>
              );
            })
          : null}
      </div>
      ;
      <div
        className="ArrowLess"
        onClick={() => {
          moveGames(false);
        }}
      >{`<`}</div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  editFullArray: (fullArray) => dispatch(editFullArray(fullArray)),
});

export default connect(null, mapDispatchToProps)(Games);
