import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { Drawer } from "./features/drawer/Drawer.tsx";
import { ProjectItem } from "./features/map/components/ProjectItem.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/place",
    element: <div>sme place</div>,
  },
  {
    path: "/project-item/:id",
    element: <ProjectItem />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Drawer />
  </React.StrictMode>
);
