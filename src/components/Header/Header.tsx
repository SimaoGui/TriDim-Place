import { Box, HomeIcon, Search, ShirtIcon, ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react';

const Header = () => {
    // State to control the desktop 'Coleções' dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // State to control the mobile navigation overlay visibility
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    // Function to toggle the desktop 'Coleções' dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Function to toggle the mobile navigation overlay
    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <>
            {/* Main Header Container */}
            {/* Uses a 2-column grid for mobile (logo | icons + menu button) and a 3-column grid for large screens (logo | nav | icons) */}
            {/* The grid layout is responsive: 1fr 2fr 2fr on smaller screens, and 1fr 1fr 1fr on large screens (lg) */}
            <div className="h-1/12 w-full bg-base-200 !px-6 !py-2 shadow-md grid grid-cols-2 sm:grid-cols-[1fr_2fr_2fr] xl:grid-cols-3 items-center">
                {/* Navbar Start - Logo and Brand Name */}
                <div className="flex items-center justify-start gap-2 cursor-pointer hover:text-primary transition-all ease-in-out duration-300">
                    <Box className="w-8 h-8"/>
                    <a className="text-2xl">TriDim</a>
                </div>

                {/* Navbar Center - Desktop Navigation Links */}
                {/* This section is hidden on screens smaller than 'lg' and displayed as flex on 'lg' and above */}
                <div className="hidden sm:flex items-center justify-center">
                    <ul className="flex flex-row items-center gap-4 text-lg">
                        {/* Produtos Link - No dropdown */}
                        <li className="relative group">
                            <a className="cursor-pointer !px-4 !py-2 transition-all duration-300 ease-in-out rounded-lg
                                    flex items-center gap-1
                                    text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900
                                    group-hover:text-neutral-900
                                    dark:!text-neutral-600 dark:hover:!bg-neutral-100 dark:hover:!text-neutral-900 dark:hover:shadow-md">
                                Produtos
                            </a>
                        </li>

                        {/* Coleções Link with Dropdown for Desktop */}
                        <li className="relative group">
                            <a className="cursor-pointer !px-4 !py-2 transition-all duration-300 ease-in-out rounded-lg
                                    flex items-center gap-1
                                    text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900
                                    group-hover:text-neutral-900
                                    dark:!text-neutral-600 dark:hover:!bg-neutral-100 dark:hover:!text-neutral-900 dark:hover:shadow-md"
                                onClick={toggleDropdown}> {/* Toggles the desktop dropdown */}
                                Coleções
                                <svg className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>

                            {/* Dropdown content for desktop - only visible if isDropdownOpen is true */}
                            {isDropdownOpen && (
                                <ul className="absolute z-10 !mt-1 !p-2 !bg-neutral-100 !rounded-lg shadow-xl w-48 space-y-2
                                    transition-all duration-300 origin-top
                                    opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                                    dark:!text-neutral-600 dark:hover:!text-neutral-900"
                                    onMouseLeave={() => setIsDropdownOpen(false)}> {/* Closes dropdown when mouse leaves */}
                                    <li>
                                        <a className="w-full block rounded-lg !px-4 !py-2 transition-colors
                                                text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900
                                                dark:!text-neutral-600 dark:hover:!bg-white dark:hover:!text-neutral-900 dark:!shadow-xs dark:hover:!shadow-md">
                                            <div className="cursor-pointer flex items-center gap-2">
                                                <HomeIcon className="w-4 h-4" />
                                                Casa
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="w-full block rounded-lg !px-4 !py-2 transition-colors
                                                text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900
                                                dark:!text-neutral-600 dark:hover:!bg-white dark:hover:!text-neutral-900 dark:!shadow-xs dark:hover:!shadow-md">
                                            <div className="cursor-pointer flex items-center gap-2">
                                                <ShirtIcon className="w-4 h-4" />
                                                Roupas
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Compras Link - No dropdown */}
                        <li className="relative group">
                            <a className="cursor-pointer !px-4 !py-2 transition-all duration-300 ease-in-out rounded-lg
                                    flex items-center gap-1
                                    text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900
                                    group-hover:text-neutral-900
                                    dark:!text-neutral-600 dark:hover:!bg-neutral-100 dark:hover:!text-neutral-900 dark:hover:shadow-md">
                                Compras
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Navbar End - Search, Cart, Avatar, Mobile Menu Button */}
                <div className="flex items-center justify-end gap-4">
                    {/* Search Input - Hidden on screens smaller than 'sm', shown on 'sm' and above */}
                    <div className='hidden sm:flex'>
                        <label className="input !outline-none focus-within:!border-primary !p-2 gap-2">
                            <Search />
                            <input type="search" required placeholder="Search" />
                        </label>
                    </div>

                    {/* Shopping Cart */}
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

                    {/* User Avatar */}
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar transition-all duration-200 hover:scale-105">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img
                                alt="Avatar do usuário"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>

                    {/* Mobile Menu Button (Hamburger Icon) - Visible only on screens smaller than 'lg' */}
                    <button
                        className="!btn !btn-ghost !btn-circle sm:!hidden"
                        onClick={toggleMobileNav} // Toggles the mobile navigation overlay
                        aria-label="Abrir menu mobile"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {/* This div is always rendered, but its visibility, height, and position are controlled by dynamic classes.
                It slides down from the top and fades in using `translate-y` and `opacity` with a transition. */}
            <div className={`fixed top-0 left-0 w-full h-2/5 bg-base-200 z-50 flex flex-col items-center justify-center lg:hidden
                transition-transform duration-500 ease-in-out
                ${isMobileNavOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible pointer-events-none'}`}>
                {/* Close button for the mobile menu */}
                <button
                    className="absolute top-4 right-4 btn btn-ghost btn-circle"
                    onClick={toggleMobileNav} // Closes the mobile navigation overlay
                    aria-label="Fechar menu mobile"
                >
                    <X className="w-6 h-6" />
                </button>
                {/* Mobile Navigation Links */}
                <ul className="flex flex-col items-center gap-4 text-2xl w-full">
                    <li className="relative w-4/5 text-center">
                        <a className="block !px-4 !py-3 transition-colors duration-300 ease-in-out rounded-xl
                                !text-neutral-600 !bg-neutral-100 hover:!text-neutral-900"
                            onClick={toggleMobileNav}> {/* Closes on item click */}
                            Produtos
                        </a>
                    </li>
                    <li className="relative w-4/5 text-center">
                        <a className="block !px-4 !py-3 transition-colors duration-300 ease-in-out rounded-xl
                                !text-neutral-600 !bg-neutral-100 hover:!text-neutral-900"
                            onClick={toggleMobileNav}> {/* Closes on item click */}
                            Coleções
                        </a>
                    </li>
                    <li className="relative w-4/5 text-center">
                        <a className="block !px-4 !py-3 transition-colors duration-300 ease-in-out rounded-xl
                                !text-neutral-600 !bg-neutral-100 hover:!text-neutral-900"
                            onClick={toggleMobileNav}> {/* Closes on item click */}
                            Compras
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;
