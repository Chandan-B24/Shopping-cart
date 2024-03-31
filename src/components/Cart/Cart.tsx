import { useCart } from "../../contexts/CartContext"
import Items from "./Items"
import Payment from "./Payment"



const Cart = () => {

    const {state} = useCart()

  return (
    <div className="p-8 lg:p-24">
         <h1 className="mb-5 text-2xl font-light">Cart</h1>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
         <div className="mt-5 bg-gray-100 p-6">
           {state.cart.length > 0 ? (state.cart.map((item) => <Items name={item.name} quantity={item.quantity} key={item.id} id={item.id} price={item.price}/>)) : <span className="text-lg font-semibold">You cart is empty please add items</span>}
        </div>
        <div className="bg-gray-100 mt-5 p-6 flex flex-col">
           <Payment/>
        </div>
         </div>
    </div>
  )
}

export default Cart