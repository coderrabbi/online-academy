import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import accessImage from '../../assets/undraw_access_account_re_8spm (1).svg';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthProvider';
import Loader from '../../components/Common/Loader/Loader';

const Register = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [isPassShow, setIsPassShow] = useState(false);
    const handlePassShow = () => {
        setIsPassShow(!isPassShow);
    };
    const [isConfirmPassShow, setIsConfirmPassShow] = useState(false);
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleConfirmPassShow = () => {
        setIsConfirmPassShow(!isConfirmPassShow);
    };
    const registerUser = (e) => {
        e.preventDefault();
        if (password !== cPassword) {
            toast.error('Passwords do not match');
        }
        if (!fullName && !email && !password) {
            toast.error('Please fill in all fields');
        } else if (!fullName) {
            toast.error('Please fill in your name');
        } else if (!email) {
            toast.error('Please fill in your email');
        } else if (!password) {
            toast.error('Please fill in your password');
        }
        if (password === cPassword && fullName && email && password) {
            setIsLoading(true);
            createUser(email, password)
                .then(() => {
                    updateUserProfile({ displayName: fullName, photoURL }).then(() => {
                        // Profile updated!
                        setIsLoading(false);
                        toast.success('Registration successful');
                        handleEmailVerification();
                        toast.success('Please verify your email address.');
                        navigate('/pofile');
                    });
                })
                .catch((error) => {
                    const message = error.message;
                    toast.error(message);
                    setIsLoading(false);
                });
        }
    };

    const handleEmailVerification = () => {
        verifyEmail().then(() => {
            console.log('please verify email');
        });
    };

    return (
        <>
            {isLoading && <Loader />}

            <section className="w-full py-12 px-0 min-h-[80vh] flex justify-center flex-row-reverse items-center">
                <div className="animate-slide-down hidden md:block">
                    <img src={accessImage} className="w-auto h-[55vh]" alt="login" />
                </div>
                <div className="w-[35rem] p-10 animate-slide-up text-center shadow-lg">
                    <h2 className="text-slate-900 font-bold text-3xl">Register</h2>
                    <form className="flex flex-col mt-5 w-full gap-2 " onSubmit={registerUser}>
                        <div className="w-full inline-grid">
                            <input
                                type="text"
                                required
                                placeholder="Full Name"
                                className="rounded bg-gray-300 border-none"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className="w-full inline-grid">
                            <input
                                type="text"
                                placeholder="Photo Url"
                                className="rounded bg-gray-300 border-none"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                            />
                        </div>
                        <div className="w-full inline-grid">
                            <input
                                type="email"
                                required
                                placeholder="email"
                                className="rounded bg-gray-300 border-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative w-full inline-grid">
                            <input
                                type={isPassShow ? 'text' : 'password'}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password"
                                className="rounded bg-gray-300 border-none relative"
                            />
                            {!isPassShow ? (
                                <AiOutlineEyeInvisible
                                    className="absolute top-3 right-4  text-xl cursor-pointer"
                                    onClick={handlePassShow}
                                />
                            ) : (
                                <AiOutlineEye
                                    className="absolute top-3 right-4  text-xl cursor-pointer"
                                    onClick={handlePassShow}
                                />
                            )}
                        </div>
                        <div className="relative w-full inline-grid">
                            <input
                                type={isConfirmPassShow ? 'text' : 'password'}
                                required
                                value={cPassword}
                                onChange={(e) => setCPassword(e.target.value)}
                                placeholder="confirm password"
                                className="rounded bg-gray-300 border-none relative"
                            />
                            {!isConfirmPassShow ? (
                                <AiOutlineEyeInvisible
                                    className="absolute top-3 right-4  text-xl cursor-pointer"
                                    onClick={handleConfirmPassShow}
                                />
                            ) : (
                                <AiOutlineEye
                                    className="absolute top-3 right-4  text-xl cursor-pointer"
                                    onClick={handleConfirmPassShow}
                                />
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-3 py-2 w-full transition duration-100 ease-in-out rounded hover:bg-blue-700"
                        >
                            Register
                        </button>
                    </form>

                    <span className="flex justify-start gap-2 pt-2 text-gray-600">
                        <p>Already an account? </p>
                        <Link to="/login">
                            <span className="text-blue-600"> Login</span>
                        </Link>
                    </span>
                </div>
            </section>
        </>
    );
};

export default Register;
