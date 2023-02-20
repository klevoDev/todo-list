import React, { useState } from 'react'

import './App.css'
import { Todos } from './components/todos-component'
import { todolistData } from './api/data'
import { FilterType, TodosType } from './components/todos-component/todos-types'

function App() {
	const [filter, setFilter] = useState<FilterType>('all')
	const [tasks, setTasks] = useState<TodosType[]>(todolistData.tasks)

	const changeStatusTask = (id: number, isDone: boolean) => {
		const newTasks = tasks.map((task) =>
			task.id === id ? { ...task, isDone } : task
		)
		setTasks(newTasks)
	}

	const addTask = (title: string) => {
		const id = new Date().getTime()
		const newTasks = [{ id, title, isDone: false }, ...tasks] // CRUD -> CREATE
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
				todosItem={filteredTasks}
				heading={todolistData.heading}
				changeFilter={changeFilter}
				changeStatusTask={changeStatusTask}
				addTask={addTask}
			/>
		</div>
	)
}

export default App
