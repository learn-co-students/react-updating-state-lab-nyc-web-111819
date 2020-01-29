// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

  initialState = {timesClicked: 0}
  state = this.initialState
  
  clickHandler = () => {
    this.setState(oldNum => {
      return {timesClicked: oldNum.timesClicked + 1}
    })
  }
  render(){
    return (
    <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
    );
  }
}