import styles from './SearchBar.module.scss';
import { useState } from 'react';

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className={`${styles.inputWrapper} ${isFocused ? styles.focused : ''}`}>
            <div className={styles.icon}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    width="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </div>
            <input
                type="text"
                placeholder={isFocused ? "Buscar..." : "..."}
                className={styles.input}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    );
}

export default SearchBar;