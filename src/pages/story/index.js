import React, {Component} from 'react'
import TopNavigation from './../../components/menues/topnavigation'
import Footer from './../../components/footer/footer'
import Header from './header'
import Founder from './founder/founder'

import './story.css'

class OurStory extends Component{
  render(){
    return(

      <div className="full-height our-story">
        <TopNavigation/>
        <Header/>
        <Founder/>
        <Footer/>
      </div>
    )
  }
}
export default OurStory