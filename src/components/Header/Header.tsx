import { Box, HomeIcon, Search, ShirtIcon, ShoppingCart } from 'lucide-react'
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar h-1/12 w-full bg-base-200 !px-6 !py-2 shadow-md">
            <div className="navbar-start gap-2  cursor-pointer hover:text-primary transition-all ease-in-out duration-300">
                <Box className="w-8 h-8"/>
                <a className="text-2xl">TriDim</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex flex-row items-center gap-4 text-lg">
                    <li className="relative group">
                        <a className="cursor-pointer !px-4 !py-2 transition-all duration-300 ease-in-out rounded-lg 
                flex items-center gap-1
                text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900
                group-hover:text-neutral-900
                dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white">
                            Produtos
                        </a>
                    </li>

                    <li className="relative group">
                        <a className="cursor-pointer !px-4 !py-2 transition-all duration-300 ease-in-out rounded-lg 
                flex items-center gap-1
                text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900
                group-hover:text-neutral-900
                dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white"
                            onClick={toggleMenu}>
                            Coleções
                            <svg className={`w-4 h-4 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>

                        {isMenuOpen && (
                            <ul className="absolute z-10 mt-2 !p-2 bg-white rounded-lg shadow-xl w-48 space-y-2
                  transition-all duration-300 origin-top
                  opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                  dark:bg-neutral-800 dark:shadow-2xl"
                                onMouseLeave={() => setIsMenuOpen(false)}>
                                <li>
                                    <a className="w-full block rounded-lg !px-4 !py-2 transition-colors
                      text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900
                      dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white">
                                        <div className="cursor-pointer flex items-center gap-2">
                                            <HomeIcon className="w-4 h-4" />
                                            Casa
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="w-full block rounded-lg !px-4 !py-2 transition-colors
                      text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900
                      dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white">
                                        <div className="cursor-pointer flex items-center gap-2">
                                            <ShirtIcon className="w-4 h-4" />
                                            Roupas
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="relative group">
                        <a className="cursor-pointer !px-4 !py-2 transition-all duration-300 ease-in-out rounded-lg 
                text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900
                group-hover:text-neutral-900
                dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white">
                            Compras
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <div>
                    <label className="input !outline-none focus-within:!border-primary !p-2 gap-2">
                        <Search />
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>

                <div className="tooltip tooltip-bottom" data-tip="Ver carrinho">
                    <button className="btn btn-ghost btn-circle relative transition-colors duration-200 hover:bg-neutral-200">
                        <div className="indicator">
                            <ShoppingCart />
                            <span className="badge badge-sm badge-error rounded-4xl !p-1 text-white absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                                8
                            </span>
                        </div>
                    </button>
                </div>

                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar transition-all duration-200 hover:scale-105">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                            alt="Avatar do usuário"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header