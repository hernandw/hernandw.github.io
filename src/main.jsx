import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import "./i18n.js";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home/Home.jsx";
import About from "./components/pages/about/About.jsx";
import Resume from "./components/pages/resume/Resume.jsx";
import Skill from "./components/pages/skill/Skill.jsx";
import Portfolio from "./components/pages/portfolio/Portfolio.jsx";
import Blog from "./components/pages/blog/Blog.jsx";
import Contact from "./components/pages/contact/Contact.jsx";
import NotFound from "./components/pages/NotFound.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>
);
