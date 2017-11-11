import React, {Component} from 'react'
import './topnavigation.css'


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
          <li><a href="/story">Our Story</a></li>
          <li><a href="https://secureonlinedaytradinguniversity.com/login/" target="_blank">Trading University</a></li>
          <li><a href="/"><img src={require("../../../images/AscendEquitiesLogo.png")} alt=""/></a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/Students">Our Students</a></li>
        </ul>
      </div>

        <div className="mobilenav">
          <img src={require("../../../images/hamburger menu.png")} alt="" className="openmenu" onClick={this.openmenu}/>
          <div className={this.state.mobilenavshowhide}>
            <img src={require("../../../images/close.png")} alt="" className="closemenu" onClick={this.closemenu} />
            <ul className="mobilenavslideout">
              <a href="/"><img src={require("../../../images/smalllogo.png")} alt=""/></a>
              <li><a href="/story">Our Story</a></li><hr/>
              <li><a href="https://secureonlinedaytradinguniversity.com/login/">Trading University</a></li><hr/>
              <li><a href="/contact">Contact</a></li><hr/>
              <li><a href="/Students">Our Students</a></li><hr/>
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}
export default TopNavigation