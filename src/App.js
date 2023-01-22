import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import FooterComponent from "./components/FooterComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import NoPageFound from "./components/NoPageFound";
import ContactUs from "./components/ContactUs";
import RestrauranatMenu from "./components/RestrauranatMenu";

const App = () => {
  return (
    <div className="container">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoPageFound />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <NoPageFound />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:id",
        element: <RestrauranatMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
