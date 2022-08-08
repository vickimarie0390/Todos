import React, { Component } from 'react'
import { Todos } from './Todos'

export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'take a shower'},
      {id: 2, content: 'brush your teeth'}
    ]
  }
  render() {
    return (
      <div><h1 className="center blue text">Todos's</h1>
      <Todos todos={this.state.todos} />
      </div>
    )
  }
}
