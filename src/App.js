import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsToShow: "all",
      id: uuid(),
      item: "",
      editItem: false,
    };
  }

  handleChange = event => {
		this.setState({
			item: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		
		const newItem = {
			id: this.state.id,
			title: this.state.item,
			completed: false
		}
		
		const updatedItems = [...this.state.items, newItem]

		if (this.state.item.length > 0) {
			this.setState({
				items: updatedItems,
				id: uuid(),
				item: '',
				editItem: false
			})
		}
	}

  updateTodosToShow = string => {
		this.setState({
			itemsToShow: string
		});
	};

	handleDoneTask = (id, completed) => {
		const filteredItems = this.state.items.map(item => {
			item.id === id && (item.completed = !item.completed)
			return item
		})

		this.setState({
			items: filteredItems,
		})
	}

  handleDelete = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id)

		this.setState({
			items: filteredItems
		})
	}

	handleEdit = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id)

		const selectedItem = this.state.items.find(item => item.id === id)

		this.setState({
			items: filteredItems,
			id: id,
			item: selectedItem.title,
			editItem: true
		})
	}

  handleDeleteDoneTasks = () => {
		const filteredItems = this.state.items.filter(item => item.completed === false)

		this.setState({
			items: filteredItems
		})
	}

	clearList = () => {
		this.setState({
			items: []
		})
	}



  render() {
    let items = []

		if (this.state.itemsToShow === "all") {
			items = this.state.items;
		} else if (this.state.itemsToShow === "todo") {
			items = this.state.items.filter(item => !item.completed);
		} else if (this.state.itemsToShow === "done") {
			items = this.state.items.filter(item => item.completed);			
		}

    return (
      <div className="flex justify-center">
        <header>
          <h1 className="bg-purple-600 text-white text-center max-w-2xl font-mono shadow-xl text-5xl font-medium m-auto mt-5 mb-5 p-5 border-gray-400 rounded-lg">
            PLANS FOR DAY
          </h1>
          <TodoInput item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
              editItem={this.editItem}/>
          <h3 className=" text-purple-600 text-center font-mono shadow-xl text-5xl font-medium m-auto mt-5 mb-5 p-1">
            TODO LIST
          </h3>
          <TodoList items={items}
							filterDoneTasks={this.filterDoneTasks}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
							handleDoneTask={this.handleDoneTask}
							handleDeleteDoneTasks={this.handleDeleteDoneTasks}
							updateTodosToShow={this.updateTodosToShow} />
        </header>
      </div>
    );
  }
}
 

export default App;