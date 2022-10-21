const Action = () => {
    return (
        <div className="bg-black" id="benefits">
            <div className="mx-auto max-w-7xl flex items-center justify-center py-16 px-10">
                <div className="w-full grid grid-cols-1">
                    <div className="flex flex-col items-center justify-center w-full py-10 text-center">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl leading-normal md:leading-normal lg:leading-normal font-bold mb-5 text-white">Let's generate your QR code.</h3>
                        <p className="text-md md:text-lg leading-10 md:leading-10 max-w-md text-white">Simplify the process of clients finding your page by directing exactly where you want.</p>
                        <a href="/" className="bg-white text-black py-4 px-8 mt-8 font-medium text-lg">Generate QR Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Action;