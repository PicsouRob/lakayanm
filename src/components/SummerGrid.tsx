import React from 'react';

import HeaderContent from './HeaderContent';
import { summerData } from '../helpers/summerData';

const SummerGrid: React.FC = () => {
    return (
        <>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <section className="py-10">
                        <HeaderContent title="Aktivite pandan ete" subTitle="Vakans" text="Èske w ap planifye vakans ou an Ayiti? Jwenn enspire ak atraksyon sa yo ak avantur vo ajoute nan chimen ou." link="/explore" />
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-end">
                            {summerData.map((data, index) => (
                                <div key={index} className="relative rounded-lg h-[300px] overflow-hidden cursor-pointer group">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-30"></div>
                                    <img src={data.image} alt={data.city} className="rounded-lg h-full -z-20 object-cover w-full group-hover:scale-110 transition-all group-hover:-z-20 duration-300" />
                                    <div className="absolute inset-0 z-40 flex items-end justify-end min-h-min p-5 text-white">
                                        <div className="space-y-4">
                                            <div className="flex gap-3 items-center divide-x text-[14px]">
                                                <p className="">{data.name}</p>
                                                <span className="pl-3">{data.city}</span>
                                            </div>
                                            <p className="font-semibold text-[13px]">{data.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default SummerGrid;