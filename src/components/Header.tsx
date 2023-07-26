import React, { useState } from 'react';
import Logo from './Logo';
import { headerLinks } from '../helpers/headerLinks';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    return (
        <>
            <header className="relative mx-auto max-w-5xl lg:max-w-7xl px-6 md:px-8 py-3 overflow-hidden z-40">
                <nav className="z-20">
                    <div className="flex items-center justify-between">
                        <Logo />
                        <div className="hidden md:flex items-center gap-8">
                            {headerLinks.map((data, ind) => (
                                <NavLink key={ind} to={data.link} className="hover:cursor-pointer border-b border-white hover:text-secundary hover:opacity-80 transition-all duration-300 hover:border-b hover:border-principal">{data.title}</NavLink>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to='/contact' className="border border-white text-secundary bg-secundary/10 rounded-md px-6 py-1 md:py-1.5 hover:opacity-80 hover:border-secundary transition-all duration-300 outline-none">Kontak</Link>
                            <div className="md:hidden cursor-pointer"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {!isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
                {isOpen && (
                    <div className={`absolute inset-0 bg-white w-full h-[400px] md:hidden -z-10 duration-300 transition ease-in-out shadow-md ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                        <div className="mt-20 grid divide-y divide-secundary/10">
                            {headerLinks.map((data, ind) => (
                                <Link
                                    key={ind}
                                    to={data.link}
                                    className="border-white py-3 transition-all duration-300 hover:bg-secundary/10 text-center cursor-pointer hover:text-secundary"
                                >
                                    {data.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}

export default Header;
