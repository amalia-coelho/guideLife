import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Projects from "../pages/Projects";
import User from "../pages/User";

const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },

    { path: "/projects", element: <Projects /> },
    { path: "/user", element: <User /> },
]);

export default function App() {
    return <RouterProvider router={router} />;
}