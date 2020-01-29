// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  initalState = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  state = this.initalState

  bitrateHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { resolution: '720p'}
      }
    })
  }
  render(){
    return (
      <div>
      <button className="bitrate" onClick={this.bitrateHandler}>{this.state.settings.bitrate}</button>
      <button className="resolution" onClick={this.resolutionHandler}>{this.state.settings.video.resolution}</button>
      </div>
    );
  }
}