import { createBrowserRouter, redirect } from "react-router-dom";
import HomeCms from "../../views/Home";
import AddProduct from "../../views/FormAddProduct";
import Login from "../../views/login";
import AddUser from "../../views/AddUser";
import CategoryHome from "../../views/CategoryTable";

import EditProduct from "../../views/FormEditProduct";
import EditImage from "../../views/EditImagePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        return redirect("/product");
      }
      return null;
    },
  },
  // { path: "/login", element: <Login /> },
  {
    loader: ({ navigate }) => {
      const access_token = localStorage.getItem("access_token");
      if (!access_token) {
        navigate("/");
      }
      return null;
    },
  },
  {
    path: "/product",
    element: <HomeCms />,
  },
  {
    path: "/addProduct",
    element: <AddProduct />,
  },
  {
    path: "/:productId",
    element: <EditProduct />,
  },
  {
    path: "/:productId/editImage",
    element: <EditImage />,
  },
  {
    path: "/add-user",
    element: <AddUser />,
  },
  {
    path: "/category",
    element: <CategoryHome />,
  },
]);

export default router;
