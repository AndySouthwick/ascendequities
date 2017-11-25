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
      </div>
      </div>
    )
  }
}

export default Footer