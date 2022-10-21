const Form = ({ url, size, changeUrl, changeSize, changeStatus, urlErr, changeUrlErr }) => {
    return (
        <div className="mx-auto flex items-center justify-center pt-12 md:pt-24 pb-24 px-6 sm:px-10">
            <div className="mx-auto w-full max-w-2xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl leading-normal md:leading-normal lg:leading-normal font-bold mb-5 text-center">Create custom<br />QR codes instantly.</h1>
                <p className="text-lg leading-10 text-center mx-auto max-w-md">QR Codes allow smartphone users to access your website quickly and simply.</p>

                <div className="mx-auto mt-10 mb-6 md:px-6 max-w-lg">
                    <input placeholder="Enter a URL" className="w-full rounded-none border-2 border-gray-200 py-4 px-5 text-grey-dark focus:outline-none appearance-none mb-5" onChange={(e) => changeUrl(e.target.value)} />

                    <select className="w-full rounded-none border-2 border-gray-200 bg-white py-4 px-5 text-grey-dark focus:outline-none appearance-none" defaultValue={size} onChange={(e) => changeSize(e.target.value)}>
                        <option value={100}>100x100</option>
                        <option value={200}>200x200</option>
                        <option value={300}>300x300</option>
                        <option value={400}>400x400</option>
                        <option value={500}>500x500</option>
                        <option value={600}>600x600</option>
                        <option value={700}>700x700</option>
                    </select>

                    <button onClick={() => changeStatus(1)} className="bg-black w-full text-white py-4 px-4 mt-5 hover:bg-black font-medium text-lg">Generate QR Code</button>
                </div>
            </div>
        </div>
    );
};

export default Form;