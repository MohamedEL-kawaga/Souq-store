import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout/Layout"
import Home from "./pages/Home/Home"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import WishList from "./pages/wishList/WishList";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "productDetails/:id",
          element: <ProductDetails />,
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "categories",
          element: <Categories />
        }, {
          path: "wishList",
          element: <WishList />
        }
      ],
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
