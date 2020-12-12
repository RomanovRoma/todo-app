import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'

import './app.css'

export default class App extends Component {

  maxId = 10

  state = {
    todoData: [
      { label: 'Learn React', important: true, id: 1 },
      { label: 'Learn English', important: true, id: 2 },
      { label: 'Drink tea', important: false, id: 3 }
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {

      const idx = todoData.findIndex((el) => el.id === id)

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ]

      return {
        todoData: newArray
      }
    })
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ]

      return {
        todoData: newArr
      }
    })
  }

  onToggleImportant = (id) => {
    console.log('Toggle important', id)
  }

  onToggleDone = (id) => {
    console.log('Toggle Done', id)
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader todo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={ this.deleteItem }
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    )
  }
}