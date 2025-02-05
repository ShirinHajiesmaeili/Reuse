import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Detail from "./pages/Detail";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import ShopItems from "./pages/ShopItems";
import Signup from "./Pages/Signup";

import Signin  from "./Pages/Signin";

import SellItems from "./pages/SellItems";
import ProtectedLayout from "./layout/ProtectedLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="shop-items" element={<ShopItems />} />
      <Route path="product/:id" element={<Detail />} />
      <Route path="sell-items" element={<ProtectedLayout />}>
        <Route index element={<SellItems />} />
      </Route>
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
    </Route>
  )
);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
