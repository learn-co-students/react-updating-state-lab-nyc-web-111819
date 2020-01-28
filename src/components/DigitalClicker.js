import React from 'react'

class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }

    clickHandler = () => {
        let newClickValue = this.state.timesClicked + 1
        this.setState({
            timesClicked: newClickValue
        })
    }

    render() {
        return <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
    }
}

export default DigitalClicker