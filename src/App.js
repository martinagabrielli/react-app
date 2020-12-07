import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import todosData from './todosData'

function App() {
  const todos = todosData.map(todo => <Main key={todo.id} todo={todo.text}/>) 
  return (
    <>
      <Header />
      {todos}
    </>
  )
}

export default App