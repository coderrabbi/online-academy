import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import RightSideNav from '../../components/Common/RightSideNav/RightSideNav';
import ReactStars from 'react-rating-stars-component';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className="flex justify-between bg-slate-100 dark:bg-slate-700 dark:text-white gap-3 ">
            <div className="md:w-[75%] w-full">
                <h2 className="text-3xl p-2 ml-2 mt-5 font-bold text-slate-900 border-b-2 mb-5  border-slate-800 dark:border-slate-300 dark:text-slate-200">
                    Our courses
                </h2>
                <section className="text-gray-600 dark:text-white body-font">
                    <div className="container px-5 p-5 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {courses?.map((course) => (
                                <div className="p-4 md:w-1/3" key={course.id}>
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img
                                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                                            src={course.imageURL}
                                            alt={course.courseTitle}
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 dark:text-gray-200 mb-1">
                                                CATEGORY
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 dark:text-white mb-3">
                                                {course.category}
                                            </h1>
                                            <p className="leading-relaxed">
                                                {course.courseTitle?.slice(0, 55) + '...'}
                                            </p>
                                            <div className="flex justify-start items-center gap-1">
                                                <p className="font-semibold text-amber-600">
                                                    {course.rating}
                                                </p>
                                                <ReactStars
                                                    value={Number(course.rating)}
                                                    edit={false}
                                                    count={5}
                                                    size={20}
                                                    activeColor="#fb923c"
                                                />
                                                <p className=" text-sm">
                                                    ({course.numberOfReview})
                                                </p>
                                            </div>
                                            <div className="flex justify-start items-center gap-2">
                                                <span className="font-semibold text-lg">
                                                    ${course.regularPrice}
                                                </span>
                                                <span className="line-through">
                                                    {' '}
                                                    ${course.discountPrice}
                                                </span>
                                            </div>

                                            <div className="flex items-center flex-wrap ">
                                                <NavLink
                                                    to={`/course/${course.id}`}
                                                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                                                >
                                                    Details
                                                    <svg
                                                        className="w-4 h-4 ml-2"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </NavLink>
                                                <span className="text-gray-400 dark:text-gray-200 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
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
                                                <span className="text-gray-400 dark:text-gray-200 inline-flex items-center leading-none text-sm">
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
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <div className="md:w-[25%] hidden md:block py-12 border-l-2 border-gray-400 md:mx-auto px-20">
                <RightSideNav />
            </div>
        </div>
    );
};

export default Courses;
