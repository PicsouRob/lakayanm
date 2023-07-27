import React from 'react';

interface AboutFeaturesProps {
    subTitle: string,
    title: string,
    text: string,
    image: string,
    isReverse?: boolean,
}

const AboutFeatures: React.FC<AboutFeaturesProps> = (props) => {
    const { subTitle, title, text, image, isReverse } = props;
    
    return (
        <div className="overflow-hidden bg-white py-8 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className={`mx-auto flex flex-col ${isReverse ? "lg:flex-row-reverse" : "lg:flex-row"} max-w-7xl gap-16 sm:gap-20 lg:mx-0 items-center`}>
                    <div className="lg:pt-4 lg:w-1/2 h-full">
                        <div className="">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">{subTitle}</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 h-[350px] lg:h-[500px] w-full">
                        <img
                            src={image}
                            alt="Product screenshot"
                            className="object-cover h-full w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutFeatures;