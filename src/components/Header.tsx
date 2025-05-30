import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <ul>
                <li><Link to={'/portfolio/'}>Conhecimento</Link></li>
                <li><Link to={'/portfolio/certifications'}>Certificações</Link></li>
                <li><Link to={'/portfolio/about'}>Sobre</Link></li>
            </ul>
        </div>
    )
}

export default Header