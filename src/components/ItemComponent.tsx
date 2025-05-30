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

    const defineKnowledgeLabel = (knowledge: number) => {

        switch (knowledge) {
            case 1:
                return 'Aprendiz'
            case 2:
                return 'Iniciante'
            case 3:
                return 'Iniciante Avançado'
            case 4:
                return 'Intermediário Básico'
            case 5:
                return 'Intermediário'
            case 6:
                return 'Intermediário Avançado'
            case 7:
                return 'Avançado'
            case 8:
                return 'Especialista'
            case 9:
                return 'Referência'

        }
    }

    return (
        <div className={styles.itemContainer}>
            <h4>{item.name}</h4>
            {item.logoName ? <i className={`${item.logoName} ${styles.logo}`}></i> : <img src={item.urlImg} alt={`${item.name} logo`} className={styles.logo} />}
            <label>{defineKnowledgeLabel(item.knowledge)}</label>
            <div className={styles.knowledgeSpaces}>
                {showKnowledgeSpace(item.knowledge)}
            </div>
            <div className={styles.ranks}>
                <p>Jr</p>
                <p>Pl</p>
                <p>Sr</p>
            </div>
        </div>
    )
}

export default ItemComponent