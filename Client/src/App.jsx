import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Detail from "./pages/Detail.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import Home from "./pages/Home.jsx";
import ShopItems from "./pages/ShopItems.jsx";
import Auth from "./pages/Auth.jsx";
import SellItems from "./pages/SellItems.jsx";
import HowReuseWorks from "./pages/HowReuseWorks.jsx";
import ProtectedLayout from "./layout/ProtectedLayout";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="shop-items" element={<ShopItems />} />
      <Route path="product/:id" element={<Detail />} />
      <Route path="sell-items" element={<ProtectedLayout />}>
        <Route index element={<SellItems />} />
      </Route>
      <Route path="profile" element={<ProtectedLayout />}>
        <Route index element={<Profile />} />
      </Route>
      <Route path="how-reuse-works" element={<HowReuseWorks />} />
      <Route path="auth" element={<Auth />}>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
      </Route>
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
