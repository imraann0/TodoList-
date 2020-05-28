import React from "react";
import "./style.css";
import axios from "axios";

class TodoItem extends React.Component {
  toggleTodo = async () => {
    this.props.updateTodoFn(this.props.todo)
    const id = this.props.todo._id;
    const completed = this.props.todo.completed;

    await axios
      .patch(`http://localhost:3000/todos/${id}`, {
        completed: !completed,
      })
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  deleteTodo = async () => {
    const id = this.props.todo._id;
    await axios
      .delete(`http://localhost:3000/todos/${id}`)
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  refresh;

  render() {
    const { todo } = this.props;

    return (
      <div
        className={"todoItem" + (todo.completed ? " completed" : "")}
        onClick={this.toggleTodo}
      >
        {todo.description}
        <div className="deleteButton">
          <button onClick={this.deleteTodo}> Delete Todo </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
