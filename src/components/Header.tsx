// import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

// const Header = () => {
//     return (
//         // <div className={styles.headerContainer}>
//         <div className=' flex justify-end p-3'>
//             <ul className='flex flex-row gap-3 justify-center items-center'>
//                 <li><Link to={'/portfolio/'}>Conhecimento</Link></li>
//                 <li><Link to={'/portfolio/certifications'}>Certificações</Link></li>
//                 <li><Link to={'/portfolio/about'}>Sobre</Link></li>
//             </ul>
//         </div>
//     )
// }

const Header = () => {
    return (
        <header className="bg-white shadow-2xl">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                <h1 className="text-xl font-bold text-gray-800">Meu Portfólio</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li className='text-gray-600 transform hover:scale-105 hover:text-blue-600 transition-all duration-500 ease-in-out cursor-pointer will-change-transform'>
                            <Link
                                to="/portfolio"
                            >
                                Conhecimento
                            </Link>
                        </li>
                        <li className='text-gray-600 transform hover:scale-105 hover:text-blue-600 transition-all duration-500 ease-in-out cursor-pointer will-change-transform'>
                            <Link
                                to="/portfolio/certifications"
                            >
                                Certificações
                            </Link>
                        </li>
                        <li className='text-gray-600 transform hover:scale-105 hover:text-blue-600 transition-all duration-500 cursor-pointer will-change-transform'>
                            <Link
                                to="/portfolio/about"
                            >
                                Sobre
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header