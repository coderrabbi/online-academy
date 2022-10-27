import React from 'react';
import { NavLink } from 'react-router-dom';

const Faq = () => {
    return (
        <div className="bg-slate-100 dark:bg-slate-700">
            <section className="text-gray-700 dark:text-slate-200">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 dark:text-slate-300 mb-4">
                            Frequently Asked Question
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            The most common questions about how our business works and what can do
                            for you.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="w-full lg:w-1/2 px-4 py-2 ">
                            <details className="mb-4 ">
                                <summary className="font-semibold  bg-gray-200 dark:bg-slate-500 rounded-md py-2 px-4  cursor-pointer">
                                    How Long is this site live?
                                </summary>

                                <span>
                                    Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                                    ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                                    nostrud pariatur culpa magna in aute.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold bg-gray-200  dark:bg-slate-500 rounded-md py-2 px-4  cursor-pointer">
                                    Can I install/upload anything I want on there?
                                </summary>

                                <span>
                                    Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                                    ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                                    nostrud pariatur culpa magna in aute.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200  dark:bg-slate-500 rounded-md py-2 px-4 cursor-pointer">
                                    How can I migrate to another site?
                                </summary>

                                <span>
                                    Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                                    ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                                    nostrud pariatur culpa magna in aute.
                                </span>
                            </details>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200  dark:bg-slate-500 rounded-md py-2 px-4 cursor-pointer">
                                    Can I change the domain you give me?
                                </summary>

                                <span className="px-4 py-2">
                                    Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                                    ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                                    nostrud pariatur culpa magna in aute.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  dark:bg-slate-500 bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                                    How many sites I can create at once?
                                </summary>

                                <span className="px-4 py-2">
                                    Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                                    ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                                    nostrud pariatur culpa magna in aute.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  dark:bg-slate-500 bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                                    How can I communicate with you?
                                </summary>

                                <span className="px-4 py-2">
                                    Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                                    ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                                    nostrud pariatur culpa magna in aute.
                                </span>
                            </details>
                        </div>
                    </div>{' '}
                    <div className="text-gray-600 dark:text-slate-200 text-center font-medium">
                        <span>Still have any questions? </span>
                        <NavLink
                            to="contact"
                            className="font-semibold text-indigo-600 ml-1 dark:text-indigo-400 hover:text-indigo-700"
                        >
                            Contact us
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;
