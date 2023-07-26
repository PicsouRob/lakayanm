import React from 'react';
import { Link } from 'react-router-dom';

const Newsletter: React.FC = () => {
    return (
        <>
            <div className="bg-gray-100">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md sm:text-center">
                        <h2 className="text-center text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl">Enskri pou bilten nou an</h2>
                        <p className="max-w-xl mx-auto my-4 text-base leading-relaxed text-dark">
                            Rete ajou ak nouvo aktive, blog e tout jan de nouvel konsenan touris nan peyi a. Ou lib pou w enskri ak imel ou.
                        </p>
                        <form action="#">
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">Email address</label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Antre imel ou a" type="email" id="email" />
                                </div>
                                <div>
                                    <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-principal border-principal sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Abòne</button>
                                </div>
                            </div>
                            <div className="mx-auto max-w-screen-sm text-sm text-left newsletter-form-footer">Nou pran swen sou pwoteksyon done ou yo.  <Link to="/privacy" className="font-medium text-principal hover:underline">Li Règleman sou enfòmasyon prive nou an.</Link>.</div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Newsletter;