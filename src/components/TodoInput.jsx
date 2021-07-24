import React, { Component } from "react";

class TodoInput extends Component {
    
  render() {
    const {item, handleChange, handleSubmit, editItem} = this.props;

    return (
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="space-x-5 ">
            <input
              placeholder="new task"
              className="pl-2 p-2 border-4 border-purple-600 rounded-lg w-64"
              type="text"
              value={item}
              onChange={handleChange}
            ></input>
            <button
              className="hover:bg-gray-50 hover:text-blue-800 bg-purple-600 rounded-md text-white px-5 text-xl py-1"
              type="submit"
            >
              {editItem ? 'Edit task' : 'Add new task'}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoInput;
