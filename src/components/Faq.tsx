import React from 'react';
import { Link } from 'react-router-dom';

const Faq: React.FC = () => {
    
    return (
        <>
            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold leading-tight text-dark md:text-4xl lg:text-5xl">Questions & Answers</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-dark">Explore the common questions and answers about Celebration</p>
                    </div>

                    <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-secundary rounded-full">
                                <span className="text-lg font-semibold text-white">?</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-principal">How to create an account?</p>
                                <p className="mt-4 text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-secundary rounded-full">
                                <span className="text-lg font-semibold text-white">?</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-principal">How can I make payment?</p>
                                <p className="mt-4 text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-secundary rounded-full">
                                <span className="text-lg font-semibold text-white">?</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-principal">Do you provide discounts?</p>
                                <p className="mt-4 text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-secundary rounded-full">
                                <span className="text-lg font-semibold text-white">?</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-xl font-semibold text-principal">How do you provide support?</p>
                                <p className="mt-4 text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-12 md:mt-20">
                        <div className="px-8 py-4 text-center bg-gray-100 sm:rounded-full">
                            <p className="">Didn’t find the answer you are looking for? <Link to="/policy" title="" className="text-principal transition-all duration-200 hover:opacity-90 hover:underline">Contact our support</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Faq;