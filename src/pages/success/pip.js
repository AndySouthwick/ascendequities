import React, { Component } from 'react';

class Pip extends Component {
  constructor(props){
    super(props)
    this.state = {
      count:  0,
      countDay: 0,
      countWeek: 0
    }
  }

  componentDidMount(){

     let count = 0
      const myCounter = (countTo) => {
      let newCount = count++
      this.setState({
          count: newCount,
      })

      if(newCount >= countTo){
        clearIntervalFunc()
      }
    }

    const clearIntervalFunc = () => {
      clearInterval(addItUp)
    }

    const addItUp = setInterval(() => {
      myCounter(this.state.countDay)
      myCounter(this.state.countWeek)
    }, 1000)

  }


  render(){

    return(
      <div>{this.state.countDay}</div>
    )
  }
}
export default Pip