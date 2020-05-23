import React from "react";

import { SideBarParent } from "./sideBar";
import { ExplorerParent } from "./explorer";
import { EditorParent } from "./editor";

export class RootComponent extends React.PureComponent {
  render() {
    return (
      <div className="vscContainer">
        <SideBarParent />
        <ExplorerParent />
        <EditorParent />
      </div>
    );
  }
}
