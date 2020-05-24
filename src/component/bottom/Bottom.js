import React from "react";

export const Bottom = () => {
  return (
    <div className="vscBottom__content">
      <div>
        <div className="warning">
          <span className="codicon codicon-error"></span>0
          <span className="codicon codicon-warning"></span>0
        </div>
        <div className="casey">
          <span className="codicon codicon-person"></span> Casey
        </div>
        <div className="liveShare">
          <span className="codicon codicon-link-external"></span> Live Share
        </div>
        <div className="azure">
          Azure: <div></div>
        </div>
      </div>
      <div className="defaultContent">
        <span>Ln 1, Col 1 </span>
        <span>Spaces: 2</span>
        <span>LF</span>
        <span>JavaScript</span>
        <span>Layout: US</span>
        <span className="codicon codicon-smiley"></span> 
        <span className="codicon codicon-bell"></span> 
      </div>
    </div>
  );
};
