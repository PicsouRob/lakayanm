import React from 'react';
import Logo from '../components/Logo';
import { socialMediaLinks } from '../helpers/socialMediaLinks';

const Contact: React.FC = () => {
    return (
        <>
            <div className="md:min-h-screen md:max-w-7xl py-8 mx-auto px-6 md:px-8 w-full grid place-items-center">
                <div className="flex flex-col lg:flex-row w-full h-full gap-6 lg:gap-16">
                    <div
                        className="relative h-[600px] lg:h-full lg:w-1/2 grid place-items-end  p-5 md:p-8 bg-gradient-to-b from-transparent to-black"
                    >
                        <img src='/images/island3.jpg' alt="contact" className="absolute inset-0 -z-20 object-cover h-full" />
                        <div className="z-20 items-end justify-end space-y-5 min-h-min">
                            <Logo />
                            <p className='text-[15px] text-white'>Dekouvri meye andwa pou vizite nan pwochen vakans ou nan peyi a pou ou kapab jwenn bon vizyon klè sou sa ki fè peyi sa a espesyal.</p>
                            <div className="flex items-center gap-5">
                                {socialMediaLinks.map((data, ind) => (
                                    <a
                                        href={data.link} target='_blanc'
                                        className={`p-1.5 bg-white transition-all duration-200 rounded-sm hover:bg-[#${data.color}]`} key={ind}>
                                        <img src={data.svg} alt={data.svg} className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="md:h-full flex items-center md:justify-center min-h-min">
                        <form className="flex flex-col items-center gap-y-8">
                            <div className="">
                                <h1 className="text-2xl md:text-3xl font-bold pb-3">Pran kontak ak nou</h1>
                                <span className="">N ap reponn ak kesyon ou yo ak pwoblèm ou yo nan mwens pase 24 èdtan.</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-x-5 gap-y-8 w-full">
                                <div className="flex items-center w-full border px-3 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <input className='w-full flex-1 border-none focus:ring-0' type="text" name="firstName" id="" placeholder='Non' />
                                </div>
                                <div className="flex items-center w-full border px-3 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <input className='w-full flex-1 border-none focus:ring-0' type="text" name="lastName" id="" placeholder='Prenon' />
                                </div>
                            </div>
                            <div className="flex items-center w-full border px-3 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <input className='w-full flex-1 border-none focus:ring-0' type='email' name="email" id="" placeholder='Imel' />
                            </div>
                            <div className="flex items-center w-full border px-3 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <input className='w-full flex-1 border-none focus:ring-0' type="tel" name="phone" id="" placeholder='Telefon' />
                            </div>
                            <textarea className='px-4 pt-2 marker:placeholder:text-gray-600 placeholder:text-[17px] w-full focus:outline-none border border-gray-200 focus:ring-0 text-[15px] my-2 resize-y h-60' placeholder='Mesaj...' name="message" id="" />
                            <button className="py-3 shadow-md rounded-md font-semibold w-full text-[14px] bg-principal hover:opacity-90 text-white">Ranvwaye</button>
                        </form>
                    </div>
                </div> 
            </div>
        </>
    );
}

export default Contact;
