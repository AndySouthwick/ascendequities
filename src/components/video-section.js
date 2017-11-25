import React, {Component} from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

class VideoSection extends Component{
  render(){
    return(
      <div>
        <Video
          controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
          poster="../../images/Screen Shot 2017-11-21 at 1.42.10 PM.png"

          onCanPlayThrough={() => {
            // Do stuff
          }}>
          <source src="http://ascend.andrewsouthwick.com/videos/830921_1687.mp4" type="video/mp4" />
        </Video>
      </div>
    )
  }

}
export default VideoSection