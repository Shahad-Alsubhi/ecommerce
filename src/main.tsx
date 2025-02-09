import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Toaster } from "react-hot-toast";
import CartProvider from "./context/cartContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Suspense fallback="<h1>loading..</>"> */}

    <CartProvider>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
    </CartProvider>
    {/* </Suspense> */}
  </StrictMode>
);
