import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class HeroModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render(){
    return(

      <div>
        <button  onClick={this.toggle} className=" btn btn-lg  white-ghost-button" data-toggle="modal" data-target="#exampleModal">
          Click Now
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Watch our Indicators in Action</ModalHeader>
          <ModalBody>
            <div className="d-flex justify-content-center">
              <iframe src="https://player.vimeo.com/video/118516418" width="750" height="580" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>


    )
  }
}

export default HeroModal