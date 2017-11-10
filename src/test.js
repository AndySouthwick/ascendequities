import React, {Component} from 'react'
import {graphql}  from 'react-apollo'
import gql from 'graphql-tag'
import Form from './form'


class Test extends Component{




  render() {


    console.log(this.state)

    if(this.props.data === null){
      console.log('loading')
    }

    console.log(this.props.data.allStudentsblurbses)

if(!this.props.data.allStudentsblurbses){
      return(
        <div>
          ...Loading
        </div>
      )
}else

    return (

      <div>
        <Form/>
        {this.props.data.allStudentsblurbses.map((blurbs) =>
          <div key={blurbs.id}>
          {blurbs.name}
          {blurbs.blurb}
        </div>)}

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
export default graphql(QUERY)(Test)