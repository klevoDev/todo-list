import React, { FC } from 'react'

import { CONTENT, HEADING } from './todos-constants'
import { TodosTypeProps } from './todos-types'

import styles from './todos.module.css'

export const TodosComponent: FC<TodosTypeProps> = (props) => {
	const todosItem = props.todosItem.map((el) => {
		return (
			<div key={el.id}>
				<h1>{HEADING}</h1>
				<div className={styles.WrapInput}>
					<input type='text' />
					<button>{CONTENT.CREATE}</button>
				</div>
				<div className={styles.WrapCheckBox}>
					<label>
						<input type='checkbox' />
						{el.title}
					</label>
				</div>
				<div className={styles.WrapButtons}>
					<button>{CONTENT.ALL}</button>
					<button>{CONTENT.COMPLETED}</button>
					<button>{CONTENT.ACTIVE}</button>
				</div>
			</div>
		)
	})

	return <div className={styles.WrapCard}>{todosItem}</div>
}
