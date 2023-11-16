/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const ProductList = (props) => {
    const [imgUrl, setImageURL] = useState("");

    console.log(props.data)

    useEffect(() => {
        if (props.showAlert) {
            // Automatically hide the alert after 3 seconds
            const timeout = setTimeout(() => {
                props.setShowAlert(false);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [props.showAlert]);

    return (
        <>
            <main className=" py-10 lg:pl-72">

                {props.showAlert && (
                    <div className="mt-4 mx-8 top-0 right-0 fixed sm:px-6 lg:px-8 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
                        <strong className="font-bold"></strong>
                        <span className="block mx-2 sm:inline"> Product successfully deleted!</span>
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
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold leading-6 text-gray-900">Products</h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    A list of all the products in your account including their title, category, size and status.
                                </p>
                            </div>
                            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                <Link to="/admin/dashboard/addproducts"
                                    className="block rounded-md bg-gray-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"> Add product </Link>
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                                    Title
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Category
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Price
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Status
                                                </th>
                                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {props.data.map((product) => (
                                                <tr key={product._id}>
                                                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                                        <div className="flex items-center">
                                                            <div className="h-11 w-11 flex-shrink-0">
                                                                <img className="h-11 w-11 rounded-full" src={product.images[0].src} alt="" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="font-medium text-gray-900">{product.title}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                        <div className="text-gray-900">{product.fabric}</div>
                                                    </td>

                                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                        <div className="text-gray-900">{product.price}</div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                            {product.stock}
                                                        </span>
                                                    </td>
                                                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                        <button className="text-gray-600 hover:text-gray-900" onClick={() => props.deleteProductById(product._id)}>
                                                            Delete<span className="sr-only"></span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProductList