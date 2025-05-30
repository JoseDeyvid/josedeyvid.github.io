import { v4 as uuidv4 } from 'uuid';
import styles from './Knowledge.module.scss'
import type { Item } from '../utils/types';
import ItemComponent from '../components/ItemComponent';
import SearchBar from '../components/SearchBar';
import OrderBy from '../components/OrderBy';
import Sidebar from '../components/Sidebar';


const Knowledge = () => {
    const items: Item[] = [
        { id: uuidv4(), knowledge: 7, name: "testName", logoName: "devicon-nodejs-plain-wordmark" },
        { id: uuidv4(), knowledge: 4, name: "testName2", logoName: "devicon-nodejs-plain-wordmark" },
        { id: uuidv4(), knowledge: 5, name: "testName3", logoName: "devicon-nodejs-plain-wordmark" },
        { id: uuidv4(), knowledge: 0, name: "testName4", logoName: "devicon-nodejs-plain-wordmark" },
        { id: uuidv4(), knowledge: 2, name: "testName5", logoName: "devicon-nodejs-plain-wordmark" },
        { id: uuidv4(), knowledge: 7, name: "testName6", logoName: "devicon-nodejs-plain-wordmark" },
        { id: uuidv4(), knowledge: 9, name: "testName7", logoName: "devicon-nodejs-plain-wordmark" },
        { id: uuidv4(), knowledge: 8, name: "testName8", logoName: "devicon-nodejs-plain-wordmark" },
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
