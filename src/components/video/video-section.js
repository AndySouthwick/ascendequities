import React, {Component} from 'react'
import './video.css'

class VideoSection extends Component{
  render(){
    return(
      <div className="d-flex flex-column justify-content-center">
      <div className="video-container">
        <iframe src="https://player.vimeo.com/video/250990201" width="100%"  height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
      </div>
    )
  }

}
export default VideoSection