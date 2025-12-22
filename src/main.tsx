import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import RefSheet from "./pages/ref-sheet/ref-sheet";
import Root from "./root";
import TitleBlurb from "./pages/home/title-blurb";
import Chapter2 from "./pages/chapter2/chapter2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "ref-sheet",
        element: <RefSheet/>,
      },
      {
        path: "/",
        element: <TitleBlurb/>,
      },
      {
        path: "/chapter2",
        element: <Chapter2/>,
      },
    ]
  },
], {
  basename: "/physics-reference/"
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
