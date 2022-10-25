import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Courses from "../pages/Courses";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('http://localhost:5000/blog')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            }
        ]
    }
])