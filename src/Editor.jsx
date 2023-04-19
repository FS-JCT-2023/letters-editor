import React, { Component } from "react";

export default class Editor extends Component {
  render() {
    return (
      <div className=" bg-gray-200 -z-10 w-screen h-screen overflow-x-hidden pt-10">
        <div className=" min-h-screen mx-auto break-all bg-white max-w-2xl pt-5 px-10">
          {this.props.lettersBefore.map((item, index) => {
            if (item.text === "\n") {
              return <br />;
            } else if (item.text === " ") {
              return <span>&nbsp;</span>;
            } else {
              return (
                <span key={index} className={item.classes.join(" ")}>
                  {item.text}
                </span>
              );
            }
          })}
          <input
            className="appearance-none outline-none w-2 border-b-2 border-black border-solid"
            value=""
            onKeyDown={(e) => this.props.handleLetter(e)}
            type="text"
          />
          {this.props.lettersAfter.map((item, index) => {
            if (item.text === "\n") {
              return <br />;
            } else if (item.text === " ") {
              return <span>&nbsp;</span>;
            } else {
              return (
                <span key={index} className={item.classes.join(" ")}>
                  {item.text}
                </span>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
