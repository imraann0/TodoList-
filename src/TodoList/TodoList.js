import React from "react";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component {
  updateTodo = (todo) => {
    this.props.updateTodoFn(todo);
  };

  render() {
    const { todos } = this.props;

    return (
      <div className="todoListContainer">
        {todos.map((_todo, i) => {
          return (
            <TodoItem
              updateTodoFn={this.updateTodo}
              key={i}
              todo={_todo}
            ></TodoItem>
          );
        })}
      </div>
    );
  }
}

export default TodoList;
