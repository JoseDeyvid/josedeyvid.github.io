import React from 'react'
import type { Category } from '../utils/types'
import styles from './Category.module.scss'

type Props = {
    category: Category
}

const CategoryComponent = ({ category }: Props) => {
    return (
        <div className={styles.category}>
            <p>{category.name}</p>
            <input type="checkbox" checked={category.selected} />
        </div>
    )
}

export default CategoryComponent