import React from 'react';
import { Link } from 'react-router-dom';

const Newsletter: React.FC = () => {
    return (
        <>
            <section className="bg-gray-50">
                <div className="p-8 md:p-12 lg:px-16 lg:py-20">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Abone ak bilten nou an pou tout nouvel sou touris an ayiti.
                        </h2>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            Rete ajou ak nouvo aktive, blog e tout jan de nouvel konsenan touris nan peyi a. Ou lib pou w enskri ak imel ou.
                        </p>
                    </div>

                    <div className="mx-auto mt-8 max-w-xl">
                        <form action="#" className="sm:flex sm:gap-4">
                            <div className="sm:flex-1">
                                <label htmlFor="email" className="sr-only">Email</label>

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-secundary px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                            >
                                <span className="text-sm font-medium"> Sign Up </span>

                                <svg
                                    className="h-5 w-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="mx-auto max-w-screen-sm text-sm text-left newsletter-form-footer mt-3">Nou pran swen sou pwoteksyon done ou yo.  <Link to="/privacy" className="font-medium text-principal hover:underline">Li Règleman sou enfòmasyon prive nou an.</Link>.</div>
                </div>
            </section>
        </>
    );
}

export default Newsletter;