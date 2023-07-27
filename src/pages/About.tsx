import React from 'react';

import Newsletter from '../components/Newsletter';
import Offer from '../components/Offer';
import gif from '../home.gif';
import Testimonial from '../components/Testimonial';
import AboutFeatures from '../components/AboutFeatures';
import Team from '../components/Team';

const About: React.FC = () => {
    return (
        <>
            <div className="relative w-full bg-center bg-cover h-[16rem] lg:h-[24rem]"
                style={{
                    backgroundImage: 'url(/images/island3.jpg)'
                }}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900/40 z-30">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-white lg:text-4xl">Welcome to Haiti</h1>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
                <div className="">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 lg:text-4xl text-center">About Us</h1>
                    <p className="mt-6 max-w-4xl mx-auto">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                        obcaecati illum mollitia.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptas molestiae fugiat ipsam ut dicta illum eligendi error, deserunt totam voluptatibus optio quasi aspernatur explicabo vitae? Voluptatum voluptates architecto quis. <br/><br/>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                        obcaecati illum mollitia.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptas molestiae fugiat ipsam ut dicta illum eligendi error, deserunt totam voluptatibus optio quasi aspernatur explicabo vitae? Voluptatum voluptates architecto quis.
                    </p>
                </div>

                <div className="grid md:grid-cols- mt-5 gap-8">
                    <img alt='kafou' className="object-cover w-full h-96 rounded-xl  md:col-span-6" src="/images/kafou.jpg" />
                    <img alt='kafou' className="object-cover w-full h-96 rounded-xl  md:col-span-3" src="/images/soupjoumou.jpg" />
                    <img alt='kafou' className="object-cover w-full h-96 rounded-xl  md:col-span-3" src="/images/danse.jpg" />
                </div>
            </div>
            <AboutFeatures subTitle="Vision" title="Our history" text="" image="/images/island2.jpg" />
            <AboutFeatures subTitle="Vision" title="Who we are" text="" image="/images/au-cap.jpg" isReverse={true} />
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
                    <div className="lg:flex lg:items-center lg:gap-16">
                        <div className="w-full space-y-12 lg:w-1/2 ">
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">explore our awesome Components</h1>

                                <div className="mt-2">
                                    <span className="inline-block w-40 h-1 bg-principal rounded-full"></span>
                                    <span className="inline-block w-3 h-1 ml-1 bg-principal rounded-full"></span>
                                    <span className="inline-block w-1 h-1 ml-1 bg-principal rounded-full"></span>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-secundary bg-secundary/10 rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize">Copy & paste components</h1>

                                    <p className="mt-3 text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-secundary bg-secundary/10 rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize">Zero Configuration</h1>

                                    <p className="mt-3 text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>

                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-secundary bg-secundary/10 rounded-xl md:mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize">elegant Dark Mode</h1>

                                    <p className="mt-3 text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                            <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-md" src={gif} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <Offer /> */}
            <Testimonial />
            <Team />
            <Newsletter />
        </>
    );
}

export default About;
