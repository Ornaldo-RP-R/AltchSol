import React from "react";
import Kategory from "../Kategory/Kategory.component";
import FirstKat from "../../Pictures/FirstKat.png";
import FirstKatFirstLayer from "../../Pictures/FirstKatFirstLayer.png";
import SecondKat from "../../Pictures/SecondKat.png";
import ThirdKat from "../../Pictures/ThirdKat.png";
import ThirdKatFirstLayer from "../../Pictures/ThirdKatFirstLayer.png";
import FourthKat from "../../Pictures/FourthKat.png";
import FifthKat from "../../Pictures/FifthKat.png";
import "./KategoryCollections.css";
const KategoryCollections = () => {
  return (
    <div>
      <div className="CollectionsBackground">
        <div className="KatCollections">
          <div className="KatCollectionPart1">
            <Kategory
              FirstLayer={FirstKatFirstLayer}
              SecondLayer={FirstKat}
              title="Live Casino"
            />
            ;
            <Kategory SecondLayer={SecondKat} title={`Slots & Jackpots`} />;
          </div>
          <div className="KatCollectionPart2">
            <Kategory
              FirstLayer={ThirdKatFirstLayer}
              SecondLayer={ThirdKat}
              title="Casino Games"
            />
            <Kategory SecondLayer={FourthKat} title="Slot Races" />;
            <Kategory SecondLayer={FifthKat} title="JackPots" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default KategoryCollections;
