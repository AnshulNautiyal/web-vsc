import React from "react";

export const SideBar = (props) => {
  const { imgPath = "", alt = "" } = props;
  return (
    <div
      className="sideBarContainer__icon"
      dangerouslySetInnerHTML={{ __html: imgPath }}
      onClick={props.handleAction(1)}
    ></div>
  );
};
