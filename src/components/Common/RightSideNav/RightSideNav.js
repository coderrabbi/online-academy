import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const RightSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);
    console.log(categories);
    return (
        <div className="flex justify-center items-start flex-col">
            <h1 className="text-center border-b-2 text-3xl dark:text-slate-200 font-bold border-gray-300 w-full mb-5">
                All Categories
            </h1>
            {categories.map((category) => (
                <NavLink to={`/category/${category.id}`} className="text-blue-600">
                    {category.name}
                </NavLink>
            ))}
        </div>
    );
};

export default RightSideNav;
