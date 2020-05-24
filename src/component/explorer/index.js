import React from "react";

import { Explorer } from "./Explorer";
import fileExplorerJson from "../../static/data/fileExplorerJson";

export class ExplorerParent extends React.PureComponent {
  _getSideBarDom() {
    return fileExplorerJson.map((item, index) => {
      const { name = "" } = item;
      return <Explorer name={name} key={index} />;
    });
  }
  render() {
    const explorerDom = this._getSideBarDom();
    return (
      <div className="explorerContainer">
        <div className="explorerContainer__header">EXPLORER</div>
        {explorerDom}
      </div>
    );
  }
}
