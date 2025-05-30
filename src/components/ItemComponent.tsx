import React from 'react'
import type { Item } from '../utils/types'
import styles from './ItemComponent.module.scss'

type Props = {
    item: Item
}

const ItemComponent = ({ item }: Props) => {
    const showKnowledgeSpace = (knowledge: number) => {
        const array = [];
        for (let index = 0; index < 9; index++) {
            if (index < knowledge) {
                array.push(<div key={index} className={`${styles.knowledgeSpace} ${styles.acquired}`}></div>)
            } else {
                array.push(<div key={index} className={styles.knowledgeSpace}></div>)
            }
        }
        return array;
    }
    return (
        <div className={styles.itemContainer}>
            <h4>{item.name}</h4>
            <i className={`${item.logoName} ${styles.logo}`}></i>
            <p>{item.knowledge === 0 ? "Not Acquired" : item.knowledge < 7 ? "Learning" : "Acquired"}</p>
            <div className={styles.knowledgeSpaces}>
                {showKnowledgeSpace(item.knowledge)}
            </div>
        </div>
    )
}

export default ItemComponent