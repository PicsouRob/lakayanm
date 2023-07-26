import React from 'react';

import { servicesData } from "../helpers/servicesData";

const Offer: React.FC = () => {
    
    
    return (
        <>
            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-center text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">Kisa nou ofri?</h2>
                        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Nou ofri enfòmasyon detaye sou destinasyon yo avek deskripsyon, foto/videyo, konsèy pou vwayajè ak itineraire rekòmande.</p>
                    </div>
                    <div className="relative mt-12 lg:mt-20">
                        <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                        </div>
                        <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                            {servicesData.map((item, ind) => (
                                <div key={ind}>
                                    <div className="flex items-center justify-center w-10 md:w-16 h-10 md:h-16 mx-auto bg-white border-2 border-secundary rounded-full shadow-ms">
                                        <span className="text-xl font-semibold text-gray-700"> {item.id} </span>
                                    </div>
                                    <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">{item.title}</h3>
                                    <p className="mt-4 text-base text-gray-600">{ item.text }</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Offer;
