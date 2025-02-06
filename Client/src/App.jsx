import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Detail from './pages/Detail';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/authContext';
import Home from './pages/Home';
import ShopItems from './pages/ShopItems';
import Auth from './Pages/Auth';
//import CreatePost from './Components/CreatePost';
import ProtectedLayout from './layout/ProtectedLayout';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='shop-items' element={<ShopItems />} />
      <Route path='product/:id' element={<Detail />} />
      <Route path='createpost' element={<ProtectedLayout />}>
       {/* <Route index element={<CreatePost />} />*/}
      </Route>
      <Route path='auth' element={<Auth />}>
        <Route index element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
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