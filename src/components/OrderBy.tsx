import type { Item } from "../utils/types"
// import styles from "./OrderBy.module.scss"

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
        });

    }

    return (
        <div className="flex items-center gap-2">
            <span className="text-gray-600">Ordenar por:</span>
            <select
                onChange={handleChangeOrderBy}
                className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
                <option value="name">Nome</option>
                <option value="knowledge">Conhecimento</option>
            </select>
        </div>
    );
}

export default OrderBy