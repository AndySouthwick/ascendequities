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
          Watch Now
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Majors and Minors</ModalHeader>
          <ModalBody>
            <div className="d-flex flex-column justify-content-center">
              <div className="video-container">
                <iframe src="https://player.vimeo.com/video/118516418" title="vimeovideo" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>


             <p> It doesn’t get any simpler…
              This looks pretty complicated…
              If you’re viewing charting software for the first time, it may appear complex, but it’s actually very simple.
              Just keep your eyes on the green, red, gray and black jagged lines in the bottom half of the screen.
               These are your indicators.</p>

             <p> Okay, so what do they indicate?
               buysell</p>

             <p> When the gray and black pair of lines cross
              each other and the green and red pair
              of lines cross each other all at the same
               time, (double crossover) that’s your</p>

              <p>How do I know whether to buy or sell?
              A double crossover, at or above the blue line, pointing down, indicates SELL.
              A double crossover, at or or below the red line, pointing up, indicates BUY.
              </p>

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