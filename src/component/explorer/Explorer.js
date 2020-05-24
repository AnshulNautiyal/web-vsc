import React, { useState } from "react";

export const Explorer = (props) => {
  const { name = "" } = props;
  const [arrow, setArrow] = useState({
    toggle: true,
    value: "codicon-chevron-right",
  });

  const handleCollapse = () => {
    if (arrow.toggle) {
      setArrow({
        toggle: false,
        value: "codicon-chevron-down",
      });
    } else {
      setArrow({
        toggle: true,
        value: "codicon-chevron-right",
      });
    }
  };
  return (
    <div className="explorerContainer__collapse" onClick={handleCollapse}>
      <span className={`codicon ${arrow.value}`}></span>
      {name}
    </div>
  );
};
