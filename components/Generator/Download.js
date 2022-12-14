import { useState, useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from 'framer-motion';

const Download = ({ url, size, changeUrl, changeSize, urlErr, changeUrlErr }) => {
    const [download, setDownload] = useState();
    const [foreground, setForeground] = useState("#000000");
    const [background, setBackground] = useState("#ffffff");
    const [refHeight, setRefHeight] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        setDownload(document.getElementById("qrcode").toDataURL());
    }, [url, size, foreground, background]);

    useEffect(() => {
        if (ref.current) {
            setRefHeight((ref.current.clientWidth * 16) / 9);
        };
    }, [ref]);

    function resetState() {
        changeUrl("");
        changeSize(500);
        setForeground("#000000");
        setBackground("#ffffff");
    };

    return (
        <div className="mx-auto max-w-7xl pt-10 pb-48 px-10 grid grid-cols-1 lg:grid-cols-2 mb-4">
            <motion.div initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{type: "spring", duration: 1.2}} className="flex flex-col items-center justify-center text-center space-y-5 px-2 sm:px-10 order-2 lg:order-1 z-10">
                <button className="w-full bg-black text-white py-4 px-8 font-medium text-lg mb-3" onClick={() => resetState()}>Reset</button>
                <input placeholder="Enter a URL" className="w-full rounded-none border-2 border-gray-200 py-4 px-5 text-grey-dark focus:outline-none appearance-none mb-5" value={url} onChange={(e) => changeUrl(e.target.value)} />
                <div className="relative w-full">
                    <select className="w-full rounded-none bg-white border-2 border-gray-200 py-4 px-5 text-grey-dark focus:outline-none appearance-none" value={size} onChange={(e) => changeSize(e.target.value)}>
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
                <div className="flex flex-row space-x-10 items-center justify-start w-full pt-1 pb-3">
                    <div className="flex flex-col items-start justify-center text-center w-full">
                        <p className="text-lg font-medium pb-4 w-full">Foreground</p>
                        <div className="h-12 w-full flex items-center justify-center border-2 border-gray-200" style={{backgroundColor: foreground}}>
                            <p className="absolute font-bold text-white text-sm">{foreground}</p>
                            <input type="color" className="appearance-none px-0.5 bg-neutral-500 opacity-0 h-12 w-full" defaultValue={foreground} onChange={(e) => setForeground(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center text-center w-full">
                        <p className="text-lg font-medium pb-4 w-full">Background</p>
                        <div className="h-12 w-full flex items-center justify-center border-2 border-gray-200" style={{backgroundColor: background}}>
                            <p className="absolute font-bold text-black text-sm">{background}</p>
                            <input type="color" className="appearance-none px-0.5 bg-neutral-500 opacity-0 h-12 w-full" defaultValue={background} onChange={(e) => setBackground(e.target.value)} />
                        </div>
                    </div>
                </div>
                <a href={download} download="QRCode.png" className="w-full bg-black text-white py-4 px-8 font-medium text-lg">Download</a>
            </motion.div>
            <div className="flex items-center justify-center text-center pt-10 order-1 lg:order-2 pb-20 lg:pb-10">
                <motion.div initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{type: "spring", duration: 1.2}} className="w-72 border-black border-8 rounded-3xl overflow-hidden flex items-center justify-center relative shadow-xl" ref={ref} style={{backgroundColor: background, height: refHeight}}>
                    <div className="w-60 h-60 p-8 absolute m-auto top-0 bottom-0">
                        <QRCodeCanvas value={url} size={size} id="qrcode" style={{width: "100%", height: "100%"}} fgColor={foreground} bgColor={background} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Download;