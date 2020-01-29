// Code DigitalClicker Component Here
import React, { Component } from 'react'


export default class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  }
 


  clickHandler = () => {
    // let increment = this.state.timesClicked + 1
    // this.setState({
    //   timesClicked: increment
    // })

    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })

}

render() {
  return (
    <div>


  <button onClick={this.clickHandler} >{this.state.timesClicked}</button>      

    </div>
  )
}
}