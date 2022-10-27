import React from 'react';
import { ReactComponent as NotFound } from '../../../assets/notfound.svg';
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/`);
    };
    return (
        <div className="flex flex-col justify-center items-center lg:p-18 p-5 ">
            <NotFound className="h-full lg:w-2/4 w-2/3" />
            <button
                className="py-3 px-5 bg-blue-500 text-white rounded text-xl font-semibold"
                onClick={handleNavigate}
            >
                Back To Home
            </button>
        </div>
    );
};

export default ErrorPage;
