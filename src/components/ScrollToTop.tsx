import React from 'react';

import { useScrollToTop } from '../helpers/checkScrolToTop';

const ScrollToTop: React.FC = () => {
    const { showScroll } = useScrollToTop();

    return (
        <div className="relative">
            {showScroll && (
                <div className="fixed bottom-4 right-4 w-10 h-10 bg-red-500 rounded-full shadow-lg z-20 flex items-center justify-center cursor-pointer hover:bg-red-600"
                    onClick={() => window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                    </svg>
                </div>
            )}
        </div>
    )
}

export default ScrollToTop;