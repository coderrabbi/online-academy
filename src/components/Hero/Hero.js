import React from 'react';
import { NavLink } from 'react-router-dom';
import KnowledgeShare from '../../assets/undraw_sharing_knowledge_03vp.svg';

const Hero = () => {
    return (
        <section className="text-gray-600 dark:text-gray-100 body-font bg-slate-100 dark:bg-slate-700">
            <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900 dark:text-white">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                            Gather
                        </span>{' '}
                        More{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                            Knowledge to
                        </span>
                        <br className="hidden lg:inline-block" />
                        Prepare yourself for the next challenge.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
                        cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag
                        selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                    </p>
                    <div className="flex justify-center">
                        <NavLink
                            to="/courses"
                            className="inline-flex text-white bg-indigo-600 dark:bg-sky-800 dark:hover:bg-sky-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg"
                        >
                            Explore
                        </NavLink>
                        <NavLink
                            to="/login"
                            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                        >
                            Sign in Now
                        </NavLink>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={KnowledgeShare}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
