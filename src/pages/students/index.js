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

    return(
      <div>
        <TopNavigation/>

        <div className="students">
        {this.props.data.allStudentsblurbses.map((blurbs) =>
          <div key={blurbs.id} className="d-flex singleblurb">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf2u0RWmYALKJ431XNoTKjzu77ERLBIvXKlOEA-Q3DPo2h2rCB" alt=""/>
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
  }
}
`
export default graphql(QUERY)(Students)