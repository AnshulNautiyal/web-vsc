import React, { useState } from "react";

export const Editor = () => {
  let defaultValue = `import React from 'react';
    export class BannerComponent extends React.PureComponent {
        constructor(){
            super();
        }
        render() {
            return (
                <div>Web VSC</div>
            )
        }
    }
    `;
  const [userInput, setUserInput] = useState(defaultValue);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <div className="editorContainer__content">
      <div className="editorContainer__content--fileName">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path fill="#ffd600" d="M6,42V6h36v36H6z" />
            <path
              fill="#000001"
              d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
            />
          </svg>
          BannerComponent.js
          <span className={`codicon codicon-chrome-close`}></span>
        </div>
        <div>
          <span className={`codicon codicon-split-horizontal`}></span>
          <span className={`codicon codicon-ellipsis`}></span>
        </div>
      </div>
      <div className="editorContainer__content--edit">
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
          <span>14</span>
          <span>15</span>
          {/* <span>16</span>
          <span>17</span>
          <span>18</span>
          <span>19</span>
          <span>20</span> */}
        </div>
        <textarea
          autoFocus={true}
          value={userInput}
          onChange={handleInputChange}
        ></textarea>
      </div>
    </div>
  );
};
