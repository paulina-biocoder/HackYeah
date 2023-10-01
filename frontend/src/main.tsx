import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ProjectItem } from "./features/map/components/ProjectItem.tsx";
import { Drawer } from "./features/drawer/Drawer.tsx";
import { Map } from "./features/map/Map.tsx";
import { Layout } from "./Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/place/:id",
    element: <ProjectItem />,
  },
  {
    path: "/challenges",
    element: <Layout>Challenges</Layout>,
  },
  {
    path: "/rewards",
    element: <Layout>Rewards</Layout>,
  },
  {
    path: "/profile",
    element: <Layout>Profile</Layout>,
  },
  {
    path: "/quiz",
    element: <Layout>Quiz</Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Drawer />
  </React.StrictMode>
);
