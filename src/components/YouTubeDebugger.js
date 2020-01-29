// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

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

  clickHandler = () => {
    let newBitRate = 12
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: newBitRate
      }
    })
  }

  eventHandler = () => {
    let newResolution = '720p'
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
          ...this.state.video,
          resolution: newResolution
        }
      }
    })
  }

  render (){
  return (
    <div>
      <button className="bitrate" onClick={this.clickHandler}></button>
      <button className="resolution" onClick={this.eventHandler}></button>
    </div>
  )}

}

export default YouTubeDebugger