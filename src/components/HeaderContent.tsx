import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    title: string,
    subTitle: string,
    text: string,
    link: string,
}

const HeaderContent: React.FC<HeaderProps> = (
    { title, subTitle, text, link
}) => {
    return (
        <>
            <div className="flex items-center md:justify-between flex-wrap space-y-6 mb-[60px] md:">
                <div className="">
                    <div className="mx-auto max-w-[510px]">
                        <span className="block mb-2 text-lg font-semibold text-primary text-principal">
                            {subTitle}
                        </span>
                        <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                            {title}
                        </h2>
                        <p className="text-base text-body-color">
                            {text}
                        </p>
                    </div>
                </div>
                <div className="">
                    <Link to={link} className="text-secundary bg-secundary/10 px-4 py-2 shadow-sm hover:bg-secundary hover:text-white rounded-sm">Dekouvri plis</Link>
                </div>
            </div>
        </>
    );
}

export default HeaderContent;