import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Contact from "../Pages/Home/Contact/Contact";
import Projects from "../Pages/Home/Projects/Projects";
import Blogs from "../Pages/Home/Blogs/Blogs";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/projects",
          element: <Projects></Projects>
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>
        }
      ]
    },
  ]);

  export default router;