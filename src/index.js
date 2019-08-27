import React from "react";
import ReactDOM from "react-dom";

import TodoItem from "./TodoItem";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: []
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: ""
    });
  };

  renderTodos = () => {
    return this.state.todos.map(todo => {
      return <TodoItem title={todo} />;
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <form className="add-todo-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add ToDo"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button type="submit">Add></button>
        </form>
        {this.renderTodos()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
