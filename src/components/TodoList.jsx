import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class TodoList extends Component {
  render() {
    const {
      items,
      updateTodosToShow,
      clearList,
      handleDelete,
      handleEdit,
      handleDoneTask,
      handleDeleteDoneTasks,
    } = this.props;

    return (
      <div>
        <div className="flex justify-center flex-auto flex space-x-9 m-auto mt-5 mb-5 p-2">
          <button
            className="hover:bg-purple-100 hover:text-blue-800 bg-purple-600 rounded-md text-white px-5 text-xl py-1"
            type="submit"
            onClick={() => updateTodosToShow("all")}
          >
            ALL
          </button>
          <button
            className="hover:bg-purple-100 hover:text-blue-800 bg-purple-600 rounded-md text-white px-5  text-xl py-1"
            type="submit"
            onClick={() => updateTodosToShow("done")}
          >
            DONE
          </button>
          <button
            className="hover:bg-purple-100 hover:text-blue-800 bg-purple-600 rounded-md text-white px-5 text-xl py-1"
            type="submit"
            onClick={() => updateTodosToShow("todo")}
          >
            TODO
          </button>
        </div>

        {items.length === 0 ? (
          ""
        ) : (
          <ul className="list-disc space-y-2">
            {items.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  completed={item.completed}
                  handleDelete={() => handleDelete(item.id)}
                  handleEdit={() => handleEdit(item.id)}
                  handleDoneTask={handleDoneTask}
                />
              );
            })}

            <div className="flex justify-center flex-auto flex space-x-3">
              <button
                type="button"
                className="hover:bg-red-100 hover:text-red-800 bg-red-600 rounded-md text-white px-5 text-xl py-1"
                onClick={handleDeleteDoneTasks}
              >
                Delete done tasks
              </button>

              <button
                type="button"
                className="hover:bg-red-100 hover:text-red-800 bg-red-600 rounded-md text-white px-5 text-xl py-1"
                onClick={clearList}
              >
                Delete all tasks
              </button>
            </div>
          </ul>
        )}
      </div>
    );
  }
}

export default TodoList;

TodoItem.PropTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};
