import React, {Component} from 'react'
import {Row, Container, Col, Button} from 'reactstrap';
import './lifestyle.css'
class Lifestyle extends Component{

  componentWillMount () {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = "https://app.ontraport.com/js/ontraport/opt_assets/drivers/opf.jshttps://app.ontraport.com/js/ontraport/opt_assets/drivers/opf.js' data-opf-uid='p2c109897f25' data-opf-params='borderColor=#ffffff&borderSize=5px&embed=true&formHeight=731&formWidth=480px&popPosition=mc&instance=882826245'";
    s.async = true;
    console.log(s)
    document.body.appendChild(s);

  }
  render(){

    function createScript() {
      return {__html: '<script type=\'text/javascript\' async=\'true\' src=\'https://app.ontraport.com/js/ontraport/opt_assets/drivers/opf.js\' data-opf-uid=\'p2c109897f25\' data-opf-params=\'borderColor=#ffffff&borderSize=5px&embed=true&formHeight=731&formWidth=480px&popPosition=mc&instance=882826245\'></script>'};
    }

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
            <Col xs={{size:12}} sm="12" md={{size:12}} lg={{size: 6, offset: 2}}  >
              <iframe width="100%" height="100%" title="intro-video" src="https://www.youtube.com/embed/dhtRvWILEj4" frameBorder="0" allowFullScreen></iframe>
            </Col>
            <Col xs="12" sm="12" md={{size:12}} lg={{size: 3}}>

              <form accept-charset="UTF-8" action="https://fq248.infusionsoft.com/app/form/process/3c7bdb3102ef40acb0e100ee2530995a" className="d-flex flex-column formwrap" id="inf_form_3c7bdb3102ef40acb0e100ee2530995a" method="POST">
                <h1>Get On The Program</h1>
                <input name="inf_form_xid" type="hidden" value="3c7bdb3102ef40acb0e100ee2530995a" />
                <input name="inf_form_name" type="hidden" value="Web Form submitted" />
                <input name="infusionsoft_version" type="hidden" value="1.68.0.154" />


                  <input className="infusion-field-input-container" id="inf_field_FirstName" name="inf_field_FirstName" placeholder="First Name *" type="text" />



                  <input className="infusion-field-input-container" id="inf_field_LastName" name="inf_field_LastName" placeholder="Last Name *" type="text" />



                  <input className="infusion-field-input-container" id="inf_field_Email" name="inf_field_Email" placeholder="Email *" type="text" />



                  <input className="infusion-field-input-container" id="inf_field_Phone1" name="inf_field_Phone1" placeholder="Phone *" type="text" />

                <input name="inf_field_LeadSourceId" type="hidden" value="74" />

                  <button className="btn pill" id="recaptcha_3c7bdb3102ef40acb0e100ee2530995a" type="submit">Apply Now</button>

              </form>
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
              worry about money."
              <i>-Mark</i></p>
          </div>
          <div>
            <img src={require('../../../images/allisa.png')} alt=""/>
            <p>"This group had trust in me as a new trader to follow their system which gives me  great results."
              <i>-Allisa</i></p>
          </div>
          <div>
            <img src={require('../../../images/sean.png')} alt=""/>
            <p>"With these elite indicators combined with the support of fellow traders, this has been a great experience"

              <i>-Sean</i></p>
          </div>

      </div>

        </div>


    )
  }
}
export default Lifestyle