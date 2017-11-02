import React, {Component} from 'react'
import './topnavigation.css'

class TopNavigation extends Component {
  constructor (){
    super()
    this.state = {
      mobilenavshowhide: 'mobilenavhidden'
    }
  }

  openmenu = () => {
    this.setState({
      mobilenavshowhide: 'mobilenavshow'
    })
  }

  closemenu = () => {
    this.setState({
      mobilenavshowhide: 'mobilenavhidden'
    })
  }
  render(){


    return(
      <div>
        <div className="topnav d-flex align-items-center">
        <ul className="d-flex  justify-content-around">
          <li><a href="http://somewhere">Our Story</a></li>
          <li><a href="http://somewhere">Trading University</a></li>
          <li><a href="http://somewhere"><img src={require("../../../images/AscendEquitiesLogo.png")} alt=""/></a></li>
          <li><a href="http://somewhere">Contact</a></li>
          <li><a href="http://somewhere">Our Students</a></li>
        </ul>
      </div>

        <div className="mobilenav">
          <img src={require("../../../images/hamburger menu.png")} alt="" className="openmenu" onClick={this.openmenu}/>
          <div className={this.state.mobilenavshowhide}>
            <img src={require("../../../images/close.png")} alt="" className="closemenu" onClick={this.closemenu} />

            <ul className="mobilenavslideout">
              <a href="http://somewhere"><img src={require("../../../images/smalllogo.png")} alt=""/></a>
              <li><a href="http://somewhere">Our Story</a></li><hr/>
              <li><a href="http://somewhere">Trading University</a></li><hr/>
              <li><a href="http://somewhere">Contact</a></li><hr/>
              <li><a href="http://somewhere">Our Students</a></li><hr/>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}
export default TopNavigation