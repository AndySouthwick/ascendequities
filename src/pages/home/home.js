import React, {Component} from 'react'
import Header from './header'
import Lifestyle from './lifestyle'
import TopNavigation from './../../components/menues/topnavigation'
import Scroll from './../../components/scroll'

class Home extends Component {
  render(){
    return(
     <div className="full-height">
      <TopNavigation/>
      <Header/>
      <Lifestyle/>
     </div>
    )
  }
}

export default Home