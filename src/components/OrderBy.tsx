import type { Item } from "../utils/types"
import styles from "./OrderBy.module.scss"

type Props = {
    setItems: React.Dispatch<React.SetStateAction<Item[]>>
}

const OrderBy = ({ setItems }: Props) => {

    const handleChangeOrderBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItems((prevItems) => {
            const itemsCopy = [...prevItems];

            if (e.target.value === 'knowledge') {
                return itemsCopy.sort((a, b) => b.knowledge - a.knowledge);
            } else {
                return itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
            }

            return itemsCopy;
        });

    }
    return (
        <div className={styles.selectContainer}>
            <p>Ordernar por</p>
            <select className={styles.select} onChange={(e) => handleChangeOrderBy(e)}>
                <option value="name">Nome</option>
                <option value="knowledge">Conhecimento</option>
            </select>
        </div>

    )
}

export default OrderBy