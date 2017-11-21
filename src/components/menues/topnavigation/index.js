import React, {Component} from 'react'
import './topnavigation.css'
import {Link} from 'react-router-dom'
import {Icon} from 'react-fa'


class TopNavigation extends Component {
  constructor (){
    super()
    this.state = {
      mobilenavshowhide: 'mobilenavhidden',
      menubg: 'topnav',
      menuItemAnimate: ''
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


  componentDidMount () {
    console.log('componentWillMount');
    window.addEventListener('scroll', this.handleScroll);
    console.log(window.location.pathname)
    if(window.location.pathname !== '/'){
      this.setState({
        menubg: 'addmenubg'
      })
    }
  }

  componentWillUnmount () {
    console.log('componentWillUnmount');
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
   this.setState({
     menubg: 'addmenubg'
   })
  }

  menuHover = () => {
    this.setState({
      menuItemAnimate: 'menuItemHover'
    })
  }
  menuBlur = () => {
    this.setState({
      menuItemAnimate: 'menuItemBlur'
    })
  }
  render(){


    return(
      <nav>
        <div className={`${this.state.menubg}  d-flex align-items-center`}>
        <ul className="d-flex  justify-content-around">
          <li><Link to="/story">Meet Our Team</Link></li>
          <li><Link to="https://secureonlinedaytradinguniversity.com/login/" target="_blank">Trading University</Link></li>
          <li><Link to="/"><img src={require("../../../images/AscendEquitiesLogo.png")} alt=""/></Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Students">Our Students</Link></li>
        </ul>
      </div>

        <div className=" mobileheader" >
          <img src={require("../../../images/AscendEquitiesLogo.png")} alt="" />
        </div>
        <div className="mobilenav">

          <Icon name="bars" size="2x" className="openmenu" onClick={this.openmenu}/>
          <div className={this.state.mobilenavshowhide}>
            <Icon name="times" size="2x" className="closemenu" onClick={this.closemenu}/>
            <ul className="mobilenavslideout">
              <Link to="/"><img src={require("../../../images/sheildlogo.png")} alt=""/></Link>
              <li><Link to="/story">Meet The Team</Link></li><hr/>
              <li><a href="https://secureonlinedaytradinguniversity.com/login/">Trading University</a></li><hr/>
              <li><Link to="/contact">Contact</Link></li><hr/>
              <li><Link to="/students">Our Students</Link></li><hr/>
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}
export default TopNavigation