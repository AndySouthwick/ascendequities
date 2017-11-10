import React, {Component} from 'react'
import { Card, CardImg, CardText,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './lifestyle.css'
class Lifestyle extends Component{


  render(){


    return(

      <div className="section2">
          <h1>
            “Everything we do we believe
            people want to live life on their  own terms”
      </h1>
        <span className="signature">
          -Ascend Equities
        </span>

          <div className="card-section d-flex  justify-content-lg-around">
            <Card>
              <CardImg top width="100%" src={require('../../../images/cardimage1.png')} alt="Card image cap" />

                <CardTitle>Award Winning <br/>Indicators</CardTitle>
              <Button className="pill">Learn More</Button>

            </Card>
            <Card>
              <CardImg top width="100%" src={require('../../../images/cardimage2.png')} alt="Card image cap" />
              <CardTitle>One on One <br/> Mentoring</CardTitle>
              <Button className="pill">Learn More</Button>
            </Card>
            <Card>
              <CardImg top width="100%" src={require('../../../images/cardimage3.png')} alt="Card image cap" />
              <CardTitle>Trade Our Money</CardTitle>
              <CardSubtitle>Keep 60-80% of the profit</CardSubtitle>
              <Button className="pill">Learn More</Button>
            </Card>
          </div>

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