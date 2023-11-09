import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../views/login";
import HomeCms from "../views/Home";
const router = createBrowserRouter([
  {
    //  hidupin ini kalau sudah ada tombol logout
    // loader: () => {
    //   // harus me-return sesuatu kalau gak null
    //   // navigation guard
    //   // apa tanda dia belum login
    //   const access_token = localStorage.getItem("access_token");
    //   // cek access token
    //   if (access_token) {
    //     return redirect("/product");
    //   }
    //   //  kalau access token ada return null artinya lanjutkan
    //   return null;
    // },
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
        redirect("/login");
      }
      //  kalau access token ada return null artinya lanjutkan
      return null;
    },
  },
  {
    path: "/product",
    element: <HomeCms />,
  },
]);

export default router;
