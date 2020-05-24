import React from "react";

import { SideBar } from "./SideBar";
import sideBarJson from "../../static/data/sideBarJson";

export class SideBarParent extends React.PureComponent {
  _getSideBarDom() {
    return sideBarJson.map((item,index) => {
      const { imgPath = "", alt = "" } = item;
      return <SideBar imgPath={imgPath} alt={alt} key={index}/>;
    });
  }
  render() {
    const sideBarDom = this._getSideBarDom();
    return <div className="sideBarContainer">{sideBarDom}</div>;
  }
}
