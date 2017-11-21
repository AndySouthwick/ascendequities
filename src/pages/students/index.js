import React, {Component} from 'react'
import TopNavigation from './../../components/menues/topnavigation'
import Footer from './../../components/footer/footer'
import {graphql}  from 'react-apollo'
import gql from 'graphql-tag'
import './students.css'
import FontAwesome from 'react-fontawesome'
class Students extends Component{
  render(){

    if(!this.props.data.allStudentsblurbses){
      return(
        <div className="d-flex align-items-center justify-content-center">

          <FontAwesome
            className='center-spinner'
            name='spinner'
            size='4x'
            spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        <h1 className="center-h1-loading">Loading</h1>
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
           <div className="imgContainer"> <img src={`${blurbs.img}`} alt=""/></div>
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