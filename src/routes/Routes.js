import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Courses from "../pages/Courses";
import Category from "../Category/Category";
import Course from "../pages/Course";
import Checkout from "../pages/Checkout";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import FAQ from '../pages/FAQ';
import ErrorLinkPage from "../pages/ErrorLinkPage";

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
                loader: () => fetch('https://online-tutor-server.vercel.app/blog')
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
                loader: () => fetch('https://online-tutor-server.vercel.app/courses')
            },
            {
                path: 'course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://online-tutor-server.vercel.app/course/${params.id}`)
            },
            {
                path: 'checkout/:id',
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://online-tutor-server.vercel.app/checkout/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://online-tutor-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '*',
                element: <ErrorLinkPage></ErrorLinkPage>
            }
        ]
    }
])