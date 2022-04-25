import React, { Component, useEffect, useState } from "react";
import "./styles.modules.css";
class Clock extends Component {
  state = {
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setClock();
    }, 1000);
  }

  constructor() {
    super();
    this.state = {
      isShow: true,
    };
  }

  setClock = () => {
    const currentDate = new Date();
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    this.setState({
      secondRatio: (secondRatio = currentDate.getSeconds() / 60),
    });
    this.setState({
      minuteRatio: (minuteRatio =
        (secondRatio + currentDate.getMinutes()) / 60),
    });
    this.setState({
      hourRatio: (hourRatio = (minuteRatio + currentDate.getHours()) / 12),
    });
  };

  render() {
    const { secondRatio, minuteRatio, hourRatio } = this.state;

    // const isShow = true;

    // const handleToggle = () => {
    //   if (isShow) {
    //     isShow = false;
    //   } else {
    //     isShow = true;
    //   }
    // };
    if (this.state.isShow) {
      return (
        <>
          <div className="clock">
            <div
              className="hand hour"
              style={{
                transform: `translate(-50%) rotate(${hourRatio * 360}deg)`,
              }}
            ></div>
            <div
              className="hand minute"
              style={{
                transform: `translate(-50%) rotate(${minuteRatio * 360}deg)`,
              }}
            ></div>
            <div
              className="hand second"
              style={{
                transform: `translate(-50%) rotate(${secondRatio * 360}deg)`,
              }}
            ></div>

            <div className="number number1">
              <div>1</div>
            </div>
            <div className="number number2">
              <div>2</div>
            </div>
            <div className="number number3">
              <div>3</div>
            </div>
            <div className="number number4">
              <div>4</div>
            </div>
            <div className="number number5">
              <div>5</div>
            </div>
            <div className="number number6">
              <div>6</div>
            </div>
            <div className="number number7">
              <div>7</div>
            </div>
            <div className="number number8">
              <div>8</div>
            </div>
            <div className="number number9">
              <div>9</div>
            </div>
            <div className="number number10">
              <div>10</div>
            </div>
            <div className="number number11">
              <div>11</div>
            </div>
            <div className="number number12">
              <div>12</div>
            </div>
          </div>
          <button
            className="btn btn-primary toggle"
            onClick={() => {
              this.setState({ isShow: false });
            }}
          >
            Hide
          </button>
        </>
      );
    } else {
      return (
        <button
          className="btn btn-primary toggle"
          onClick={() => {
            this.setState({ isShow: true });
          }}
        >
          Show
        </button>
      );
    }
  }
}

export default Clock;
