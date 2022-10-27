import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { NavLink, useLoaderData } from 'react-router-dom';
import RightSideNav from '../../components/Common/RightSideNav/RightSideNav';
import { BsShieldLock } from 'react-icons/bs';
import { createRef } from 'react';
import ReactToPdf from 'react-to-pdf';

const Course = () => {
    const selectedCourses = useLoaderData();
    const ref = createRef();

    return (
        <div className="flex md:flex-row flex-col justify-between bg-slate-100 dark:bg-slate-700 md:items-center gap-3">
            <div className=" md:w-[25%] w-full border-r-2 border-gray-300 md:h-[85vh]">
                <div ref={ref}>
                    <h2 className="text-center text-5xl font-bold border-b-2 mb-1 border-slate-700 dark:border-slate-200 text-slate-800 dark:text-slate-200">
                        Course Info
                    </h2>
                    {selectedCourses.bestSellarBadge && (
                        <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 mt-2 px-3 py-1 rounded dark:bg-green-200 dark:text-green-900">
                            {selectedCourses.bestSellarBadge}
                        </span>
                    )}

                    <div className="p-6 flex justify-between gap-2 flex-col">
                        <div className="flex justify-between items-center">
                            {' '}
                            <h2 className="tracking-widest text-sm title-font font-semibold text-gray-600 dark:text-slate-200 mb-1">
                                Author:
                            </h2>
                            <p className="text-sm font-medium text-gray-900 dark:text-slate-200 mb-3">
                                {selectedCourses.author}
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            {' '}
                            <h2 className="tracking-widest text-sm title-font font-semibold text-gray-600 dark:text-slate-200 mb-1">
                                Category:
                            </h2>
                            <p className="text-sm font-medium text-gray-900 dark:text-slate-300 mb-3">
                                {selectedCourses.category}
                            </p>
                        </div>
                        <div className="flex justify-between gap-1 items-center">
                            {' '}
                            <h2 className="tracking-widest text-sm title-font font-semibold dark:text-slate-200 text-gray-600  mb-1">
                                Description:
                            </h2>
                            <p className="text-sm font-medium ml-2 text-gray-900 dark:text-slate-300 mb-3">
                                {selectedCourses.courseTitle}
                            </p>
                        </div>
                        <div className="flex justify-between gap-1 items-center">
                            {' '}
                            <h2 className="tracking-widest text-sm title-font font-semibold dark:text-slate-200 text-gray-600 mb-1">
                                Rating:
                            </h2>
                            <div className="flex justify-start items-center gap-1 dark:text-slate-200">
                                <p className="font-semibold text-amber-600">
                                    {selectedCourses.rating}
                                </p>
                                <ReactStars
                                    value={Number(selectedCourses.rating)}
                                    edit={false}
                                    count={5}
                                    size={20}
                                    activeColor="#fb923c"
                                />
                                <p className=" text-sm dark:text-slate-200">
                                    ({selectedCourses.numberOfReview})
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 items-center">
                            {' '}
                            <h2 className="tracking-widest text-sm title-font font-semibold dark:text-slate-200 text-gray-600 mb-1">
                                Discount Price:
                            </h2>
                            <div className="flex justify-start items-center gap-2">
                                <span className="font-semibold text-lg dark:text-slate-200">
                                    ${selectedCourses.regularPrice}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 items-center">
                            {' '}
                            <h2 className="tracking-widest text-sm title-font font-semibold text-gray-600 dark:text-slate-200 mb-1">
                                Regular Price:
                            </h2>
                            <div className="flex justify-start items-center gap-2">
                                <span className="font-semibold text-lg dark:text-slate-200">
                                    ${selectedCourses.discountPrice}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 items-center">
                            {' '}
                            <h2 className="tracking-widest text-sm title-font font-semibold dark:text-slate-200 text-gray-600 mb-1">
                                Total Watch:
                            </h2>
                            <div className="flex items-center flex-wrap ">
                                <span className="text-gray-400 dark:text-slate-200 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
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
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
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
                <div className="mx-2">
                    <ReactToPdf targetRef={ref} filename={`${selectedCourses.courseTitle}.pdf`}>
                        {({ toPdf }) => (
                            <button
                                className="text-white w-full bg-indigo-500 hover:bg-indigo-600 px-3 py-2 rounded"
                                onClick={toPdf}
                            >
                                Dounload pdf
                            </button>
                        )}
                    </ReactToPdf>
                </div>
            </div>

            <div className="bg-slate-100 mt-5 dark:bg-slate-700 md:w-[55%] w-full">
                <div className="p-4 md:w-full">
                    <div className="h-full border-2 border-gray-200 dark:text-slate-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                            className="w-full"
                            src={selectedCourses.imageURL}
                            alt={selectedCourses.courseTitle}
                        />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 dark:text-slate-200 mb-1">
                                CATEGORY
                            </h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 dark:text-slate-200 mb-3">
                                {selectedCourses.category}
                            </h1>
                            <p className="leading-relaxed mb-3 dark:text-slate-200">
                                {selectedCourses.courseTitle}
                            </p>
                            <div className="flex justify-start items-center gap-1">
                                <p className="font-semibold text-amber-600 ">
                                    {selectedCourses.rating}
                                </p>
                                <ReactStars
                                    value={Number(selectedCourses.rating)}
                                    edit={false}
                                    count={5}
                                    size={20}
                                    activeColor="#fb923c"
                                />
                                <p className=" text-sm">({selectedCourses.numberOfReview})</p>
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                <span className="font-semibold text-lg dark:text-slate-200">
                                    ${selectedCourses.regularPrice}
                                </span>
                                <span className="line-through dark:text-slate-200">
                                    {' '}
                                    ${selectedCourses.discountPrice}
                                </span>
                            </div>
                            <div className="flex justify-between gap-2 items-center flex-wrap mt-5 dark:text-slate-200">
                                <NavLink
                                    to="/courses"
                                    className="text-white bg-indigo-600  md:w-auto w-full inline-flex items-center rounded px-3 py-2 md:mb-2 lg:mb-0"
                                >
                                    Back to Courses
                                </NavLink>
                                <NavLink
                                    to={`/checkout/${selectedCourses.id}`}
                                    className="text-white bg-indigo-600 inline-flex gap-2  md:w-auto w-full items-center rounded px-3 py-2 md:mb-2 lg:mb-0"
                                >
                                    <BsShieldLock /> Get Premium Access
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-[20%] w-full p-5 border-l-2 border-gray-300 md:h-[85vh]">
                <RightSideNav />
            </div>
        </div>
    );
};

export default Course;
