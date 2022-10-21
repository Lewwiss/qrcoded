import { useState } from "react";


const Navigation = () => {
    const [menu, setMenu] = useState(false);

    const Menu = () => {
        return (
            <div className="fixed w-full h-full top-0 left-0 flex flex-row z-50">
                <div className="flex flex-grow col-span-2 bg-black opacity-50" onClick={() => setMenu(!menu)} />
                <div className="col-span-2 bg-white flex flex-col items-start justify-start space-y-10 p-10">
                    <button onClick={() => setMenu(!menu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </button>
                    <a onClick={() => setMenu(!menu)} href="/#benefits" className="text-lg">Why use a QR code?</a>
                    <a href="/support" className="text-lg">Get support</a>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="max-w-7xl mx-auto container grid grid-cols-2 py-10 px-6 sm:px-10">
                <div className="flex items-center justify-start space-x-5">
                    <a href="/" className="bg-white border-black border-8 h-10 w-10 flex items-center justify-center">
                        <div className="bg-black w-4 border-white border-2 h-4" />
                    </a>
                    <a href="/" className="font-bold text-xl">QRCoded</a>
                </div>
                <div className="hidden md:flex items-center justify-end space-x-10">
                    <a href="/#benefits" className="text-lg">Why use a QR code?</a>
                    <a href="/support" className="text-lg">Get support</a>
                </div>
                <div className="flex md:hidden flex items-center justify-end space-x-10">
                    <button onClick={() => setMenu(!menu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </button>
                </div>
                { menu ? <Menu /> : null }
            </div>
        </div>
    );
};

export default Navigation;