import React from 'react'

export default class App extends React.Component {

  /* comment */
  constructor() {
    super()
    this.state = {
      count = 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(preState => {
      return {
        count: preState.count + 1
      }
    })
  }
  render() {
    return <div>
      <h1>(this.count.state)</h1>
      <button onClick={this.handleClick}>Change!</button>
    </div>
  }
}