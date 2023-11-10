import { createBrowserRouter, redirect } from "react-router-dom";
import HomeCms from "../../views/Home";
import AddProduct from "../../views/FormAddProduct";
import Login from "../../views/login";
import AddUser from "../../views/AddUser";
import CategoryHome from "../../views/CategoryTable";
import Detail from "../../views/Detail";
import EditProduct from "../../views/FormEditProduct";
const router = createBrowserRouter([
  {
    // //  hidupin ini kalau sudah ada tombol logout
    loader: () => {
      // harus me-return sesuatu kalau gak null
      // navigation guard
      // apa tanda dia belum login
      const access_token = localStorage.getItem("access_token");
      // cek access token
      if (access_token) {
        return redirect("/");
      }
      //  kalau access token ada return null artinya lanjutkan
      return null;
    },
    path: "/login",
    element: <Login />,
  },
  {
    loader: () => {
      // harus me-return sesuatu kalau gak null
      // navigation guard
      // apa tanda dia belum login
      const access_token = localStorage.getItem("access_token");
      // cek access token
      if (!access_token) {
        return redirect("/login");
      }
      //  kalau access token ada return null artinya lanjutkan
      return null;
    },
  },
  {
    //read Product
    path: "/",
    element: <HomeCms />,
  },
  {
    //  nambahkan product
    path: "/",
    element: <AddProduct />,
  },
  {
    path: "/:productId",
    element: <Detail />,
  },
  {
    path: "/:productId/editProduct",
    element: <EditProduct />,
  },

  {
    //  nambahkan staff
    path: "/add-user",
    element: <AddUser />,
  },

  {
    //  read Product
    path: "/category",
    element: <CategoryHome />,
  },
]);

export default router;
