import { createBrowserRouter } from "react-router-dom";
import Login from "../views/login";
import HomeCms from "../views/Home";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/product",
    element: <HomeCms />,
  },
  {
    // path: "/product",
    // element: <HomeCms />,
  },
]);

export default router;
