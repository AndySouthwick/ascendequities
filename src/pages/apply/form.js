import React, {Component} from 'react'
import {Form, Input, Alert} from 'reactstrap';
import axios from 'axios'


class ApplyForm extends Component{
  constructor(){
    super()
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      reference: '',
      experience: 'Beginner',
      availability: 'Morning',
      alertMsg:  '',
      alertClass: '',
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    let self = this;
    axios.post('https://andrewsouthwick.com/application_email_test.php?fname='
      + this.state.fname + '&lname=' + this.state.lname + '&email=' + this.state.email + '&message=' + this.state.message + '&phone=' +  this.state.phone + '&experience='
    + this.state.experience + '&availability=' + this.state.availability + '&reference='
    + this.state.reference).then(function(response){
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
      if(response.data[1] === "showErrorMsg"){
        this.setState({
          alertMsg: response.data[0],
          alertClass: 'danger'
        })
      }
      else {
        this.setState({
          alertMsg: 'Thank you ' + this.state.fname + ', we will contact you shortly',
          alertClass: 'success'
        })
      }
    }.bind(this));


    console.log(this.state)
  }

  render(){



    console.log(this.state)
    return(
        <Form acceptCharset="UTF-8" action="https://fq248.infusionsoft.com/app/form/process/3c7bdb3102ef40acb0e100ee2530995a" className="d-flex flex-column formwrap" id="inf_form_3c7bdb3102ef40acb0e100ee2530995a" method="POST" onSubmit={this.handleSubmit}>
          <h1>Apply Here</h1>
          <input name="inf_form_xid" type="hidden" value="3c7bdb3102ef40acb0e100ee2530995a" />
          <input name="inf_form_name" type="hidden" value="Web Form submitted" />
          <input name="infusionsoft_version" type="hidden" value="1.68.0.154" />
          <input id="inf_field_FirstName" name="inf_field_FirstName" placeholder="First Name *" type="text" onChange={(evt) => this.setState({fname: evt.target.value})} required/>
          <input  id="inf_field_LastName" name="inf_field_LastName" placeholder="Last Name *" type="text" onChange={(evt) => this.setState({lname: evt.target.value})} required/>
          <input  id="inf_field_Email" name="inf_field_Email" placeholder="Email *" type="text" onChange={(evt) => this.setState({email: evt.target.value})} required/>
          <input  id="inf_field_Phone1" name="inf_field_Phone1" placeholder="Phone *" type="text" onChange={(evt) => this.setState({phone: evt.target.value})} required/>
          <i>If you were referred please leave the name of your referrer</i>
          <input className="infusion-field-input-container" id="inf_custom_ReferralName" name="inf_custom_ReferralName" placeholder="Referral Name" type="text"  onChange={(evt) => this.setState({reference: evt.target.value})}/>
          <h5>Level of Experience</h5>
          <Input type="select"onChange={(evt) => this.setState({experience: evt.target.value})}>
            <option value="`Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </Input>
          <h5>Available for Training (Weekly)</h5>
          <Input type="select"onChange={(evt) => this.setState({experience: evt.target.value})}>
            <option value="`Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </Input>
          <input name="inf_field_LeadSouriceId" type="hidden" value="74" />
          <button className="btn pill" id="recaptcha_3c7bdb3102ef40acb0e100ee2530995a" type="submit">Apply Now</button>
          <Alert color={this.state.alertClass}> {this.state.alertMsg}</Alert>
        </Form>
    )
  }
}

export default ApplyForm