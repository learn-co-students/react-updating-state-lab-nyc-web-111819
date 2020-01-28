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

    bitrateHandler = () => {
        let newBitrate = 12
        this.setState({
            settings: {
                ...this.state.settings,
            bitrate: newBitrate
            }
        })
    }

    resolutionHandler = () => {
        let newRes = '720p'
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: newRes
                }
            }
        })
    }

    render() {
        return <div>
            <button onClick={this.bitrateHandler} className="bitrate">{this.state.settings.bitrate}</button>
            <button onClick={this.resolutionHandler} className="resolution">{this.state.settings.video.resolution}</button>
        </div>
    }

}

export default YouTubeDebugger