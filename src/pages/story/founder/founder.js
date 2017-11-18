import React, {Component} from 'react'
import './founder.css'
import {Container, Row, Col} from 'reactstrap'


class Founder extends Component{

  render(){
    return(
      <div className="founder">
        <div className="d-flex justify-content-center">
          <h1 className="">Our System</h1>
        </div>
        <Container>
          <Row>
            <Col lg={{size:4, offset:1}} className="founder">
              <img src={require('./../../../images/Screen Shot 2017-11-16 at 3.47.00 PM.png')} alt=""className="founder-img"/>
            </Col>
            <Col lg={{size:7}}>
                <p>
                  Since 2008 we've taught everyday people the skills necessary to become great traders. Whether they want to make a part time or full time income that is up to them.  Our proprietary indicators give our students the edge necessary to successfully trade in today's markets. We teach our students one on one twice a week for 9 to 12 weeks which allows us to develop their skills and create a personalized trading plan centered around our proprietary indicators. Upon completion of their training we will fund our students day trading accounts to jump start them into live trading. We do quarterly reviews and if profitability is maintained we continue to add funds to their day trading account (up to $100,000) with our students keeping 60 to 80% of the profits. We are truly committed to our students success.
                </p>
            </Col>
          </Row>
          <div className="d-flex justify-content-center">
            <h2>Meet The Team</h2>
          </div>
          <div className="staff-images">
            <figure>
              <img src={require('./../../../images/staff2.png')} alt=""/>
              <figcaption>position at the company <br/> <i> name</i></figcaption>
            </figure>
            <figure>
              <img src={require('./../../../images/staff3.png')} alt=""/>
              <figcaption>position at the company <br/> <i> name</i></figcaption>

            </figure>
            <figure>
              <img src={require('./../../../images/staff4.png')} alt=""/>
              <figcaption>position at the company <br/> <i> name</i></figcaption>

            </figure>
            <figure>
              <img src={require('./../../../images/staff5.png')} alt=""/>
              <figcaption>position at the company <br/> <i> name</i></figcaption>
            </figure>
          </div>

        </Container>


      </div>

    )
  }
}
export default Founder