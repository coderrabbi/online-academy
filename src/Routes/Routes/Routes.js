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
        loader: () => fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/courses`),
      },
      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        ),
        loader: () => fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/courses`),
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
            `${process.env.REACT_APP_SERVER_BASE_URL}/courses/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog />,
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
            `${process.env.REACT_APP_SERVER_BASE_URL}/courses/${params.id}`
          ),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_SERVER_BASE_URL}/courses-categories/${params.id}`
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
