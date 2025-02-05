import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Detail from "./pages/Detail";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/authContext";
import Home from "./pages/Home";
import ShopItems from "./pages/ShopItems";
import Signup from "./Pages/Signup";
import CreatePost from "./components/CreatePost";
import ProtectedLayout from "./layout/ProtectedLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="shop-items" element={<ShopItems />} />
      <Route path="product/:id" element={<Detail />} />
      <Route path="sell-items" element={<ProtectedLayout />}>
        <Route index element={<sellitems />} />
      </Route>
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
