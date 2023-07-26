import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import Newsletter from '../components/Newsletter';
import Content from '../components/Content';
import Faq from '../components/Faq';
import Offer from '../components/Offer';
import BlogCity from '../components/BlogCity';
import SummerGrid from '../components/SummerGrid';
import gif from '../home.gif';
import Testimonial from '../components/Testimonial';
import Team from '../components/Team';

const Home: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [newBackground, setNewBackground] = useState<number>(0);
    const [isplaying, setIsplaying] = useState<boolean>(false);
    const imagesBackground: string[] = [
        '/images/Bassin-Bleu..jpg',
        '/images/beach1.jpg',
        '/images/island3.jpg',
        '/images/citadel1.png',
        '/images/haiti1.jpg',
        '/images/labadee2.jpg',
        '/images/labadee1.jpg',
        '/images/labadee1.png',
        '/images/island1.jpg',
        '/images/island2.jpg',
    ];
    
    useEffect(() => {
        const getId = setInterval(() => {
            setNewBackground(newId => {
                 if(newId < (imagesBackground.length - 1)) {
                     return newId + 1;
                 } else {
                     return 0;
                 }
            });
        }, 10000);
        
        return () => {
            clearInterval(getId);
        };
    }, [imagesBackground.length]);
    
    const playDemoVideo = () => {
        if(targetRef.current && targetRef.current.classList.contains("video")) {
            setIsplaying(false);
        }
    }
    
    return (
        <div className="">
            <div
                className="relative md:h-[700px] text-white h-full w-full flex"
            >
                <div className="absolute w-full h-full -z-30">
                    <img src={`/images/island3.jpg`}
                        alt="bg" className="object-cover w-full h-full -z-20"
                    />
                    {/* <img src={`${gif}`}
                        alt="bg" className="object-cover w-full h-full -z-20"
                    /> */}
                    <div className="absolute inset-0"
                        style={{
                            background: `linear-gradient(rgba(0, 0, 0, 60%), rgba(0, 0, 0, 0.7))`,
                        }}
                    ></div>
                </div>
                {isplaying && (
                    <div
                        ref={targetRef}
                        style={{
                            background: `linear-gradient(rgba(0, 0, 0, 60%), rgba(0, 0, 0, 0.7))`,
                        }}
                        className="video absolute inset-0 flex items-center justify-center z-40"
                        onClick={() => playDemoVideo()}
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            className="relative flex flex-col p-4 space-y-6"
                        >
                            <div className="hover:cursor-pointer"
                                onClick={() => setIsplaying(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 float-right">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <video className="rounded-lg shadow-md" controls autoPlay src="/video/demo.MP4">Your browser does not support the video tag.</video>
                        </motion.div>
                    </div>
                )}
                <div className="mx-auto max-w-5xl lg:max-w-7xl px-6 md:px-8 py-5 min-h-full -z-20">
                    <div className="flex items-center justify-center h-full py-16 md:py-0">
                        <div className="text-center space-y-8 px-0 md:px-10 lg:px-32">
                            <h1 className="md:text-4xl text-3xl lg:text-4xl xl:text-5xl font-bold">Dekouvri meye andwa pou vizite nan pwochen vakans ou nan peyi a</h1>
                            <p className="">Nou vize pwojte sit sa a pou pote konesans ak enfòmasyon sou kilti, istwa, atraksyon, ak resous natirèl nan peyi a, pou w ka jwenn yon vizyon klè sou sa ki fè peyi sa a espesyal epi chwazi pwochen destinasyon pou vizite a.</p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
                                <Link to="/explore"
                                    className="rounded-md px-6 py-3 shadow-md transition-all duration-300 border hover:bg-principal hover:border-principal">
                                    Eksplore
                                </Link>
                                <button
                                    className="flex gap-4 items-center rounded-md border shadow-md px-6 py-3 transition-all duration-300 group hover:bg-secundary hover:border-secundary"
                                    onClick={() => setIsplaying(true)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white group-hover:text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    <p className="">We yon video</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Offer />
            <BlogCity />
            <Content />
            <SummerGrid />
            <Testimonial />
            <Team />
            <Newsletter />
        </div>
    );
}

export default Home;