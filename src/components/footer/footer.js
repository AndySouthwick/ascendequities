import React, {Component} from 'react'
import './footer.css'

class Footer extends Component {
  render(){
    return(
      <div id="footer">
        <div><img src={require("../../images/AscendEquitiesLogo.png")} alt=""/></div>
        <div>

          <h2>Solutions</h2>
          <p><a href="">How We Fund Your Account</a></p>
          <p><a href="">The Coaching Program</a></p>
        </div>
        <div>
          <h2>
           Support
          </h2>
          <p>
            <a href="">Help Center</a>
          </p>
        </div>
        <div>
          <h2>Company</h2>
          <p><a href="">Contact</a></p>
          <p><a href="">About</a></p>
          <p><a href="">Office</a></p>
        </div>
      </div>
    )
  }
}

export default Footer