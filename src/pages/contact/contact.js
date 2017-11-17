import React, {Component} from 'react'
import TopNavigation from'./../../components/menues/topnavigation'
import './contact.css'
import Footer from './../../components/footer/footer'
import {Container, Row, Col, FormGroup} from 'reactstrap'
import axios from 'axios'

class Contact extends Component {
  constructor (){
    super()
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      message: ''
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    axios.post('https://andrewsouthwick.com/send_email.php?fname='
      + this.state.fname + '&lname=' + this.state.lname + '&email=' + this.state.email + '&message=' + this.state.message + '&phone=' +  this.state.phone).then(function(response){
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    });
    console.log(this.state)
  }

  render(){



    return(
      <div>
        <TopNavigation/>
      <div className="full-height header2" id="contact">

        <Container fluid>
          <Row className="row toprow shift-right">

            <Col lg="6" xs="12" sm="12">
              <form onSubmit={this.handleSubmit}>
              <div className="row">
              <Col lg="6" xs="12" sm="12">
                <FormGroup>
                First Name:
                <input type="text" className="form-control" id="fname" onChange={(evt) => this.setState({fname: evt.target.value})}/>
                </FormGroup>
              </Col>

              <Col lg="6" xs="12" sm="12">
                <FormGroup>
                Last Name:
                <input type="text" className="form-control" id="lname" onChange={(evt) => this.setState({lname: evt.target.value})}/>
                </FormGroup>
              </Col>

                <Col lg="12" xs="12" sm="12">
                  <FormGroup>
                  Email:
                  <input type="text" className="form-control" id="email" onChange={(evt) => this.setState({email: evt.target.value})}/>
                  </FormGroup>
                </Col>

                <Col lg="12" xs="12" sm="12">
                  <FormGroup>
                    Phone:
                    <input type="text" className="form-control" id="phone" onChange={(evt) => this.setState({phone: evt.target.value})}/>
                  </FormGroup>
                </Col>
                <Col lg="12" xs="12" sm="12">
                  <FormGroup>
                  Message:
                  <input type="text" className="form-control" id="message" onChange={(evt) => this.setState({message: evt.target.value})}/>
                  </FormGroup>
                </Col>

                <Col lg="3">
                  <button className="btn btn-lg btn-danger formbutton" type="submit" value="Submit" >
                    Submit
                  </button>
                </Col>

              </div>
              </form>
            </Col>
            <Col className="center-this">
              <p className="message-box">
                Got a question? Just ask us!
                Our Staff is available to answer
                any questions you might have!
              </p>
              <p>
                <h3>OFFICE</h3>
                In Person: 2889 Ashton Blvd Ste #150 Lehi, Utah 84043
              </p>
              <p><h3>By Phone:</h3>
                (775)291-3589</p>
              <p><h3>Hours:</h3>
                Monday through Friday, 9:00 am – 5:00 pm MST</p>
            </Col>
          </Row>
        </Container>
      </div>

        <Footer/>
      </div>
    )
  }
}
export default Contact