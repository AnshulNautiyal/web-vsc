import React from "react";

import { SideBarParent } from "./sideBar";
import { ExplorerParent } from "./explorer";
import { EditorParent } from "./editor";
import { BottomParent } from "./bottom";

export class RootComponent extends React.PureComponent {
  render() {
    return (
      <div className="vscContainer">
        <div className="vscContainer__main">
          <SideBarParent />
          <ExplorerParent />
          <EditorParent />
        </div>
        <BottomParent />
      </div>
    );
  }
}
