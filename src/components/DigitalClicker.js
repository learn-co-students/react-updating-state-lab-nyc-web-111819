import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    constructor(){
        super()
        this.state = {timesClicked: 0}
    }
    click = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }
    render(){
        return(<button onClick = {(e) => this.click(e)}>{this.state.timesClicked}</button>)
    }
}