
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Detail from "./Pages/Detail";
import { CartProvider } from './Context/CartContext';
import Searchbar from "./Components/Searchbar";
import Chatbot from "./Components/Chatbot";
import Home from "./Pages/Home";
//import Signup from "./Pages/Signup";
import Cart from "./Components/Cart";


function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/product/:id" element={<Detail />} />
                        <Route path="/searchbar" element={<Searchbar />} />
                        <Route path="/cart" element={<Cart />} />
                        {/*<Route path="/signup" element={<Signup />} />*/}
                    </Route>
                   
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;