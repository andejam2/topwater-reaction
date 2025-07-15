export default function FeatherPopPage() {
    return (
        <main className="bg-black text-white min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Feather Pop</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                <div className="flex flex-col items-center text-center p-4 shadow rounded bg-white transition-transform duration-200 hover:scale-105">
                    <img src="/featherpopblue.jpg" alt="Blue with Blugill Skirt" className="w-full rounded mb-2" />

                    <h2 className="font-semibold text-lg text-gray-600">Blue with Bluegill Skirt</h2>
                    <p className="text-gray-600">$13.59</p>

                    <div className="flex items-center gap -2 my-2">
                        <div className="flex flex-col items-center">
                            <label className="text-sm text-gray-600 mb-1">Quantity</label>
                            <input type="number" min="1" defaultValue="1" className="bg-gray-300 text-black w-16 text-center border rounded px-2 py-1" />
                        </div>
                        <button className="bg-[#7A9C45] hover:bg-[8FB952] text-white px-4 py-1 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center p-4 shadow rounded bg-white">
                    <img src="/featherpopgrn.jpg" alt="Green with Chartreuse Shad Skirt" className="w-full rounded mb-2" />

                    <h2 className="font-semibold text-lg text-gray-600">Green with Chartreuse Shad Skirt</h2>
                    <p className="text-gray-600">$13.59</p>

                    <div className="flex items-center gap -2 my-2">
                        <div className="flex flex-col items-center">
                            <label className="text-sm text-gray-600 mb-1">Quantity</label>
                            <input type="number" min="1" defaultValue="1" className="bg-gray-300 text-black w-16 text-center border rounded px-2 py-1" />
                        </div>
                        <button className="bg-[#7A9C45] gover:bg-[8FB952] text-white px-4 py-1 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center p-4 shadow rounded bg-white">
                    <img src="/featherpoppurple.jpg" alt="Purple with Pumpkin Seed Skirt" className="w-full rounded mb-2" />

                    <h2 className="font-semibold text-lg text-gray-600">Purple with Pumpkin Seed Skirt</h2>
                    <p className="text-gray-600">$13.59</p>

                    <div className="flex items-center gap -2 my-2">
                        <div className="flex flex-col items-center">
                            <label className="text-sm text-gray-600 mb-1">Quantity</label>
                            <input type="number" min="1" defaultValue="1" className="bg-gray-300 text-black w-16 text-center border rounded px-2 py-1" />
                        </div>
                        <button className="bg-[#7A9C45] gover:bg-[8FB952] text-white px-4 py-1 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center p-4 shadow rounded bg-white">
                    <img src="/featherpopred.jpg" alt="Red with Gizzard Shad Skirt" className="w-full rounded mb-2" />

                    <h2 className="font-semibold text-lg text-gray-600">Red with Gizzard Shad Skirt</h2>
                    <p className="text-gray-600">$13.59</p>

                    <div className="flex items-center gap -2 my-2">
                        <div className="flex flex-col items-center">
                            <label className="text-sm text-gray-600 mb-1">Quantity</label>
                            <input type="number" min="1" defaultValue="1" className="bg-gray-300 text-black w-16 text-center border rounded px-2 py-1" />
                        </div>
                        <button className="bg-[#7A9C45] gover:bg-[8FB952] text-white px-4 py-1 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center p-4 shadow rounded bg-white">
                    <img src="/featherpopyellow.jpg" alt="Yellow with Sexy Shad Skirt" className="w-full rounded mb-2" />

                    <h2 className="font-semibold text-lg text-gray-600">Yellow with Sexy Shad Skirt</h2>
                    <p className="text-gray-600">$13.59</p>

                    <div className="flex items-center gap -2 my-2">
                        <div className="flex flex-col items-center">
                            <label className="text-sm text-gray-600 mb-1">Quantity</label>
                            <input type="number" min="1" defaultValue="1" className="bg-gray-300 text-black w-16 text-center border rounded px-2 py-1" />
                        </div>
                        <button className="bg-[#7A9C45] gover:bg-[8FB952] text-white px-4 py-1 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}