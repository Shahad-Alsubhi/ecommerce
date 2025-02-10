import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout";
import Category from "./pages/Category/Category";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Checkout from "./pages/Checkout/Checkout";
import OrderConfirmationModal from "./pages/Checkout/OrderConfirmationModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "category/:categoryName",
        element: <Category />,
      },
      {
        path:"category/:categoryName/product/:productId",
        element:<ProductDetails/>
      },{
        path:"/cart",
        element:<Checkout/>
      }
    ],
  },
  {
    path:"/payment-response",
    element:<OrderConfirmationModal/>
  }
]);
export default router
