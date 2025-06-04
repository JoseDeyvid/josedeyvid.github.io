// import styles from './SearchBar.module.scss';
import { useState } from 'react';

type Props = {
    searchTxt: string,
    setSearchTxt: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({ searchTxt, setSearchTxt }: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div
            className={`flex items-center gap-2 px-4 py-2 border transition-all duration-600 ease-in-out  ${isFocused ? "border-2 border-blue-700 shadow-2xl w-[400px]" : "border-2    border-gray-100 w-[200px]"
                } rounded-lg transition`}
        >
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
                className="text-gray-500"
            >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
                type="text"
                placeholder={isFocused ? "Buscar..." : "Digite aqui..."}
                className="outline-none w-full bg-transparent"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={searchTxt}
                onChange={(e) => setSearchTxt(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;