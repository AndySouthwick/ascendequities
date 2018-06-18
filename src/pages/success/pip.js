import React, { Component } from 'react';
import {graphql}  from 'react-apollo'
import gql from 'graphql-tag'

class Pip extends Component {
  constructor(props){
    super(props)
    this.state = {
      janCount: 0,
      febCount: 0,
      mrchCount: 0
  }}
   componentWillReceiveProps (props) {
    let i = 1
    const myCounter =  (countTo, timePeriod) => {
      switch (timePeriod){
        case 'January':
          if(i < countTo){
            i++
            this.setState({
              janCount: i
            })}
          break;
        case 'February':
          if(i < countTo){
            i++
            this.setState({
              febCount: i
            })}
          break;
        case 'March':
          if(i < countTo) {
            i++
            this.setState({
              mrchCount: i
            })}
          break;
        default:
          break;
      }}
      props.data.allPipcounters.map((pipCounters) =>{
        console.log(pipCounters)
        setInterval( () => {
          myCounter(pipCounters.amount, pipCounters.past)
        }, 50)
      })
  }


  render(){
    return(
      <div className="section-pip">
         <h2>{this.state.janCount}</h2>
         <h2>{this.state.febCount}</h2>
       </div>
    )
  }
}

const  query =  gql `
  query{
  allPipcounters{
    id createdAt amount past
  }
  }
`
export default  graphql(query)(Pip)