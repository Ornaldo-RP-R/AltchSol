import React from "react";
import "./MenuHeader.styles.css";

const MySpan = ({ Title }) => {
  return <span className="MenuHeaderSections">{Title}</span>;
};
const MenuHeader = () => {
  return (
    <div className="MenuHeader">
      <MySpan Title="SPORT" />
      <MySpan Title="LIVEBETTING" />

      <MySpan Title="CASINO" />
      <MySpan Title="CASINO LIVE" />
      <MySpan Title="PROMOTIONS" />
    </div>
  );
};
export default MenuHeader;
