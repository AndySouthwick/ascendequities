import React, {Component} from 'react'
import TopNavigation from'./../../components/menues/topnavigation'
import './contact.css'

class Contact extends Component {
  render(){
    return(
      <div className="full-height header2" id="contact">
        <TopNavigation/>
        <div className="container-fluid ">
          <div className="row toprow shift-right">

            <div className="col-6">
              <form action="">
              <div className="row">
              <div className="col-6">
                First Name:
                <input type="text" className="form-control"/>
              </div>

              <div className="col-6">Last Name:
                <input type="text" className="form-control"/>
              </div>

                <div className="col-12">Email:
                  <input type="text" className="form-control"/>
                </div>
                <div className="col-12">Phone:
                  <input type="text" className="form-control"/>
                </div>
                <div className="col-12">Message:
                  <input type="text" className="form-control"/>
                </div>

                <div className="col-3">
                  <button className="btn btn-lg btn-danger formbutton" type="submit" value="Submit" >
                    Submit
                  </button>
                </div>

              </div>
              </form>
            </div>




            <div className="col-6">
              test
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact