export type TodosType = {
	id: number
	title: string
	isDone: boolean
}

export type TodosPropsType = {
	todosItem: TodosType[]
	heading: string
	changeFilter: (filter: FilterType) => void
	addTask: (title: string) => void
}

export type FilterType = 'all' | 'active' | 'completed'
