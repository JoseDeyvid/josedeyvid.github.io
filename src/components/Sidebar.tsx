import React from 'react'
import styles from './Sidebar.module.scss'
import type { Category } from '../utils/types'
import { v4 as uuidv4 } from 'uuid'
import CategoryComponent from './CategoryComponent'

const Sidebar = () => {
    const categories: Category[] = [
        { id: uuidv4(), name: "Category 1", selected: false },
        { id: uuidv4(), name: "Category 2", selected: false },
        { id: uuidv4(), name: "Category 3", selected: false },
        { id: uuidv4(), name: "Category 4", selected: true },
        { id: uuidv4(), name: "Category 5", selected: false },
        { id: uuidv4(), name: "Category 6", selected: true },
        { id: uuidv4(), name: "Category 7", selected: false },
        { id: uuidv4(), name: "Category 8", selected: false },
        { id: uuidv4(), name: "Category 9", selected: false },
        { id: uuidv4(), name: "Category 10", selected: false },
    ]
    return (
        <div className={styles.sidebarContainer}>
            {categories.map((category) => (
                <CategoryComponent category={category} />
            ))}
        </div>
    )
}

export default Sidebar