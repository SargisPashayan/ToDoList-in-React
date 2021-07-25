import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { id, title, handleDelete, handleEdit, handleDoneTask, completed } =
      this.props;

    return (
      <li
        className={`flex  p-4 mb-2 justify-between items-center max-w-2xl ${
          completed ? "bg-gray-400 " : "bg-green-300"
        }`}
      >
        <h6
          className={`
          ml-2 text-xl font-sans font-medium
          ${completed ? "text-white line-through" : "text-gray-700"}
        `}
        >
          {title}
        </h6>

        <div className="w-1/6 flex justify-between items-center mr-2">
          <span
            className={`mx-2 ${completed ? "text-success" : "text-secondary"}`}
            onClick={() => handleDoneTask(id)}
          >
            <i
              className={`${
                completed ? "far fa-check-square" : "far fa-square"
              }`}
            />
          </span>
          <span className="mx-2 text-warning" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
