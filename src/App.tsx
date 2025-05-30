import { v4 as uuidv4 } from 'uuid';
import './App.css'
import type { Item } from './utils/types'
import ItemComponent from './components/ItemComponent';

function App() {
  const items: Item[] = [
    { id: uuidv4(), knowledge: 7, name: "testName", urlImg: "https://logospng.org/wp-content/uploads/node-js.png", description: "Any description about framework" },
    { id: uuidv4(), knowledge: 4, name: "testName2", urlImg: "https://logospng.org/wp-content/uploads/node-js.png", description: "Any description about framework" },
    { id: uuidv4(), knowledge: 5, name: "testName3", urlImg: "https://logospng.org/wp-content/uploads/node-js.png", description: "Any description about framework" },
    { id: uuidv4(), knowledge: 0, name: "testName4", urlImg: "https://logospng.org/wp-content/uploads/node-js.png", description: "Any description about framework" },
    { id: uuidv4(), knowledge: 2, name: "testName5", urlImg: "https://logospng.org/wp-content/uploads/node-js.png", description: "Any description about framework" },
    { id: uuidv4(), knowledge: 7, name: "testName6", urlImg: "https://logospng.org/wp-content/uploads/node-js.png", description: "Any description about framework" },
    { id: uuidv4(), knowledge: 9, name: "testName7", urlImg: "https://logospng.org/wp-content/uploads/node-js.png", description: "Any description about framework" },
    { id: uuidv4(), knowledge: 8, name: "testName8", urlImg: "https://logospng.org/wp-content/uploads/node-js.png", description: "Any description about framework" },
  ]
  return (
    <ItemComponent item={items[2]} />
  )
}

export default App
