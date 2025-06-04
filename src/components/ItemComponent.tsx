import type { Item } from '../utils/types'
// import styles from './ItemComponent.module.scss'

type Props = {
    item: Item
}

const ItemComponent = ({ item }: Props) => {
    const showKnowledgeSpace = (knowledge: number) => {
        const array = [];
        for (let index = 0; index < 9; index++) {
            if (index < knowledge) {
                array.push(<div key={index} className={"w-2 h-2 rounded-full bg-blue-600"}></div>)
            } else {
                array.push(<div key={index} className="w-2 h-2 rounded-full bg-gray-300"></div>)
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
        <div className="flex w-60 h-46 flex-col items-center gap-2 border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-gray-800">{item.name}</h4>
            {item.logoName ? (
                <i className={`${item.logoName} text-5xl text-black`} />
            ) : (
                <img
                    src={item.urlImg}
                    alt={`${item.name} logo`}
                    className="w-12 h-12 invert"
                />
            )}
            <span className="text-sm text-gray-500">{defineKnowledgeLabel(item.knowledge)}</span>
            <div className="flex justify-center gap-1">{showKnowledgeSpace(item.knowledge)}</div>
            <div className="flex text-xs gap-6.5 text-gray-400">
                <span>Jr</span>
                <span>Pl</span>
                <span>Sr</span>
            </div>
        </div>
    );
}

export default ItemComponent