import Navbar from "./components/navbar";
import Content from "./components/content";
import Contact from "./components/contact";
import Login from "./components/login";
import Signup from "./components/signup";
import { Products } from "./constants";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./components/root";
import Shop from "./components/shop";
import Shoe from "./components/shoe";
import Shirt from "./components/shirt";
import Watch from "./components/watch";
import Bag from "./components/bag";
import Tshirt from "./components/tshirt";
import BagShop from "./constants/categories/bagshop";
import ShoeShop from "./constants/categories/shoeshop";
import ShirtShop from "./constants/categories/shirtshop";
import WatchShop from "./constants/categories/watchshop";
import TShirtShop from "./constants/categories/tshirtshop";
import Addcart from "./components/cart";
import Cart from "./components/cart";
import { useState } from "react";
import Profile from "./components/Profile";

const App = () => {
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "home",
          element: <Content />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "log-in",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "shop",
          element: <Shop cart={cart} setCart={setCart} />,
        },
        {
          path: "shoe",
          element: <ShoeShop />,
        },
        {
          path: "bag",
          element: <BagShop />,
        },
        {
          path: "shirt",
          element: <ShirtShop />,
        },
        {
          path: "watch",
          element: <WatchShop />,
        },
        {
          path: "tshirt",
          element: <TShirtShop />,
        },
        {
          path: "cart",
          element: <Cart cart={cart} setCart={setCart} />,
        },
        {
          path: "Profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return (
    <main className="w-auto h-auto">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
