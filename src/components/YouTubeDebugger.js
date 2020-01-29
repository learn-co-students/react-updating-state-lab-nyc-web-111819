import React, { Component } from 'react';

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

      onClick = () => {
          this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
          })
      }

      onClick2 = () => {
        this.setState({
            settings: {...this.state.settings,
              video:{
                ...this.state.video,
                  resolution: '720p'
              }
          }
        })
    }

      render(){
          return(
              <div>
          <button className = "bitrate" onClick = {this.onClick}></button>,
          <button className = "resolution" onClick = {this.onClick2}></button>
          </div>
          )
      }
}

