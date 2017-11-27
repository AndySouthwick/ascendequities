import React, {Component} from 'react'
import './footer.css'
import {Icon} from 'react-fa'
import {Link} from 'react-router-dom'


class Footer extends Component {
  render(){
    return(
      <div id="footer">
        <div><Link to="/"><img src={require("../../images/AscendEquitiesLogo.png")} alt=""/></Link></div>
        <div>

          <h2>Solutions</h2>
          <p><Link to="/story">How We Fund Your Account</Link></p>
          <p><Link to="/story">The Coaching Program</Link></p>
        </div>
        <div>
          <h2>
           Support
          </h2>
          <p>
            <Link to="/contact">Help Center</Link>
          </p>
        </div>
        <div>
          <h2>Company</h2>
          <p><Link to="/contact">Contact</Link></p>
          <p><Link to="/story">About</Link></p>
          <p><Link to="/contact">Office</Link></p>
        </div>
        <div>
          {/*<Icon name="facebook" size="4x"/>*/}
          {/*<Icon name="twitter" size="4x"/>*/}
          {/*<Icon name="youtube" size="4x"/>*/}
      </div>
      </div>
    )
  }
}

export default Footer