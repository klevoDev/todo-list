import React, { useState } from 'react'

import './App.css'
import { Todos } from './components/todos-component'
import { todolistData } from './api/data'
import { FilterType, TodosType } from './components/todos-component/todos-types'

function App() {
	const [filter, setFilter] = useState<FilterType>('all')
	const [tasks, setTasks] = useState<TodosType[]>(todolistData.tasks)

	const addTask = (title: string) => {
		const id = new Date().getTime()
		const newTasks = [{ id, title, isDone: false }, ...tasks]
		setTasks(newTasks)
	}

	const deleteTask = (id: number) => {
		const newTasks = tasks.filter((task) => task.id !== id)
		setTasks(newTasks)
	}

	const changeFilter = (filter: FilterType) => {
		setFilter(filter)
	}

	let filteredTasks = tasks
	if (filter === 'completed') {
		filteredTasks = filteredTasks.filter((task) => task.isDone)
	} else if (filter === 'active') {
		filteredTasks = filteredTasks.filter((task) => !task.isDone)
	}

	return (
		<div className='App'>
			<Todos
				deleteTask={deleteTask}
				todosItem={filteredTasks}
				heading={todolistData.heading}
				changeFilter={changeFilter}
				addTask={addTask}
			/>
		</div>
	)
}

export default App
