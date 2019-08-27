import React from "react";

class TodoItem extends React.Component {
  constructor() {
    super();

    this.state = {
      done: false
    };
  }

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onChange={() => this.setState({ done: !this.state.done })}
        />
        <p className={this.state.done ? "done" : null}>{this.props.title}</p>
        <button>X</button>
      </div>
    );
  }
}

export default TodoItem;
