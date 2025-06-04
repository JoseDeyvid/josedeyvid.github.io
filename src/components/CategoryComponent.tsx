import type { Category } from '../utils/types'
// import styles from './Category.module.scss'

type Props = {
    category: Category
}

const CategoryComponent = ({ category }: Props) => {
    return (
        <label className="flex items-center justify-between cursor-pointer">
            <span className="text-gray-600">{category.name}</span>
            <input
                type="checkbox"
                checked={category.selected}
                className="accent-blue-600 w-4 h-4 cursor-pointer"
            />
        </label>
    );
};

export default CategoryComponent