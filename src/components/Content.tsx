import React from 'react';

const Content: React.FC = () => {
    return (
        <>
            <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full md:object-left md:scale-150 md:origin-bottom" src="/images/beach2.jpg" alt="" />
                </div>

                <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

                <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center md:w-2/3 lg:w-1/2 md:text-left space-y-6">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Touris en Ayiti</h2>
                        <p className="mt-4 text-base text-gray-200">Ayiti gen gwo potansyèl touris akòz bote natirèl li, eritaj kiltirèl ak istorik rich, mizik vibran, cuisine bon gou, ak moun akeyan. Sepandan, touris ann Ayiti pa devlope menm jan ak lòt peyi nan rejyon an, e peyi a kontinye refè apre konsekans tan pase a, enkli tranblemanntè 2010 la.</p>
                        <button className="inline-flex items-center justify-center flex-shrink-0 w-auto px-6 py-2 font-medium text-white transition-all duration-200 bg-secundary border border-transparent rounded-md sm:mt-0 sm:w-auto hover:opacity-90 focus:bg-blue-700 mt-5">
                            Plis detay
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Content;
