import { useEffect } from "react";
import { motion } from 'framer-motion';

const Loading = ({ changeStatus }) => {
  useEffect(() => {
    setTimeout(() => {
      changeStatus(2);
    }, 1200);
  }, []);

  return (
    <div className="mx-auto flex items-center justify-center pt-80 pb-96 px-10">
      <div className="flex flex-row space-x-3 pb-24">
        <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{type: "spring", duration: 1.2}} className="w-3.5 h-3.5 bg-black animate-pulse " />
        <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{type: "spring", duration: 1.2, delay: 0.1}} className="w-3.5 h-3.5 bg-black animate-pulse" />
        <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{type: "spring", duration: 1.2, delay: 0.2}} className="w-3.5 h-3.5 bg-black animate-pulse" />
      </div>
    </div>
  );
};

export default Loading;