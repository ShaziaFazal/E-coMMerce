import { useState } from 'react'


const NewProductForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        id: '',
        price: 0,
        stock: '',
        sizes: [],
        description: '',
        sizeChart: '',
        fabric: '',
        content: '',
        fit: '',
        modelFit: '',
        modelSize: '',
        deliveryDetails: '',
        note: '',
        images: '',
        discount: '',
        category: '',
    });

    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({
            title: '',
            id: '',
            price: 0,
            stock: '',
            sizes: [],
            description: '',
            sizeChart: '',
            fabric: '',
            content: '',
            fit: '',
            modelFit: '',
            modelSize: '',
            deliveryDetails: '',
            note: '',
            images: '',
            discount: '',
            category: '',
        })

        try {
            const response = await fetch('http://localhost:4000/productInfo/createproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }

        setShowAlert(true);
    };

    return (
        <>
            <main className="py-10 lg:pl-72">
                {showAlert && (
                    <div className="mt-4 mx-8 top-0 right-0 fixed sm:px-6 lg:px-8 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
                        <strong className="font-bold">Success!</strong>
                        <span className="block mx-2 sm:inline"> Product successfully added.</span>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg
                                onClick={() => setShowAlert(false)}
                                className="fill-current h-6 w-6 text-green-500"
                                role="button"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <title>Close</title>
                                <path d="M14.348 14.849a1 1 0 0 1-1.414 1.414l-3.535-3.536-3.536 3.536a1 1 0 1 1-1.414-1.414l3.536-3.535-3.536-3.536a1 1 0 0 1 1.414-1.414l3.536 3.536 3.535-3.536a1 1 0 0 1 1.414 1.414l-3.536 3.536 3.536 3.535z" />
                            </svg>
                        </span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12 sm:space-y-16">
                        <div>
                            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Add Products</h2>
                        </div>

                        <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Product Information</h2>

                            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Title
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="title"
                                            name="title"
                                            type="text"
                                            autoComplete="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        ID
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="id"
                                            name="id"
                                            type="text"
                                            autoComplete="id"
                                            value={formData.id}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Price
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            autoComplete="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="stock" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Stock
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="stock"
                                            name="stock"
                                            type="text"
                                            autoComplete="stock"
                                            value={formData.stock}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <fieldset>
                                    <legend className="sr-only">Sizes</legend>
                                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6">
                                        <div className="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                                            Sizes
                                        </div>
                                        <div className="mt-4 sm:col-span-2 sm:mt-0">
                                            <div className="max-w-lg space-y-6">
                                                <div className="relative flex gap-x-3">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id="size-1"
                                                            name="size-1"
                                                            type="checkbox"
                                                            value={formData.sizes}
                                                            onChange={handleChange}
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-6">
                                                        <label htmlFor="comments" className="font-medium text-gray-900">
                                                            Small
                                                        </label>
                                                        <p className="mt-1 text-gray-600">Small size</p>
                                                    </div>
                                                </div>
                                                <div className="relative flex gap-x-3">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id="size-2"
                                                            name="size-2"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-6">
                                                        <label htmlFor="candidates" className="font-medium text-gray-900">
                                                            Medium
                                                        </label>
                                                        <p className="mt-1 text-gray-600">Medium size</p>
                                                    </div>
                                                </div>
                                                <div className="relative flex gap-x-3">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id="size-3"
                                                            name="size-3"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                        />
                                                    </div>
                                                    <div className="text-sm leading-6">
                                                        <label htmlFor="offers" className="font-medium text-gray-900">
                                                            Large
                                                        </label>
                                                        <p className="mt-1 text-gray-600">Large size</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="sizeChart" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Size Chart
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="sizeChart"
                                            name="sizeChart"
                                            type="text"
                                            autoComplete="sizeChart"
                                            value={formData.sizeChart}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>


                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="Description" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Description
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <textarea
                                            id="description"
                                            name="description"
                                            autoComplete="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                            rows={4} // You can adjust the number of rows as needed
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="fabric" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Fabric
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="fabric"
                                            name="fabric"
                                            type="text"
                                            autoComplete="fabric"
                                            value={formData.fabric}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="content" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Content
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="content"
                                            name="content"
                                            type="text"
                                            autoComplete="content"
                                            value={formData.content}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="fit" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Fit
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="fit"
                                            name="fit"
                                            type="text"
                                            autoComplete="fit"
                                            value={formData.fit}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="modelFit" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Model Fit
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="modelFit"
                                            name="modelFit"
                                            type="text"
                                            autoComplete="modelFit"
                                            value={formData.modelFit}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="modelSize" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Model Size
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="modelSize"
                                            name="modelSize"
                                            type="text"
                                            autoComplete="modelSize"
                                            value={formData.modelSize}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="deliveryDetails" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Delivery Details
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="deliveryDetails"
                                            name="deliveryDetails"
                                            type="text"
                                            autoComplete="deliveryDetails"
                                            value={formData.deliveryDetails}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="note" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Note
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="note"
                                            name="note"
                                            type="text"
                                            autoComplete="note"
                                            value={formData.note}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="images" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Images
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="images"
                                            name="images"
                                            type="text"
                                            autoComplete="images"
                                            value={formData.images}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="discount" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Discount
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="discount"
                                            name="discount"
                                            type="text"
                                            autoComplete="discount"
                                            value={formData.discount}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                                    <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                                        Category
                                    </label>
                                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                                        <input
                                            id="category"
                                            name="category"
                                            type="text"
                                            autoComplete="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}

export default NewProductForm