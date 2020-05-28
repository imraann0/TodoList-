import React from "react";
import axios from "axios";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      completed: false,
    };
  }

  updateInput = (e) => {
    this.setState({ description: e.target.value });
  };

  submitTodo = (e) => {
    axios
      .post(
        "http://localhost:3000/todos/",

        {
          description: this.state.description,
          completed: false,
        }
      )
      .then((response) => {
        console.log("done", response);
      });
  };

  render() {
    return (
      <div className="addtodoContainer">
        <h1>My Todo List </h1>
        <form onSubmit={(e) => this.submitTodo(e)}>
          <input onChange={(e) => this.updateInput(e)}></input>
          <button id="submit" type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
