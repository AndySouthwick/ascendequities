import React, {Component} from 'react'
import {Form} from 'reactstrap';


class ApplyForm extends Component{
  render(){
    return(
        <Form acceptCharset="UTF-8" action="https://fq248.infusionsoft.com/app/form/process/3c7bdb3102ef40acb0e100ee2530995a" className="d-flex flex-column formwrap" id="inf_form_3c7bdb3102ef40acb0e100ee2530995a" method="POST">
          <h1>Apply Here</h1>
          <input name="inf_form_xid" type="hidden" value="3c7bdb3102ef40acb0e100ee2530995a" />
          <input name="inf_form_name" type="hidden" value="Web Form submitted" />
          <input name="infusionsoft_version" type="hidden" value="1.68.0.154" />
          <input id="inf_field_FirstName" name="inf_field_FirstName" placeholder="First Name *" type="text" />
          <input  id="inf_field_LastName" name="inf_field_LastName" placeholder="Last Name *" type="text" />
          <input  id="inf_field_Email" name="inf_field_Email" placeholder="Email *" type="text" />
          <input  id="inf_field_Phone1" name="inf_field_Phone1" placeholder="Phone *" type="text" />
          <i>If you were referred please leave the name of your referrer</i>
          <input className="infusion-field-input-container" id="inf_custom_ReferralName" name="inf_custom_ReferralName" placeholder="Referral Name" type="text" />
          <input name="inf_field_LeadSourceId" type="hidden" value="74" />
          <button className="btn pill" id="recaptcha_3c7bdb3102ef40acb0e100ee2530995a" type="submit">Apply Now</button>
        </Form>
    )
  }
}

export default ApplyForm