import React, { Component } from "react";

export default class OptionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  toggleVisible = () => {
    this.setState((preState) => ({
      isVisible: !preState.isVisible,
    }));
  };

  render() {
    return (
      <div
        className={`${
          this.state.isVisible ? "bottom-0" : " -bottom-48"
        } fixed h-60 shadow-lg shadow-black bg-gray-400 w-screen px-5 pt-0 pb-2 transition-all`}
      >
        <button
          className=" bg-white drop-shadow-lg shadow-white hover:scale-105 transform rounded-sm w-14 mt-1 p-0 text-center"
          onClick={() => this.toggleVisible()}
        >
          {this.state.isVisible ? "down" : "up"}
        </button>
        <h3 className="font-semibold text-xl my-4">set color</h3>
        <div className="flex justify-between items-center flex-wrap max-w-sm">
          <div
            className="w-10 h-10 bg-red-500 cursor-pointer"
            onClick={() => this.props.addStyle("text-red-500")}
          ></div>
          <div
            className="w-10 h-10 bg-blue-500 cursor-pointer"
            onClick={() => this.props.addStyle("text-blue-500")}
          ></div>
          <div
            className="w-10 h-10 bg-yellow-500 cursor-pointer"
            onClick={() => this.props.addStyle("text-yellow-500")}
          ></div>
          <div
            className="w-10 h-10 bg-pink-500 cursor-pointer"
            onClick={() => this.props.addStyle("text-pink-500")}
          ></div>
          <div
            className="w-10 h-10 bg-green-500 cursor-pointer"
            onClick={() => this.props.addStyle("text-green-500")}
          ></div>
          <div
            className="w-10 h-10 bg-violet-500 cursor-pointer"
            onClick={() => this.props.addStyle("text-purple-500")}
          ></div>
        </div>
      </div>
    );
  }
}
