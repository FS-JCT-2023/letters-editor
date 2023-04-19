import React, { Component } from "react";
import OptionPanel from "./OptionPanel";
import Editor from "./Editor";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lettersBefore: [],
      lettersAfter: [],
      prevLettersBefore: [],
      prevLettersAfter: [],
    };
  }

  addLetter = (letter) => {
    this.setState((preState) => ({
      ...preState,
      lettersBefore: [...preState.lettersBefore, { text: letter, classes: [] }],
    }), () => console.table(this.state.lettersBefore));
  };

  removeLetter = () => {
    this.setState((preState) => ({
      ...preState,
      lettersBefore: preState.lettersBefore.slice(
        0,
        preState.lettersBefore.length - 1
      ),
    }));
  };

  addClassToLastLetter = (className) => {
    this.setState((preState) => ({
      ...preState,
      lettersBefore: preState.lettersBefore.map((item, index) =>
        index === preState.lettersBefore.length - 1
          ? { ...item, classes: [...item.classes, className] }
          : item
      ),
    }));
  };

  moveBackward = () => {
    if (this.state.lettersBefore.length === 0) return;

    this.setState((preState) => ({
      ...preState,
      lettersBefore: preState.lettersBefore.slice(
        0,
        preState.lettersBefore.length - 1
      ),
      lettersAfter: [
        preState.lettersBefore[preState.lettersBefore.length - 1],
        ...preState.lettersAfter,
      ],
    }));
  };

  moveForward = () => {
    if (this.state.lettersAfter.length === 0) return;

    this.setState((preState) => ({
      ...preState,
      lettersBefore: [...preState.lettersBefore, preState.lettersAfter[0]],
      lettersAfter: preState.lettersAfter.slice(1),
    }));
  };

  handleLetter = (e) => {
    // handle special keys
    console.log(e.key)
    const visibleAsciiDigestRgx = /[\x20-\x7E]/;

    if (e.key === "Backspace") {
      this.removeLetter();
    } else if (e.key === "Enter") {
      this.addLetter("\n");
    } else if (e.key === " ") {
      this.addLetter(" ");
    } else if (e.key === "Tab") {
      this.addLetter("    ");
    } else if (e.key === "ArrowLeft") {
      this.moveBackward();
    } else if (e.key === "ArrowRight") {
      this.moveForward();
    } else if (e.key.length === 1 && visibleAsciiDigestRgx.test(e.key)) {
      this.addLetter(e.key);
    }
  };

  render() {
    return (
      <>
        <Editor
          lettersBefore={this.state.lettersBefore}
          lettersAfter={this.state.lettersAfter}
          handleLetter={this.handleLetter}
        />
        <OptionPanel addStyle={this.addClassToLastLetter} />
      </>
    );
  }
}
