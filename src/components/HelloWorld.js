import React, { Component } from 'react'

class HelloWorld extends Component {
  constructor(props) {
    super()
    
    this.state = {
      name: 'Ítalo'
    }
  }

  render() {
    return (
      <div className="hello-world">
        <h1>Hello World</h1>
        <span>To {this.state.name || 'you'}!</span>
      </div>
    )
  }
}

export default HelloWorld