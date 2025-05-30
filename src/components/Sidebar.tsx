import React from 'react'
import styles from './Sidebar.module.scss'
import type { Category } from '../utils/types'
import CategoryComponent from './CategoryComponent'

const Sidebar = () => {
    const categories: Category[] = [
        { id: "0", name: "Nuvem", selected: false },
        { id: "1", name: "Bibliotecas", selected: false },
        { id: "2", name: "Ferramentas", selected: false },
        { id: "3", name: "Versionamento", selected: true },
        { id: "4", name: "CSS", selected: false },
        { id: "5", name: "Backend", selected: true },
        { id: "6", name: "Frontend", selected: false },
        { id: "7", name: "Mobile", selected: false },
        { id: "8", name: "Banco de dados", selected: false },
        { id: "9", name: "APIs", selected: false },
        { id: "10", name: "Testes", selected: false },
        { id: "11", name: "ORMs", selected: false },
        { id: "12", name: "Linguagens", selected: false },
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