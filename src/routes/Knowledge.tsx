import { v4 as uuidv4 } from 'uuid';
// import styles from './Knowledge.module.scss'
import type { Item } from '../utils/types';
import ItemComponent from '../components/ItemComponent';
import SearchBar from '../components/SearchBar';
import OrderBy from '../components/OrderBy';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';


const Knowledge = () => {
    const [items, setItems] = useState<Item[]>([
        { id: uuidv4(), knowledge: 1, name: "Amazon Web Services", logoName: "devicon-amazonwebservices-plain-wordmark", isSelected: false },
        { id: uuidv4(), knowledge: 5, name: "Axios", logoName: "devicon-axios-plain", isSelected: false },
        { id: uuidv4(), knowledge: 2, name: "Babel", logoName: "devicon-babel-plain", isSelected: false },
        { id: uuidv4(), knowledge: 3, name: "Bitbucket", logoName: "devicon-bitbucket-original", isSelected: false },
        { id: uuidv4(), knowledge: 5, name: "Bootstrap", logoName: "devicon-bootstrap-plain", isSelected: false },
        { id: uuidv4(), knowledge: 4, name: "C#", logoName: "devicon-csharp-plain", isSelected: false },
        { id: uuidv4(), knowledge: 7, name: "CSS3", logoName: "devicon-css3-plain", isSelected: false },
        { id: uuidv4(), knowledge: 5, name: "Docker", logoName: "devicon-docker-plain", isSelected: false },
        { id: uuidv4(), knowledge: 4, name: "Eslint", logoName: "devicon-eslint-plain", isSelected: false },
        { id: uuidv4(), knowledge: 5, name: "Express", logoName: "devicon-express-original", isSelected: false },
        { id: uuidv4(), knowledge: 5, name: "Firebase", logoName: "devicon-firebase-plain", isSelected: false },
        { id: uuidv4(), knowledge: 6, name: "Git", logoName: "devicon-git-plain", isSelected: false },
        { id: uuidv4(), knowledge: 6, name: "Github", logoName: "devicon-github-original", isSelected: false },
        { id: uuidv4(), knowledge: 1, name: "GraphQL", logoName: "devicon-graphql-plain", isSelected: false },
        { id: uuidv4(), knowledge: 6, name: "HTML5", logoName: "devicon-html5-plain", isSelected: false },
        { id: uuidv4(), knowledge: 7, name: "Javascript", logoName: "devicon-javascript-plain", isSelected: false },
        { id: uuidv4(), knowledge: 3, name: "Jest", logoName: "devicon-jest-plain", isSelected: false },
        { id: uuidv4(), knowledge: 2, name: "React Testing Library", urlImg: "testing-library-white.svg", isSelected: false },
        { id: uuidv4(), knowledge: 7, name: "JSON", logoName: "devicon-json-plain", isSelected: false },
        { id: uuidv4(), knowledge: 3, name: "Kubernetes", logoName: "devicon-kubernetes-plain", isSelected: false },
        { id: uuidv4(), knowledge: 2, name: "Materialize", logoName: "devicon-materializecss-plain", isSelected: false },
        { id: uuidv4(), knowledge: 2, name: "Material-UI", logoName: "devicon-materialui-plain", isSelected: false },
        { id: uuidv4(), knowledge: 4, name: "MongoDB", logoName: "devicon-mongodb-plain", isSelected: false },
        { id: uuidv4(), knowledge: 3, name: "Mongoose", logoName: "devicon-mongoose-original", isSelected: false },
        { id: uuidv4(), knowledge: 3, name: "MySQL", logoName: "devicon-mysql-original", isSelected: false },
        { id: uuidv4(), knowledge: 4, name: "NextJS", logoName: "devicon-nextjs-original-wordmark", isSelected: false },
        { id: uuidv4(), knowledge: 7, name: "NodeJS", logoName: "devicon-nodejs-plain", isSelected: false },
        { id: uuidv4(), knowledge: 7, name: "NPM", logoName: "devicon-npm-original-wordmark", isSelected: false },
        { id: uuidv4(), knowledge: 4, name: "PostgreSQL", logoName: "devicon-postgresql-plain", isSelected: false },
        { id: uuidv4(), knowledge: 8, name: "Postman", logoName: "devicon-postman-plain", isSelected: false },
        { id: uuidv4(), knowledge: 5, name: "Prisma", logoName: "devicon-prisma-original", isSelected: false },
        { id: uuidv4(), knowledge: 7, name: "React", logoName: "devicon-react-original", isSelected: false },
        { id: uuidv4(), knowledge: 5, name: "React Native", logoName: "devicon-react-original", isSelected: false },
        { id: uuidv4(), knowledge: 5, name: "React Navigation", logoName: "devicon-reactnavigation-original", isSelected: false },
        { id: uuidv4(), knowledge: 5, name: "Redux", logoName: "devicon-redux-original", isSelected: false },
        { id: uuidv4(), knowledge: 5, name: "Sass", logoName: "devicon-sass-original", isSelected: false },
        { id: uuidv4(), knowledge: 3, name: "Sequelize", logoName: "devicon-sequelize-plain", isSelected: false },
        { id: uuidv4(), knowledge: 5, name: "Swift", logoName: "devicon-swift-plain", isSelected: false },
        { id: uuidv4(), knowledge: 4, name: "Tailwind CSS", logoName: "devicon-tailwindcss-original", isSelected: false },
        { id: uuidv4(), knowledge: 6, name: "TypeScript", logoName: "devicon-typescript-plain", isSelected: false },
        { id: uuidv4(), knowledge: 4, name: "ViteJS", logoName: "devicon-vitejs-plain", isSelected: false },
    ])
    const [searchTxt, setSearchTxt] = useState('');
    const filteredItems = items.filter(item => item.name.toLocaleLowerCase().includes(searchTxt.toLowerCase()))

    const toggleSelectedItem = (id: string) => {
        setItems((prevItems) => prevItems.map((item) => {
            if (item.id === id) {
                item.isSelected = !item.isSelected;
                console.log("Achou!")
                return item
            }
            return item;
        }))
    }

    return (
        <main className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <SearchBar searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
                <OrderBy setItems={setItems} />
            </div>

            <div className="flex gap-6">
                <Sidebar />
                <section className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredItems.length ? (
                        filteredItems.map((item) => (
                            <ItemComponent key={item.id} item={item} toggleSelectedItem={toggleSelectedItem} />
                        ))
                    ) : (
                        <div className="flex flex-col justify-center items-center col-span-full text-center min-h-[300px] text-gray-700">
                            <h3 className="text-lg font-semibold">
                                Nenhum item corresponde à sua busca.
                            </h3>
                            <p>Reveja sua busca ou ajuste os filtros.</p>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}

export default Knowledge
