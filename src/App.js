import React from "react";
import "./App.css";
import TodoList from "./TodoList/TodoList";
import TodoItem from "./TodoItem/TodoItem";
import axios from "axios";
import AddTodo from "./AddTodo/AddTodo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  updateTodo = (todo) => {
    const newTodos = this.state.todos.map((_todo) => {
       return _todo;
    });
  };

  getTodoList = async () => {
    await axios.get("http://localhost:3000/todos/").then((response) => {
      console.log(response.data);
      this.setState({
        todos: response.data,
      });
    });
  };

  componentDidMount() {
    this.getTodoList();
  }

  render() {
    return (
      <div className="App">
        <AddTodo></AddTodo>
        <TodoList
          updateTodoFn={this.updateTodo}
          todos={this.state.todos}
        ></TodoList>
      </div>
    );
  }
}

export default App;
