import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <>
            <div className="bg-principa text-black">
                <div className="mx-auto max-w-5xl lg:max-w-7xl px-6 md:px-8 py-8 space-y-7 divide-y divide-secundary">
                    <div className="grid md:grid-cols-6 gap-x-10 gap-y-4">
                        <div className="space-y-3 md:col-span-2">
                            <Logo />
                            <p className='text-base'>Dekouvri meye andwa pou vizite nan pwochen vakans ou nan peyi a pou ou kapab jwenn bon vizyon klè sou sa ki fè peyi sa a espesyal.</p>
                        </div>
                        <div className="flex flex-wrap md:items-center md:justify-end gap-x-24 gap-y-6 md:col-span-4">
                            <FooterLink title='Apwopo' links={['Apwopo', 'Kontak', 'Ed']} />
                            <FooterLink title='Pwodwi' links={['Destiansyon', 'Blog', 'Eksplore']} />
                            <FooterLink title='Rozo sosyo' links={['Faceboook', 'Twitter', 'Instagram']} />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between pt-5 md:pt-2 space-y-4 text-[14px]">
                        <Link
                            to="/privacy" className="hover:underline">Politik konfidansyalite
                        </Link>
                        <p className="">Copyright © 2023 Lakayanm</p>
                    </div>
                </div>
            </div>
        </>
    );
}

interface FooterProps {
    title: string,
    links: string[],
}

const FooterLink: React.FC<FooterProps> = (props) => {
    const { title, links } = props;
    
    return (
        <div className="flex flex-col space-y-3">
            <span className="font-bold text-secundary">{title}</span>
            {links.map((item, ind) => (
                <a key={ind} href={item} className="hover:underline">{item}</a>
            ))}
        </div>  
    );
}

export default Footer;