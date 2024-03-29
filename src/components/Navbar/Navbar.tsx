import { Link, NavLink, Outlet } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";


const Navbar = () => {
  return (
   <>
   <nav className="w-full h-16 bg-white shadow rounded border-2 border-b-orange-500 flex justify-between items-center p-8">
        <h1 className="text-2xl font-semibold"><Link to='/'>Products Arena</Link></h1>
        <div className="flex justify-center items-center gap-6 px-8">
            <NavLink to="/" className={({isActive})=>isActive ? 'bg-orange-500 text-white p-1 px-2 rounded-xl flex items-center gap-2' : 'flex items-center gap-2'}><IoHomeOutline/>Home</NavLink>
            <NavLink to="/cart" className={({isActive})=>isActive ? 'bg-orange-500 text-white p-1 px-2 rounded-xl flex items-center gap-2' : 'flex items-center gap-2'}><BsCart3/>Cart</NavLink>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar