import React, {Component} from 'react'
import TopNavigation from '../../components/menues/topnavigation'
import VideoSection from './../../components/video-section'
import './apply.css'
import { Redirect } from 'react-router'

import {Row, Container, Col} from 'reactstrap'
import ApplyForm from './form'
import Footer from '../../components/footer/footer'

class Apply extends Component {

  render(){

    return(
      <div className="full-height">
        <TopNavigation/>
        <Container>
          <Row>
            <Col>
              <div className="apply-video-section">
                <VideoSection/>
              </div>
            </Col>
          </Row>
         <div className="d-flex justify-content-center text-center apply-header-text">
           <h1>
             Current Opening: Trade Our Corporate Funds {this.props.match.params.id}
           </h1>
         </div>



        </Container>
        <div className="apply-content">

          <div className="apply-text">
            <p>
              <h2> Day Trade Corporate Money</h2>
              <strong>Are you teachable enough to learn a new skill to Trade OUR Corporate Funds in the Financial Markets?</strong> Our students trade most major markets and we’ll share with you why YOU keep 60% to 80% of the profits.  You don’t punch a time clock with us! The vast majority of our traders only trade 1 or 2 hrs/day, on their schedule, in the comfort of their home or office.
              We will show you <strong>ACTUAL RESULTS</strong> from our traders! We will also show you our system in action. Most importantly, we will allow you to TRY OUR SYSTEM for a full 30 days, so you can experience it for yourself and qualify to trade our corporate funds!
            </p>
            <p>Trading the markets are making more Millionaires per year than any other business!</p>
            <p> <strong>Have you ever wanted to learn to day trade but</strong></p>
            <strong>
              <ul>
                <li>You don’t know how to start
                </li>
                <li> You lack the capital to invest into the markets
                </li>
                <li> You thought trading was too risky
                </li>
              </ul>
            </strong>
            <p>
              If so, you are certainly not alone. Most people cite these reasons for not attempting it.
            </p>
            <p>
              <strong>We solved these issues by doing what NO ONE ELSE WOULD DO!</strong>
            </p>
            <ul>
              <li> We will teach you, step-by-step, with an <strong>EXPERIENCED, SUCCESSFUL</strong> personal coach, trading with you and using our proprietary <strong>PREDICTIVE</strong> indicators. So, you will know exactly how to trade with <strong>CONFIDENCE.</strong>
              </li>
              <li>Once you are trained we will <strong>FUND AN ACCOUNT FOR YOU WITH OUR COMPANY FUNDS</strong>, up to $100,000, so the income potential is exceptional!
              </li>
              <li> <strong>As you maintain profitability</strong>, YOU keep 60% to 80% of the profits. If you lose money (and practically everyone loses some as they are learning), you lose OUR money (which, by the way, you NEVER have to pay back). Naturally, since we both are interested in your success, we work hard to ensure that you don’t lose money, but are consistently profitable.
              </li>
            </ul>


            <p>Some may ask — <strong>“Why would your company do this?”</strong>
              <strong>The reasons are simple:</strong> We have been doing this for 9 years and have trained 1,000’s of individuals, from a wide range of backgrounds, to trade our system. And, we have a very high retention rate! The reason for this is our very unique and highly accurate trading system. Our 9 years of experience has proven that once our traders are taught how to use our proven system, they can and do trade very profitably, which benefits both them and us.
              Finally, any experienced trader will tell you that one of the most critical aspects of trading is dealing with the <strong>FEAR & EMOTIONS </strong> of trading your own money, meaning, most traders can be successful “practice” trading (without real money) but, once they start trading with their own real money at risk, it’s a “whole different ball game”, which the vast majority of people cannot handle — and they end up losing their money and quitting.
            </p>
            <p> But, when they trade <strong>OUR</strong> money, the pressure is off and they can trade with much the same calmness and confidence as when they were practice trading. As they trade with our money, they keep most of the profits and we keep the lesser portion.
            </p>
            <p> So, we have created a <strong>WIN-WIN-WIN</strong> scenario for everyone involved.</p>
            Again, our traders come from virtually all backgrounds, so it really comes down to “first come — first-placed”. Time is of the essence, so fill out the application and we will be in touch with you.
          </div>
          <ApplyForm cityid={this.props.match.params.id}/>
        </div>
      <Footer/>
      </div>
    )
  }
}

export default Apply