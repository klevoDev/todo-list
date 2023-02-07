import React from 'react'

import './App.css'
import { Todos } from './components/todos-component'
import { tasks } from './api/data'

function App() {
	return (
		<div className='App'>
			<Todos todosItem={tasks} />
		</div>
	)
}

export default App
