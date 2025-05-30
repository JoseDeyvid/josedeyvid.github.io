import React from 'react'
import type { Item } from '../utils/types'
import styles from './ItemComponent.module.scss'

type Props = {
    item: Item
}

const ItemComponent = ({ item }: Props) => {
    const showKnowledge = (knowledge: number) => {
        const array = [];
        for (let index = 0; index < 9; index++) {
            if (index < knowledge) {
                array.push(<div className={`${styles.knowledgeSpace} ${styles.acquired}`}></div>)
            } else {
                array.push(<div className={styles.knowledgeSpace}></div>)
            }
        }
        return array;
    }
    return (
        <div>
            <h4>{item.name}</h4>
            <img src={item.urlImg} alt={item.description} />
            <p>{item.knowledge === 0 ? "Not Acquired" : item.knowledge < 7 ? "Learning" : "Acquired"}</p>
            {showKnowledge(item.knowledge)}
        </div>
    )
}

export default ItemComponent