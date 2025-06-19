import { useEffect, useRef } from "react"

export const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classlist.add("visable");
                }
            },
            { threshold: 0.2, rootMargin: "0px 0px -55px 0px" }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    });

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
};