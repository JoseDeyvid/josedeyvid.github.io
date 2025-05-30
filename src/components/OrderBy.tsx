import styles from "./OrderBy.module.scss"
const OrderBy = () => {
    return (
        <div className={styles.selectContainer}>
            <p>Ordernar por</p>
            <select className={styles.select}>
                <option value="name">Nome</option>
                <option value="knowledge">Conhecimento</option>
            </select>
        </div>

    )
}

export default OrderBy