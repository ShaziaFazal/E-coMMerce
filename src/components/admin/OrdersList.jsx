/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const OrderList = (props) => {
    return (
        <>
            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold leading-6 text-gray-900">Orders</h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    A list of all the orders currently pending in your account including their title, category, customer and date.
                                </p>
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
                                                    Customer
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Date
                                                </th>
                                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {props.data.map((item) => (
                                                <tr key={item.email}>
                                                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                                        <div className="flex items-center">
                                                            <div className="h-11 w-11 flex-shrink-0">
                                                                <img className="h-11 w-11 rounded-full" src={item.image} alt="" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="font-medium text-gray-900">{item.title}</div>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                        <div className="text-gray-900">{item.category}</div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                        <div className="text-gray-900">{item.customer}</div>
                                                    </td>

                                                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                                        <div className="text-gray-900">{item.date}</div>
                                                    </td>

                                                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                            Edit<span className="sr-only">, {item.title}</span>
                                                        </a>
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

export default OrderList