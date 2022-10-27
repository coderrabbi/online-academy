import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthProvider';

const UserDetails = () => {
    const { user } = useContext(AuthContext);

    return (
        <section className="bg-slate-100">
            <div className="container mx-auto py-20">
                <div>
                    <div className="bg-white relative shadow rounded-lg w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
                        <div className="flex justify-center">
                            <img
                                src={
                                    user.photoURL
                                        ? user.photoURL
                                        : 'https://picsum.photos/200/300?random=1'
                                }
                                alt=""
                                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                            />
                        </div>

                        <div className="mt-16">
                            <h1 className="font-bold text-center text-3xl text-gray-900">
                                {user.displayName}
                            </h1>
                            <p className="text-center text-sm text-gray-400 font-medium">
                                {user.email ? user.email : 'Email not found'}
                            </p>
                            <p>
                                <span></span>
                            </p>
                            <div className="my-5 px-6">
                                <snap className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">
                                    Connect with <span className="font-bold">@Golam Rabbi</span>
                                </snap>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserDetails;
