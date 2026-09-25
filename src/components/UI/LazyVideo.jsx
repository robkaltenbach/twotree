import React, { useEffect, useRef } from 'react';

/**
 * Muted looping preview that only downloads and plays while it is on screen.
 * Shows the poster until then, and never autoplays for reduced-motion users.
 */
const LazyVideo = ({ src, poster, className, style }) => {
    const ref = useRef(null);

    useEffect(() => {
        const video = ref.current;
        if (!video) return undefined;

        // React doesn't reliably set the `muted` property on hydrated elements,
        // and browsers refuse to autoplay unmuted video.
        video.muted = true;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            },
            { rootMargin: '200px 0px' }
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={ref}
            className={className}
            src={src}
            poster={poster}
            preload="none"
            loop
            muted
            playsInline
            aria-hidden="true"
            style={style}
        />
    );
};

export default LazyVideo;
