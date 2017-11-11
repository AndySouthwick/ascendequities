import React, {Component} from 'react'
import {createNewBLurb} from './service'
import {graphql}  from 'react-apollo'


class Form extends Component{
  constructor (){
    super()
    this.state = {
      name: '',
      blurb: '',
      file: ''
    }
  }
  submitForm = (evt) => {
    evt.preventDefault()
    console.log(this.state)
    this.props.mutate({
      variables: {
        name: this.state.name,
        blurb: this.state.blurb,
      }
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" onChange={(evt) => this.setState({ name: evt.target.value }) }/><br/>
          <input type="text" onChange={(evt) => this.setState({ blurb: evt.target.value }) }/><br/>
          <input type="file" onChange={(evt) => this.setState({ file: evt.target.value }) }/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default graphql(createNewBLurb)(Form)