import React, {Component} from 'react'
import './header.css'



class Header extends Component{

  render(){
    return(

      <header className="d-flex flex-column" >
        <div className="header-top">

          <h1>Who Are We?</h1>
          <p>
            More than just a trading platform<br/>
            We teach you how to use the indicators<br/>
            We train you and strategize with you<br/>
            We become trading partners
          </p>
        </div>
        <div className="d-flex justify-content-center text-center ">
        </div>


      </header>

    )
  }
}
export default Header