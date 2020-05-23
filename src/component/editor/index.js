import React from "react";

import { Editor } from "./Editor";

export class EditorParent extends React.PureComponent {
  render() {
    return (
      <div className="editorContainer">
        <Editor />
      </div>
    );
  }
}
