import React from "react";

import { SideBar } from "./SideBar";
import sideBarJson from "../../static/data/sideBarJson";

export class SideBarParent extends React.PureComponent {

  _handleAction = (code) => () =>{
    const node =  document.querySelector('#explorerContainer');
    const getStyle = node.style.display;
   if(getStyle !== 'none'){

    node.style.display = 'none';
   }else {
    node.style.display = 'block';
   }
  }
  _getSideBarDom() {
    return sideBarJson.map((item,index) => {
      const { imgPath = "", alt = "" } = item;
      return <SideBar imgPath={imgPath} alt={alt} key={index} handleAction={this._handleAction}/>;
    });
  }

  render() {
    const sideBarDom = this._getSideBarDom();
    return <div className="sideBarContainer">{sideBarDom}</div>;
  }
}
