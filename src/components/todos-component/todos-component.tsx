import React, { ChangeEvent, KeyboardEvent, FC, useState } from 'react'

import { CONTENT, EMPTY_STRING } from './todos-constants'
import { FilterType, TodosPropsType } from './todos-types'

import styles from './todos.module.css'

export const TodosComponent: FC<TodosPropsType> = ({
	addTask,
	changeFilter,
	changeStatusTask,
	heading,
	todosItem
}) => {
	const todoList = todosItem.map((task) => {
		const onChangeStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
			changeStatusTask(task.id, event.currentTarget.checked)
		}

		return (
			<li key={task.id}>
				<label>
					<input
						type='checkbox'
						checked={task.isDone}
						onChange={onChangeStatusHandler}
					/>
					{task.title}
				</label>
			</li>
		)
	})

	const onClickFilterHandler = (filter: FilterType) => {
		changeFilter(filter)
	}

	const [value, setValue] = useState(EMPTY_STRING)
	const onChangeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value)
	}
	const addTaskHandler = () => {
		addTask(value)
		setValue(EMPTY_STRING)
	}

	const onEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			addTaskHandler()
		}
	}

	return (
		<div className={styles.WrapCard}>
			<h1>{heading}</h1>
			<div className={styles.WrapInput}>
				<input
					type='text'
					value={value}
					onChange={onChangeValueHandler}
					onKeyDown={onEnterHandler}
				/>
				<button onClick={addTaskHandler}>
					<span>{CONTENT.CREATE}</span>
				</button>
			</div>
			<ul className={styles.WrapCheckBox}>{todoList}</ul>
			<div className={styles.WrapButtons}>
				<button onClick={() => onClickFilterHandler('all')}>
					{CONTENT.ALL}
				</button>
				<button onClick={() => onClickFilterHandler('completed')}>
					{CONTENT.COMPLETED}
				</button>
				<button onClick={() => onClickFilterHandler('active')}>
					{CONTENT.ACTIVE}
				</button>
			</div>
		</div>
	)
}
