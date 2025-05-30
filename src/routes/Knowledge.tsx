import { v4 as uuidv4 } from 'uuid';
import styles from './Knowledge.module.scss'
import type { Item } from '../utils/types';
import ItemComponent from '../components/ItemComponent';
import SearchBar from '../components/SearchBar';
import OrderBy from '../components/OrderBy';
import Sidebar from '../components/Sidebar';


const Knowledge = () => {
    const items: Item[] = [
        { id: uuidv4(), knowledge: 6, name: "Amazon Web Services", logoName: "devicon-amazonwebservices-plain-wordmark" },
        { id: uuidv4(), knowledge: 6, name: "Axios", logoName: "devicon-axios-plain" },
        { id: uuidv4(), knowledge: 6, name: "Babel", logoName: "devicon-babel-plain" },
        { id: uuidv4(), knowledge: 6, name: "Bitbucket", logoName: "devicon-bitbucket-original" },
        { id: uuidv4(), knowledge: 6, name: "Bootstrap", logoName: "devicon-bootstrap-plain" },
        { id: uuidv4(), knowledge: 6, name: "CSS3", logoName: "devicon-css3-plain" },
        { id: uuidv4(), knowledge: 6, name: "Docker", logoName: "devicon-docker-plain" },
        { id: uuidv4(), knowledge: 6, name: "Eslint", logoName: "devicon-eslint-plain" },
        { id: uuidv4(), knowledge: 6, name: "Express", logoName: "devicon-express-original" },
        { id: uuidv4(), knowledge: 6, name: "Firebase", logoName: "devicon-firebase-plain" },
        { id: uuidv4(), knowledge: 6, name: "Git", logoName: "devicon-git-plain" },
        { id: uuidv4(), knowledge: 6, name: "Github", logoName: "devicon-github-original" },
        { id: uuidv4(), knowledge: 6, name: "GraphQL", logoName: "devicon-graphql-plain" },
        { id: uuidv4(), knowledge: 6, name: "HTML5", logoName: "devicon-html5-plain" },
        { id: uuidv4(), knowledge: 6, name: "Javascript", logoName: "devicon-javascript-plain" },
        { id: uuidv4(), knowledge: 6, name: "Jest", logoName: "devicon-jest-plain" },
        { id: uuidv4(), knowledge: 6, name: "React Testing Library", urlImg: "testing-library-e7d4d4.svg" },
        { id: uuidv4(), knowledge: 6, name: "JSON", logoName: "devicon-json-plain" },
        { id: uuidv4(), knowledge: 6, name: "Kubernetes", logoName: "devicon-kubernetes-plain" },
        { id: uuidv4(), knowledge: 6, name: "Materialize", logoName: "devicon-materializecss-plain" },
        { id: uuidv4(), knowledge: 6, name: "Material-UI", logoName: "devicon-materialui-plain" },
        { id: uuidv4(), knowledge: 6, name: "MongoDB", logoName: "devicon-mongodb-plain" },
        { id: uuidv4(), knowledge: 6, name: "Mongoose", logoName: "devicon-mongoose-original" },
        { id: uuidv4(), knowledge: 6, name: "MySQL", logoName: "devicon-mysql-original" },
        { id: uuidv4(), knowledge: 6, name: "NextJS", logoName: "devicon-nextjs-original-wordmark" },
        { id: uuidv4(), knowledge: 6, name: "NodeJS", logoName: "devicon-nodejs-plain" },
        { id: uuidv4(), knowledge: 6, name: "NPM", logoName: "devicon-npm-original-wordmark" },
        { id: uuidv4(), knowledge: 6, name: "PostgreSQL", logoName: "devicon-postgresql-plain" },
        { id: uuidv4(), knowledge: 6, name: "Postman", logoName: "devicon-postman-plain" },
        { id: uuidv4(), knowledge: 6, name: "Prisma", logoName: "devicon-prisma-original" },
        { id: uuidv4(), knowledge: 6, name: "React", logoName: "devicon-react-original" },
        { id: uuidv4(), knowledge: 6, name: "React Native", logoName: "devicon-react-original" },
        { id: uuidv4(), knowledge: 6, name: "React Navigation", logoName: "devicon-reactnavigation-original" },
        { id: uuidv4(), knowledge: 6, name: "Redux", logoName: "devicon-redux-original" },
        { id: uuidv4(), knowledge: 6, name: "Sass", logoName: "devicon-sass-original" },
        { id: uuidv4(), knowledge: 6, name: "Sequelize", logoName: "devicon-sequelize-plain" },
        { id: uuidv4(), knowledge: 6, name: "Swift", logoName: "devicon-swift-plain" },
        { id: uuidv4(), knowledge: 6, name: "Tailwind CSS", logoName: "devicon-tailwindcss-original" },
        { id: uuidv4(), knowledge: 6, name: "TypeScript", logoName: "devicon-typescript-plain" },
        { id: uuidv4(), knowledge: 6, name: "ViteJS", logoName: "devicon-vitejs-plain" },
    ]
    return (
        <div className={styles.container}>
            <div className={styles.topFilters}>
                <SearchBar />
                <OrderBy />
            </div>
            <div className={styles.mainContent}>
                <Sidebar />
                <div className={styles.itemsContainer}>
                    {items.map((item) => (
                        <ItemComponent key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Knowledge
