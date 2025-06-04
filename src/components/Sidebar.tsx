// import styles from './Sidebar.module.scss'
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
        <aside className="w-48 h-fit bg-white border border-gray-200  rounded-lg p-4 shadow-2xl sticky top-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Categorias</h2>
            <div className="flex flex-col gap-2">
                {categories.map((category) => (
                    <CategoryComponent key={category.id} category={category} />
                ))}
            </div>
        </aside>
    );
}

export default Sidebar