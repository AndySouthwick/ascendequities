import React, {Component} from 'react'
import './header.css'
import HeroModal from './../../../components/modal/heromodal'


class Header extends Component{

  render(){
    return(

        <div className="header d-flex flex-column" >
          <div className="header-top">
            <h1 className="d-flex justify-content-center text-center ">
              AWARD WINNING INDICATORS
            </h1>
          </div>
          <div className="d-flex justify-content-center text-center ">
            <HeroModal/>
          </div>


        </div>

    )
  }
}
export default Header