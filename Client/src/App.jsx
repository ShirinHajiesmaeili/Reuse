import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Detail from "./pages/Detail";
import { CartProvider } from "./context/CartContext";
import Home from "./Pages/Home";
import ShopItems from "./pages/ShopItems";
import Signup from "./Pages/Signup";
import CreatePost from "./components/CreatePost";
// import ProtectedLayout from "../layout/ProtectedLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="shop-items" element={<ShopItems />} />
      <Route path="product/:id" element={<Detail />} />
      <Route path="create" element={<ProtectedLayout />}>
        <Route index element={<CreatePost />} />
      </Route>
      <Route path="signup" element={<Signup />} />
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
