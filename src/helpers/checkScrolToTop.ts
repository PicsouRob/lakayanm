import { useState, useCallback, useEffect } from 'react';

type UseScrollToTopProps = {
    showScroll: boolean,
}

export const useScrollToTop = (): UseScrollToTopProps => {
    const [showScroll, setShowScroll] = useState<boolean>(false);

    const checkScrollTop = useCallback(() => {
        if (!showScroll && window.scrollY > 400) {
            setShowScroll(true);
        } else if (showScroll && window.scrollY <= 400) {
            setShowScroll(false);
        }
    }, [showScroll]);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);

        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        }
    }, [checkScrollTop]);

    return { showScroll };
}