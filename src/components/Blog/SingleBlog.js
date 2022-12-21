import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const SingleBlog = () => {
    const singleBlog = useLoaderData();
    console.log(singleBlog);
    return (
        <div className="w-[70%] mx-auto">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                    className="h-[70vh] w-full object-fill object-center"
                    src={singleBlog.image}
                    alt={singleBlog.heading}
                />
                <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 dark:text-white mb-3">
                        {singleBlog.heading}
                    </h1>
                    <p className="leading-relaxed mb-3">{singleBlog.description}</p>
                    <div className="flex items-center flex-wrap ">
                        <NavLink
                            to={`/blog`}
                            className="text-white px-3 py-2 bg-indigo-500 rounded inline-flex items-center md:mb-2 lg:mb-0"
                        >
                            Back to Blog
                        </NavLink>
                        <span className="text-gray-400  dark:text-slate-200 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                        </span>
                        <span className="text-gray-400 dark:text-slate-200 inline-flex items-center leading-none text-sm">
                            <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
