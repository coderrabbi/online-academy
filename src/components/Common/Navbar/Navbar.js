import React, { useContext, useState } from 'react';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/Auth/AuthProvider';
import Loader from '../Loader/Loader';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);
    const [themeSelected, setThemeSelected] = useState(false);
    const { user, logOut, isLoading, setIsLoading, setUser } = useContext(AuthContext);
    const body = document.body;
    const lightTheme = 'light';
    const darkTheme = 'dark';
    let theme;
    if (localStorage) {
        theme = localStorage.getItem('theme');
    }
    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }
    const toggleTheme = (e) => {
        setThemeSelected(!themeSelected);
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);

            localStorage.setItem('theme', 'light');
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            localStorage.setItem('theme', 'dark');
            theme = darkTheme;
        }
    };
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split('/');
    const toggleMenu = () => {
        setIsMenu(!isMenu);
    };
    const activeClass = (state) => (state.isActive ? `border-white text-slate-300 border-b-2` : '');
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
                toast.success('Log out successful');
                setIsLoading(false);
                setUser(null);
            })
            .catch((error) => {
                toast.error(error.message);
                setIsLoading(false);
            });
    };
    return (
        <>
            {isLoading && <Loader />}
            <div className="bg-indigo-600 dark:shadow-lg dark:backdrop-blur-md  dark:bg-gray-800/90 py-2 px-4">
                <div className="flex justify-between items-center relative">
                    <NavLink to="/">
                        <h2 className="md:text-3xl text-2xl font-bold text-white">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                Online
                            </span>{' '}
                            Academy
                        </h2>
                    </NavLink>
                    {/* desktop menu */}
                    <ul className="md:flex hidden justify-center items-center gap-3 text-white">
                        <li>
                            <NavLink
                                to="/"
                                className={
                                    splitLocation[1] === ''
                                        ? 'border-white text-slate-300 border-b-2'
                                        : ''
                                }
                            >
                                {' '}
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/courses" className={activeClass}>
                                {' '}
                                Courses
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/blog" className={activeClass}>
                                {' '}
                                Blog
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/faq" className={activeClass}>
                                {' '}
                                Faq
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={activeClass}>
                                {' '}
                                Contact
                            </NavLink>
                        </li>
                        {user?.uid ? (
                            <div className="dropdown dropdown-end dropdown-hover">
                                <label tabIndex={0} className="cursor-pointer ">
                                    <img
                                        src={
                                            user.photoURL
                                                ? user.photoURL
                                                : 'https://picsum.photos/200/300?random=1'
                                        }
                                        className="h-8 w-8 rounded-full"
                                        alt={user?.displayName}
                                    />
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-base-100 dark:bg-slate-700 rounded-box w-52"
                                >
                                    <button className="dark:text-slate-200  dark:hover:bg-sky-900 hover:bg-gray-300 py-2 px-3 rounded mb-2 text-slate-700">
                                        <NavLink to="/user">{user.displayName}</NavLink>
                                    </button>
                                    <li>
                                        <button
                                            className="bg-blue-500 dark:bg-sky-800 dark:hover:bg-sky-900 hover:bg-blue-600 py-2 px-3 rounded"
                                            onClick={handleLogOut}
                                        >
                                            Log out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <span className="flex justify-between items-center gap-3">
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </span>
                        )}
                        <li>
                            <button onClick={toggleTheme}>
                                {theme === 'dark' ? (
                                    <BsFillMoonStarsFill className="cursor-pointer  text-2xl text-white" />
                                ) : (
                                    <BsSunFill className="cursor-pointer  text-2xl text-white" />
                                )}
                            </button>
                        </li>
                    </ul>

                    {/* mobile menu */}

                    <div className="md:hidden flex justify-between items-center gap-2">
                        <button onClick={toggleTheme}>
                            {theme === 'dark' ? (
                                <BsFillMoonStarsFill className="cursor-pointer  text-xl text-white" />
                            ) : (
                                <BsSunFill className="cursor-pointer text-xl text-white" />
                            )}
                        </button>
                        {!isMenu ? (
                            <VscMenu
                                className="text-white text-2xl cursor-pointer"
                                onClick={toggleMenu}
                            />
                        ) : (
                            <VscChromeClose
                                className="text-white text-2xl cursor-pointer"
                                onClick={toggleMenu}
                            />
                        )}
                    </div>
                    {isMenu && (
                        <ul className="md:hidden flex flex-col justify-center items-center gap-3 absolute top-12 py-4 right-0 text-white bg-slate-500 w-full z-[999]">
                            <li>
                                <NavLink
                                    to="/"
                                    className={
                                        splitLocation[1] === ''
                                            ? 'border-white text-slate-300 border-b-2'
                                            : ''
                                    }
                                >
                                    {' '}
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/courses" className={activeClass}>
                                    {' '}
                                    Courses
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/blog" className={activeClass}>
                                    {' '}
                                    Blog
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/faq" className={activeClass}>
                                    {' '}
                                    Faq
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={activeClass}>
                                    {' '}
                                    Contact
                                </NavLink>
                            </li>
                            {user?.uid ? (
                                <div className="flex justify-between items-center flex-col gap-3">
                                    <NavLink to="/user">
                                        <img
                                            src={user?.photoURL}
                                            className="h-8 w-8 rounded-full"
                                            alt={user?.displayName}
                                        />
                                    </NavLink>
                                    <button
                                        className="bg-blue-500 dark:bg-sky-800 dark:hover:bg-sky-900 hover:bg-blue-600 py-2 px-3 rounded"
                                        onClick={handleLogOut}
                                    >
                                        Log out
                                    </button>
                                </div>
                            ) : (
                                <span className="flex justify-between items-center gap-3">
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </span>
                            )}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
