import React from "react";
import { Bottom } from "./Bottom";

export class BottomParent extends React.PureComponent {
  render() {
    return (
      <div className="vscBottom">
        <Bottom />
      </div>
    );
  }
}
