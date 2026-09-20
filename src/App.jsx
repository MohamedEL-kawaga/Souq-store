import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout/Layout"
import Home from "./pages/Home/Home"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import Products from "./pages/Products/Products";
import WishList from "./pages/WishList/WishList";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { Bounce, ToastContainer } from "react-toastify";
import { AuthProvider } from "./Context/Auth.context/Auth.context";
import CartContextProvider from "./Context/Cart.context/Cart.context";

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
          path: "products",
          element: <Products />
        }, {
          path: "wishList",
          element: <WishList />
        }, {
          path: "user",
          element: <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
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
      <CartContextProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </CartContextProvider>



      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  )
}

export default App
