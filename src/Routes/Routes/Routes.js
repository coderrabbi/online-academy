import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import Reset from "../../pages/auth/Reset";
import Home from "../../components/Home/Home";
import Blog from "../../components/Blog/Blog";
import ErrorPage from "../../components/Common/ErrorPage/ErrorPage";
import Faq from "../../components/Common/Faq/Faq";
import Contact from "../../components/Common/Contact/Contact";
import Courses from "../../pages/Courses/Courses";
import Course from "../../pages/Courses/Course";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Category from "../../pages/Category/Category";
import UserDetails from "../../pages/auth/UserDetails";
import LoggedInRoute from "../PrivateRoute/LoggedInRoute";
import SingleBlog from "../../components/Blog/SingleBlog";

export const routes = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(`https://online-course-server-ten.vercel.app/courses`),
      },
      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://online-course-server-ten.vercel.app/courses`),
      },
      {
        path: "/course/:id",
        element: (
          <PrivateRoute>
            <Course />
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(
            `https://online-course-server-ten.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: () => fetch(`https://online-course-server-ten.vercel.app/blog`),
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(
            `https://online-course-server-ten.vercel.app/blog/${params.id}`
          ),
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/login",
        element: (
          <LoggedInRoute>
            <Login />
          </LoggedInRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: (
          <LoggedInRoute>
            <Register />
          </LoggedInRoute>
        ),
      },
      {
        path: "/reset",
        element: (
          <LoggedInRoute>
            <Reset />
          </LoggedInRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://online-course-server-ten.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://online-course-server-ten.vercel.app/courses-categories/${params.id}`
          ),
      },
      {
        path: "/user",
        element: (
          <PrivateRoute>
            <UserDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
