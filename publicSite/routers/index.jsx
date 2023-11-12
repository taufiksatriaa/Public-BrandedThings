import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import DetailProduct from "../views/DetailProduct";
const router = createBrowserRouter([
  {
    path: "/pub/product",
    element: <Home />,
  },
  {
    path: "/pub/product/:productId",
    element: <DetailProduct />,
  },
]);

export default router;
