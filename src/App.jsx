
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Products } from "./Products"
import { Contact } from "./Contact"
import { SingleProduct } from "./SingleProduct"
import { ErrorPage } from "./ErrorPage"
import Header from "./components/Header"
import Cart from "./Cart"
function App() {
 const router = createBrowserRouter([
  {path:"/",element:<Header/>, errorElement:<ErrorPage/>,children:[
  {index:true , element:<Home/>},
  {path:"/about", element:<About/>},
  {path:"/contact", element:<Contact/>},
  {path:"/products", element:<Products/>},
  {path:"/products/:id", element:<SingleProduct/>},
  {path:"/cart", element:<Cart/>}
  ]}
 ])

  return <RouterProvider router={router}/>
}

export default App
