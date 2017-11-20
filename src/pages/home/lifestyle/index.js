import React, {Component} from 'react'
import {Row, Container, Col, FormGroup, Form} from 'reactstrap';
import './lifestyle.css'
class Lifestyle extends Component{


  render(){


    return(

      <div className="section2">
        <Container fluid className="white-bg">
          <Row>
            <Col xs="12" sm="12">
              <h1>
                “Everything we do we believe
                people want to live life on their  own terms”
              </h1>
              <span className="signature">
          -Ascend Equities
        </span>
            </Col>
          </Row>
          <Row>
            <Col xs={{size:12}} sm="12" md={{size:12}} lg={{size: 6, offset: 1}}  >
              <iframe width="100%" height="100%" title="intro-video" src="https://www.youtube.com/embed/dhtRvWILEj4" frameBorder="0" allowFullScreen></iframe>
            </Col>
            <Col xs="12" sm="12" md={{size:12}} lg={{size: 3}}>

              <Form acceptCharset="UTF-8" action="https://fq248.infusionsoft.com/app/form/process/3c7bdb3102ef40acb0e100ee2530995a" className="d-flex flex-column formwrap" id="inf_form_3c7bdb3102ef40acb0e100ee2530995a" method="POST">
                <h1>Get On The Program</h1>
                <input name="inf_form_xid" type="hidden" value="3c7bdb3102ef40acb0e100ee2530995a" />
                <input name="inf_form_name" type="hidden" value="Web Form submitted" />
                <input name="infusionsoft_version" type="hidden" value="1.68.0.154" />


                  <input id="inf_field_FirstName" name="inf_field_FirstName" placeholder="First Name *" type="text" />




                  <input  id="inf_field_LastName" name="inf_field_LastName" placeholder="Last Name *" type="text" />



                  <input  id="inf_field_Email" name="inf_field_Email" placeholder="Email *" type="text" />



                  <input  id="inf_field_Phone1" name="inf_field_Phone1" placeholder="Phone *" type="text" />

                <input name="inf_field_LeadSourceId" type="hidden" value="74" />

                  <button className="btn pill" id="recaptcha_3c7bdb3102ef40acb0e100ee2530995a" type="submit">Apply Now</button>

              </Form>
              </Col>
          </Row>
        </Container>
        <h1>
          See What Some Of Our Students Have To Say
        </h1>
        <div id="studentstestimonials">
          <div >
            <img src={require('../../../images/josh.png')} alt=""/>
            <p>"Learn the indicators.
              If you do, you'll never have to
              worry about money."<br/>
              <i>-Mark</i></p>
          </div>
          <div>
            <img src={require('../../../images/allisa.png')} alt=""/>
            <p>"This group had trust in me as a new trader to follow their system which gives me  great results."<br/>
              <i>-Allisa</i></p>
          </div>
          <div>
            <img src={require('../../../images/sean.png')} alt=""/>
            <p>"With these elite indicators combined with the training support, I have awesome success"<br/>

              <i>-Sean</i></p>
          </div>

      </div>

        </div>


    )
  }
}
export default Lifestyle