import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/" className='flex items-center divide-x divide-secundary space-x-3 cursor-pointer'>
            <img src="/images/logo-lakayanm.png" alt="" className="w-8 h-8" />
            <h1 className="text-xl md:text-2xl font-bold pl-2 text-principal">LakaYanm</h1>
        </Link>
    );
}

export default Logo;