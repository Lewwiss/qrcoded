const Support = () => {
    return (
        <div className="mx-auto max-w-7xl flex items-center justify-center py-10 px-10">
            <div className="w-full grid grid-cols-1">
                <div className="flex flex-col items-center justify-center w-full py-10 text-center">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl leading-normal md:leading-normal lg:leading-normal font-bold mb-5 max-w-lg">We're always here to help out.</h3>
                    <p className="text-md md:text-lg leading-10 md:leading-10 max-w-sm">If you've encountered an issue, no problem! Give us an email <a href="#" className="underline underline-offset-4">support@qrcoded.app</a></p>
                    <p></p>
                </div>
                <div className="w-full flex flex-col items-center justify-center pb-10">
                    <img src="/images/2.svg" className="max-w-md" />
                </div>
            </div>
        </div>
    );
};

export default Support;