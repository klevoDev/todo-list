export type TodosType = {
	id: number
	title: string
	isDone: boolean
}

export type TodosPropsType = {
	addTask: (title: string) => void
	changeFilter: (filter: FilterType) => void
	deleteTask: (id: number) => void
	heading: string
	todosItem: TodosType[]
}

export type FilterType = 'all' | 'active' | 'completed'
