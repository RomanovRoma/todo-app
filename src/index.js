import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'

const App = () => {

  const todoData = [
    { label: 'Learn React', important: true },
    { label: 'Learn English', important: true },
    { label: 'Drink tea', important: false }
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root'))