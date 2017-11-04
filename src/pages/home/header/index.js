import React, {Component} from 'react'
import './header.css'



class Header extends Component{

  render(){
    return(

        <div className="header d-flex flex-column" >
          <div className="header-top">
            <p className="d-flex justify-content-center text-center ">
              LEARN ABOUT OUR<br/> AWARD WINNING INDICATORS
            </p>
            <h1 className="d-flex justify-content-center text-center ">
              WATCH AN OVERVIEW
            </h1>
          </div>

          <div className="d-flex justify-content-center text-center ">
            <button className=" btn btn-lg  white-ghost-button">
              Click Now
            </button>
          </div>


        </div>

    )
  }
}
export default Header