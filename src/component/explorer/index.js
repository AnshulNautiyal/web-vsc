import React from "react";

import { Explorer } from "./Explorer";

export class ExplorerParent extends React.PureComponent {
  render() {
    return (
      <div className="explorerContainer">
        <div className="explorerContainer__header"></div>
        <Explorer />
      </div>
    );
  }
}
