import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Action = () => {
    const { ref, inView } = useInView({ threshold: 0.2});
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
        <div className="bg-black" ref={ref}>
            <div className="mx-auto max-w-7xl flex items-center justify-center py-16 px-10 relative">
                <img src="/images/4.svg" className="absolute -top-80 lg:-top-96 -left-40 lg:-left-28 w-80 lg:w-96" />
                <img src="/images/5.svg" className="absolute top-0 -left-40 lg:-left-28 w-80 lg:w-96" />
                <img src="/images/6.svg" className="absolute bottom-0 -right-40 lg:-right-28 w-80 lg:w-96" />
                <img src="/images/7.svg" className="absolute -bottom-80 lg:-bottom-96 -right-40 lg:-right-28 w-80 lg:w-96" />
                <div className="w-full grid grid-cols-1">
                    <div className="flex flex-col items-center justify-center w-full py-10 text-center">
                        <motion.h3 custom={0} animate={animation} className="text-3xl md:text-4xl lg:text-5xl leading-normal md:leading-normal lg:leading-normal font-bold mb-5 text-white">Let's generate your QR code.</motion.h3>
                        <motion.p custom={1} animate={animation} className="text-md md:text-lg leading-10 md:leading-10 max-w-md text-white">Create a convenient way for your clients to find you, just enter your URL to get started.</motion.p>
                        <motion.a custom={2} animate={animation} href="/" className="bg-white text-black py-4 px-8 mt-8 font-medium text-lg">Generate QR Code</motion.a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Action;