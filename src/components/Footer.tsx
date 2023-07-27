import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import { contactData, footerData, socialMediaData } from '../helpers/footerData';

const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex justify-center text-teal-600 sm:justify-start">
                                <Logo />
                            </div>

                            <p
                                className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left"
                            >
                                Dekouvri meye andwa pou vizite nan pwochen vakans ou nan peyi a pou ou kapab jwenn bon vizyon klè sou sa ki fè peyi sa a espesyal.
                            </p>

                            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                                {socialMediaData.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href="/"
                                            rel="noreferrer"
                                            target="_blank"
                                            className="text-teal-700 transition hover:text-teal-700/75"
                                        >
                                            <span className="sr-only">Facebook</span>
                                            <img src={item.svgContent} alt={item.text} className="h-5 w-5 text-red-500 hover:text-secundary hover:opacity-90" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div
                            className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2"
                        >
                            {footerData.map((item, ind) => (
                                <div key={ind} className="text-center sm:text-left">
                                    <p className="text-lg font-medium text-gray-900">{item.title}</p>

                                    <ul className="mt-8 space-y-4 text-sm">
                                        {item.links.map((val, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={val.link}
                                                    className="text-gray-700 transition hover:text-gray-700/75"
                                                >
                                                    {val.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-gray-900">Contact Us</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    {contactData.map((data, ind) => (
                                        <li key={ind}>
                                            <a
                                                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                                href="/"
                                            >
                                                <img src={data.svgContent} alt={data.text} className="h-5 w-5 shrink-0 text-gray-900" />
                                                <span className="flex-1 text-gray-700">{data.text}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-100 pt-6">
                        <div className="text-center sm:flex sm:justify-between sm:text-left">
                            <p className="text-sm text-gray-500">
                                <span className="block sm:inline">All rights reserved.</span>
                                <a
                                    className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                                    href="/"
                                >
                                    Terms & Conditions
                                </a>
                                <span>&middot;</span>
                                <a
                                    className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                                    href="/"
                                >
                                    Privacy Policy
                                </a>
                            </p>
                            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                                &copy; 2023 Lakayanm
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;