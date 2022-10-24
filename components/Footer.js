const Footer = () => {
    return (
        <div className="mx-auto max-w-7xl px-10 py-16 flex flex-col space-y-10">
            <div className="flex items-center justify-center space-x-5">
                <a href="/" className="bg-white border-black border-8 h-10 w-10 flex items-center justify-center">
                    <div className="bg-black w-4 border-white border-2 h-4" />
                </a>
                <a href="/" className="font-bold text-xl">QRCoded</a>
            </div>
            <div className="mx-auto flex flex-col space-y-10 sm:space-x-10 sm:space-y-0 sm:flex-row items-center justify-center">
                <a className="text-lg line-through">Why use a QR code?</a>
                <a href="/support" className="text-lg underline underline-offset-4">Get support</a>
            </div>
        </div>
    );
};

export default Footer;