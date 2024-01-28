import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Final from "./pages/Final";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/user/infos",
        element: <UserInfo />,
      },
      {
        path: "/user/infos/final",
        element: <Final />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
