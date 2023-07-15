import React from 'react';
import Logo from './Logo';
import { headerLinks } from '../helpers/headerLinks';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <>
            <header className="mx-auto max-w-5xl lg:max-w-7xl px-6 md:px-8 py-3">
                <nav className="flex items-center justify-between">
                    <Logo />
                    <div className="hidden md:flex items-center gap-8">
                        {headerLinks.map((data, ind) => (
                            <NavLink to={data.link} className="hover:cursor-pointer border-b border-white hover:text-secundary hover:opacity-80 transition-all duration-300 hover:border-b hover:border-principal">{ data.title }</NavLink>
                        ))}
                    </div>
                    <Link to='/contact' className="border border-white text-secundary bg-secundary/10 rounded-md px-6 py-1 md:py-1.5 hover:opacity-80 hover:border-secundary transition-all duration-300 outline-none">Kontak</Link>
                </nav>
            </header>
        </>
    );
}

export default Header;
