import React, {Component} from 'react'
import {Row, Container, Col, Button} from 'reactstrap';
import './lifestyle.css'
class Lifestyle extends Component{


  render(){


    return(

      <div className="section2">
        <Container fluid className="white-bg">
          <Row>
            <Col>
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
            <Col xs={{size:12}} md={{size:12}} lg={{size: 6}}  >
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Mq3sqHBhzwc" frameborder="0" allowfullscreen></iframe>
            </Col>
            <Col sm="4" md={{size:12}}lg={{size: 6}}>
              <h1>some content for this</h1>
              <Button className="pill">Learn More</Button>
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