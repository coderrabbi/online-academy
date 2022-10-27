import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/Auth/AuthProvider';

const CheckOut = () => {
    const selectedCourses = useLoaderData();
    const { user } = useContext(AuthContext);
    const handleCheckout = (e) => {
        e.preventDefault();
        toast.success('Fake order has been placed!!');
    };
    return (
        <div className="bg-slate-100 dark:text-white dark:bg-slate-700">
            <div className="p-5 md:w-[75%] w-full">
                <h1 className="flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 text-md lg:text-3xl">
                    Checkout for {selectedCourses.courseTitle}
                </h1>
            </div>
            <div className="container p-12 mx-auto">
                <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <div className="flex flex-col md:w-full">
                        <h2 className="mb-4 font-bold md:text-xl text-heading border-b border-gray-300">
                            Shipping Address
                        </h2>
                        <form className="justify-center w-full mx-auto" onSubmit={handleCheckout}>
                            <div className="">
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-full">
                                        <label
                                            htmlFor="firstName"
                                            className="block mb-3 text-sm font-semibold text-gray-500 dark:text-slate-200"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            name="firstName"
                                            type="text"
                                            placeholder="First Name"
                                            required
                                            value={user?.displayName}
                                            onChange={(e) => console.log(e.target.value)}
                                            className="w-full px-4 py-3 text-sm border text-slate-400 border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label
                                            htmlFor="Email"
                                            className="block mb-3 text-sm font-semibold text-gray-500 dark:text-slate-200"
                                        >
                                            Email
                                        </label>
                                        <input
                                            name="Last Name"
                                            type="text"
                                            placeholder="Email"
                                            required
                                            value={user?.email}
                                            onChange={(e) => console.log(e.target.value)}
                                            className="w-full px-4 py-3 text-sm border text-slate-400 border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label
                                            htmlFor="Address"
                                            className="block mb-3 text-sm font-semibold text-gray-500 dark:text-slate-200"
                                        >
                                            Address
                                        </label>
                                        <textarea
                                            className="w-full px-4 py-3 text-xs border text-slate-400 border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            name="Address"
                                            cols="20"
                                            rows="4"
                                            placeholder="Address"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2">
                                        <label
                                            htmlFor="city"
                                            className="block mb-3 text-sm font-semibold text-gray-500 dark:text-slate-200"
                                        >
                                            City
                                        </label>
                                        <input
                                            name="city"
                                            type="text"
                                            placeholder="City"
                                            required
                                            className="w-full px-4 py-3 text-sm border text-slate-400 border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        />
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label
                                            htmlFor="postcode"
                                            className="block mb-3 text-sm font-semibold text-gray-500 dark:text-slate-200"
                                        >
                                            Postcode
                                        </label>
                                        <input
                                            name="postcode"
                                            type="text"
                                            placeholder="Post Code"
                                            required
                                            className="w-full px-4 py-3 text-sm border text-slate-400 border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center mt-4">
                                    <label className="flex items-center text-sm group text-heading">
                                        <input
                                            type="checkbox"
                                            required
                                            className="w-5 h-5 border border-gray-300 text-slate-400 rounded focus:outline-none focus:ring-1"
                                        />
                                        <span className="ml-2">
                                            Save this information for next time
                                        </span>
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900"
                                    >
                                        Process
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                        <div className="pt-12 md:pt-0 2xl:ps-4">
                            <h2 className="text-xl font-bold border-b border-gray-300">
                                Order Summary
                            </h2>
                            <div className="mt-8">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img
                                                src={selectedCourses.imageURL}
                                                alt={selectedCourses.courseTitle}
                                                className="w-60"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold">
                                                {selectedCourses.category}
                                            </h2>
                                            <p className="text-sm">{selectedCourses.courseTitle}</p>
                                            <span className="text-green-600">Price:</span> $
                                            {selectedCourses.regularPrice}
                                        </div>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex p-4 mt-4">
                                <h2 className="text-xl font-bold">Total items: 1</h2>
                            </div>
                            <div className="flex items-center justify-around w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Subtotal:
                                <span className="ml-2"> ${selectedCourses.discountPrice}</span>
                            </div>
                            <div className="flex items-center justify-around w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Shipping Tax: <span className="ml-2">$10</span>
                            </div>
                            <div className="flex items-center justify-around w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Total:
                                <span className="ml-2"> ${selectedCourses.discountPrice + 10}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
