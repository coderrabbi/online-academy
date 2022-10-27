import React, { useContext, useState } from "react";
import LoginImage from "../../assets/undraw_helpful_sign_re_8ms5.svg";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { GithubProvider, GoogleProvider } from "../../firebase/config";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/Auth/AuthProvider";
import Loader from "../../components/Common/Loader/Loader";
const Login = () => {
  const { signIn, providerLogin, isLoading, setIsLoading } =
    useContext(AuthContext);
  const [isShowPass, setIsShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleShowPass = () => {
    setIsShowPass(!isShowPass);
  };
  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signIn(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        if (user.emailVerified) {
          navigate(from, { replace: true });
          setIsLoading(false);
          toast.success("Login successful");
        } else {
          toast.error(
            "Your email is not verified. Please verify your email address."
          );
        }
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const signinWithGoogle = () => {
    providerLogin(GoogleProvider)
      .then(() => {
        toast.success("Login success");
        navigate(from, { replace: true });
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        toast.error(errorMessage);
        setIsLoading(false);
      });
  };
  const signinWithGithub = () => {
    providerLogin(GithubProvider)
      .then(() => {
        toast.success("Login success");
        navigate(from, { replace: true });
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        toast.error(errorMessage);
        setIsLoading(false);
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      <section className="w-full py-12 px-0 min-h-[80vh] flex justify-center items-center">
        <div className="hidden md:block animate-slide-down">
          <img src={LoginImage} alt="Login" className="w-auto h-[55vh]" />
        </div>
        <div className="w-[36rem] p-10 text-center shadow-lg animate-slide-up">
          <h2 className="text-3xl font-bold text-slate-700">Login</h2>
          <form
            onSubmit={loginUser}
            className="flex flex-col mt-5 w-full gap-2"
          >
            <div className="w-full inline-grid">
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded bg-slate-100 border-none"
              />
            </div>
            <div className="w-full inline-grid relative">
              <input
                type={isShowPass ? "text" : "password"}
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded bg-slate-100 border-none"
              />
              {isShowPass ? (
                <AiOutlineEyeInvisible
                  className="absolute top-3 right-4 z-10 text-xl cursor-pointer"
                  onClick={handleShowPass}
                />
              ) : (
                <AiOutlineEye
                  className="absolute top-3 right-4 z-10 text-xl cursor-pointer"
                  onClick={handleShowPass}
                />
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 w-full transition duration-100 ease-in-out rounded"
            >
              Login
            </button>
          </form>
          <div className="text-left">
            <Link to="/reset">
              <span className="text-slate-700">Reset Password</span>
            </Link>
          </div>
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t-2 border-slate-400"></div>
            <span className="flex-shrink mx-2 text-slate-700">OR</span>
            <div className="flex-grow border-t-2 border-slate-400"></div>
          </div>
          <div>
            <div className="flex justify-between items-center gap-3">
              <button
                onClick={signinWithGoogle}
                className="bg-slate-600 cursor-pointer flex justify-center items-center gap-3 text-white px-3 py-2 w-full transition duration-100 ease-in-out rounded active:scale-90"
              >
                <FcGoogle className="h-5 w-5 rounded-full bg-gray-50" /> Login
                With Google
              </button>
              <button
                onClick={signinWithGithub}
                className="bg-slate-600 cursor-pointer flex justify-center items-center gap-3 text-white px-3 py-2 w-full transition duration-100 ease-in-out rounded active:scale-90"
              >
                <AiFillGithub className="h-5 w-5 rounded-full" /> Login With
                Github
              </button>
            </div>
            <span className="flex justify-start gap-2 pt-2 text-gray-600">
              <p>Don't have an account? </p>
              <Link to="/register">
                <span className="text-blue-600"> Register</span>
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
