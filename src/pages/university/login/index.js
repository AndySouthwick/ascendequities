import React, {Component} from 'react'
import LoginForm from './form'
import TopNavigation from '../../../components/menues/topnavigation'

class Login extends Component{
  render(){
    return(
      <div className="full-height">
        <TopNavigation/>
        <LoginForm/>
      </div>
    )
  }
}
export default Login