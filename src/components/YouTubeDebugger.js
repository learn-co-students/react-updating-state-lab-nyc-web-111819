// Code YouTubeDebugger Component Here
import React, { Component } from 'react'


export default class YouTubeDebugger extends Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }

  }

  bitRateHandler = (e) => {

    this.setState({

      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionRateHandler = (e) => {

    this.setState({

      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: "720p"
        }
      }
    })
  }

  render() {

    return (
      <div>
        <button onClick={this.bitRateHandler} className="bitrate"></button>
        <button onClick={this.resolutionRateHandler} className="resolution"></button>
      </div>
    )

  }
}