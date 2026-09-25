import { useEffect, useRef, useState } from 'react';

/**
 * When `ref` is on a tall section, IntersectionObserver threshold values like 0.2
 * mean "20% of the *entire* target height must be visible" — on small viewports that
 * ratio may never be reached, so the section stays invisible forever.
 * Use threshold 0 so the first pixel entering the viewport is enough.
 */
const useScrollAnimation = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0,
                rootMargin: '0px 0px 0px 0px',
            }
        );

        observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, []);

    return { ref, isVisible };
};

export default useScrollAnimation;
