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
    axios.post('http://sandbox.andrewsouthwick.com/send_email.php?fname='
      + this.state.fname + '&lname=' + this.state.lname + '&email=' + this.state.email + '&message=' + this.state.message + '&phone=' +  this.state.phone).then(function(response){
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    });
    console.log(this.state)
  }

  render(){



    return(
      <div>
      <div className="full-height header2" id="contact">
        <TopNavigation/>
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
            <div className="col-6">
              test
            </div>
          </Row>
        </Container>
      </div>

        <Footer/>
      </div>
    )
  }
}
export default Contact