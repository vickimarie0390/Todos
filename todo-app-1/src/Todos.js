import React from 'react'

 const Todos = ({todos}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
        })
         ) : )
        <p className="center"> You have no todo's left, yay!</p>
    )
  return (
    <div className="todos collection">Todos</div>
  )
}
