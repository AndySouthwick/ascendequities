import React, {Component} from 'react'
import TopNavigation from './../../components/menues/topnavigation'
import Footer from './../../components/footer/footer'
import {graphql}  from 'react-apollo'
import gql from 'graphql-tag'
import './students.css'
class Students extends Component{
  render(){

    if(!this.props.data.allStudentsblurbses){
      return(
        <div>
          ...Loading
        </div>
      )
    }else

      console.log(this.props.data)
    return(
      <div>
        <TopNavigation/>
        <div className="students">
        {this.props.data.allStudentsblurbses.map((blurbs) =>
          <div key={blurbs.id} className="singleblurb">
            <img src={`${blurbs.img}`} alt=""/>
              <p>
                <h2>{blurbs.name}</h2>
            {blurbs.blurb}</p>
          </div>)}
        </div>

        <Footer/>
      </div>
    )
  }
}

const QUERY = gql `
query {
  allStudentsblurbses {
    id
    name
    blurb
    img
  }
}
`
export default graphql(QUERY)(Students)