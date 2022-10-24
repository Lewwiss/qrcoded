import { motion } from 'framer-motion';

const Form = ({ url, size, changeUrl, changeSize, changeStatus, urlErr, changeUrlErr }) => {
    return (
        <div className="mx-auto flex items-center justify-center pt-12 md:pt-24 pb-28 px-6 sm:px-10">
            <div className="mx-auto w-full max-w-2xl">
                <motion.h1 initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{type: "spring", duration: 1.2}} className="text-5xl md:text-6xl lg:text-7xl leading-normal md:leading-normal lg:leading-normal font-bold mb-5 text-center">Create custom<br />QR codes instantly.</motion.h1>
                <motion.p initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{type: "spring", duration: 1.2, delay: 0.1}} className="text-lg leading-10 text-center mx-auto max-w-md">QR Codes allow smartphone users to access your website quickly and simply.</motion.p>

                <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{type: "spring", duration: 1.2, delay: 0.2}} className="mx-auto mt-10 mb-6 md:px-6 max-w-lg">
                    <input placeholder="Enter a URL" className="w-full rounded-none border-2 border-gray-200 py-4 px-5 text-grey-dark focus:outline-none appearance-none mb-5" value={url} onChange={(e) => changeUrl(e.target.value)} />
                    
                    <div className="relative">
                        <select className="w-full rounded-none border-2 border-gray-200 bg-white py-4 px-5 text-grey-dark focus:outline-none appearance-none" value={size} onChange={(e) => changeSize(e.target.value)}>
                            <option value={100}>100x100</option>
                            <option value={200}>200x200</option>
                            <option value={300}>300x300</option>
                            <option value={400}>400x400</option>
                            <option value={500}>500x500</option>
                            <option value={600}>600x600</option>
                            <option value={700}>700x700</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-5 top-4 pt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                        </svg>
                    </div>

                    <button onClick={() => changeStatus(1)} className="bg-black w-full text-white py-4 px-4 mt-5 hover:bg-black font-medium text-lg">Generate QR Code</button>
                </motion.div>
            </div>
        </div>
    );
};

export default Form;