import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ProductList from "../components/Products/ProductList"
import Cart from "../components/Cart/Cart"
import Navbar from "../components/Navbar/Navbar"
import { CartProvider } from "../contexts/CartContext"


const AllRoutes = () => {

    

    const router = createBrowserRouter([
        {
            path : '/',
            element : <Navbar/>,
            children : [
                {path : '/',element : <ProductList/>},
                {path : '/cart',element : <Cart/>}
            ]
        }
       
    ])

  return (

        <CartProvider>
            <RouterProvider router={router}/>
        </CartProvider>
  )
}

export default AllRoutes