import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Information = () => {
    const { ref, inView } = useInView({ threshold: 0.3});
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start(i => ({
                opacity: 100,
                y: 0,
                transition : {
                    type: "spring", duration: 1.2, delay: i / 10
                }
            }));
        };
        if (!inView) {
            animation.start(i => ({
                opacity: 0,
                y: 100,
                transition: {
                    delay: i / 10
                }
            }));
        };
    }, [inView]);

    return (
        <div className="bg-primary selection:bg-white selection:text-primary relative" ref={ref}>
            <div className="absolute -top-28" id="why" />
            <div className="mx-auto max-w-7xl flex items-center justify-center py-20 px-10 relative">
                <img src="/images/1.svg" className="absolute -top-80 w-80 -right-40 lg:-top-96 lg:-right-28 lg:w-96" />
                <img src="/images/2.svg" className="absolute top-0 -right-40 w-80 lg:-right-28 lg:w-96" />
                <img src="/images/3.svg" className="absolute -top-80 lg:-top-96 w-80 -left-40 lg:-left-28 lg:w-96" />
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 z-10">
                    <div className="w-full flex flex-col items-center justify-center order-2 xl:order-1">
                        <motion.img custom={0} animate={animation} src="/images/sketch-1.svg" className="max-w-2xl xl:w-full xl:px-0 h-64 sm:h-auto" />
                    </div>
                    <div className="flex flex-col items-center xl:items-start justify-center w-full py-10 text-center xl:text-left order-1 xl:order-2">
                        <motion.h3 custom={0} animate={animation} className="text-white text-3xl md:text-4xl lg:text-5xl leading-normal md:leading-normal lg:leading-normal font-bold mb-5">Direct your customers effortlessly.</motion.h3>
                        <motion.p custom={1} animate={animation} className="text-white text-md md:text-lg leading-10 md:leading-10 max-w-md">Simplify the process of clients finding your page by directing them exactly where you want.</motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;