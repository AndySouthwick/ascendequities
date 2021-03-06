import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class HeroModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      loadedvideo: '250989833',
      videotitle: 'Majors and Minors'
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  Majors = () => {
    this.setState({
      loadedvideo: '250989833',
      videotitle: 'Trade Our Corporate Funds'
    })
  }


  render(){

    const vimeoVideo = <iframe src={`https://player.vimeo.com/video/250989833`} title="vimeovideo" width="100%" height="100%" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

    return(

      <div className="vimeoModal">
        <button  onClick={this.toggle} className=" btn btn-lg  white-ghost-button" data-toggle="modal" data-target="#exampleModal">
          Watch Now
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.state.videotitle}</ModalHeader>
          <ModalBody>
            <div className="d-flex flex-column justify-content-center">
              <div className="video-container">
                {vimeoVideo}
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>


    )
  }
}

export default HeroModal