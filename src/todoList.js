/*
import React from "react"
import { observer } from "mobx-react"


@observer
class TodoList extends React.Component {
  createNew(e) {

    //if enter key is hit, do this
    // store comes from <TodoList store={TodoStore} /> that gets passed in
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value);
      e.target.value = "";
    }
  }

  filter(e) {
    this.props.store.filter = e.target.value
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete
  }

  render() {
    const { clearComplete, filter, filteredTodos, todos } = this.props.store

    const todoLis = filteredTodos.map(todo => (
      <li key={todo.id}>
       <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
       <span>{todo.value}</span>
      </li>
    ))
    return <div>
      <h1>todos</h1>
      <input className="new" onKeyPress={this.createNew.bind(this)} />
      <input className="filter" value={filter} onChange={this.filter.bind(this)} />
      <ul>{todoLis}</ul>
      <a href="#" onClick={clearComplete}>Clear Complete</a>
    </div>
  }
}

export default TodoList;
*/