import {
    createBrowserRouter
} from "react-router-dom";

import Home from './../pages/Home';
import Register from "../pages/Register";
import Login from "../pages/Login";
import PublicRoute from "./PublicRoute";
import PrivataRoute from "./PrivataRoute";
import AddJobs from "../privatePages/AddJobs";
import Jobs from "../pages/Jobs";
import ApplyJob from "../privatePages/ApplyJob";
import MyJobs from "../privatePages/MyJobs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoute></PublicRoute>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'jobs',
                element: <Jobs></Jobs>
            },
            {
                path: '/jobs/apply/:id',
                element: <ApplyJob></ApplyJob>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: 'add_job',
                element: <PrivataRoute><AddJobs></AddJobs></PrivataRoute>,
            },
            {
                path: 'my_jobs',
                element: <PrivataRoute><MyJobs></MyJobs></PrivataRoute>,
            },

        ]
    },
    {
        // path: 'add_job',
        // element: <PrivataRoute><AddJobs></AddJobs></PrivataRoute>,
        // children: [
        // {
        //     path: 'add_job',
        //     element: <AddJobs></AddJobs>
        // }
        // ]
    }

]);

export default router