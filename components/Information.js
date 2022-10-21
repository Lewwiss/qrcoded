const Information = () => {
    return (
        <div className="bg-neutral-100 relative">
            <div className="absolute -top-20" id="benefits" />
            <div className="mx-auto max-w-7xl flex items-center justify-center py-16 px-10">
                <div className="w-full grid grid-cols-1 xl:grid-cols-2">
                    <div className="w-full flex flex-col items-center justify-center order-2 xl:order-1">
                        <img src="/images/1.svg" className="max-w-2xl xl:w-full xl:px-0 h-64 sm:h-auto" />
                    </div>
                    <div className="flex flex-col items-center xl:items-start justify-center w-full py-10 text-center xl:text-left order-1 xl:order-2">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl leading-normal md:leading-normal lg:leading-normal font-bold mb-5">Direct your customers effortlessly.</h3>
                        <p className="text-md md:text-lg leading-10 md:leading-10 max-w-md">Simplify the process of clients finding your page by directing exactly where you want.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;