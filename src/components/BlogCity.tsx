import React from "react";
import { Link } from "react-router-dom";

import HeaderContent from './HeaderContent';
import { blogData } from '../helpers/blogData';

const BlogCity: React.FC = () => {
    return (
        <>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <section className="py-10">
                        <div className="container">
                            <HeaderContent
                                title="Vil an Ayiti" subTitle="Destinasyon" text="Gen plizyè kote enteresan pou yon touris ta vizite an Ayiti, men isit kèk nan vil yo ke mwen rekòmande."
                                link="/destinasyon"
                            />
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                                {blogData.map((data, ind) => (
                                    <BlogCard
                                        key={ind}
                                        cardTitle={data.cardTitle}
                                        cardDescription={data.cardDescription}
                                        image={data.image}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default BlogCity;

type Props = {
    cardTitle: string,
    cardDescription: string,
    image: string,
}

const BlogCard: React.FC<Props> = (
    { cardTitle, cardDescription, image }
) => {
    
    const subStringTtext = (text: string): string => {
        let textSubstr: string = text;
        
        if(textSubstr.length > 50) {
            textSubstr = textSubstr.substring(0, 60) + "...";
        }
        
        return textSubstr;
    }
    
    return (
        <>
            <div className="w-full">
                <div className="md:mx-auto mb-10 max-w-[370px]">
                    <div className="mb-5 overflow-hidden rounded">
                        <img src={image} alt="" className="w-full h-44" />
                    </div>
                    <div>
                        <h3>
                            <h1
                                className="inline-block mb-3 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl"
                            >
                                {cardTitle}
                            </h1>
                        </h3>
                        <p className="text-[14px] text-body-color mb-4 text-ellipsis">{subStringTtext(cardDescription)}</p>
                        <Link to="/explore" className="text-secundary font-semibold text-[13px] hover:underline flex items-center gap-3">
                            Plis detay
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};