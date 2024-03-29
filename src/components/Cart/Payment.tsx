import { useCart } from "../../contexts/CartContext"

const Payment = () => {

    const {totalPrice} = useCart()
  
    return (
   <>
        <span className="text-lg font-semibold">Total Amount : {totalPrice}</span>
        <button className="bg-orange-500 text-white p-1 px-2 rounded-xl">Pay</button>
    </>
  )
}

export default Payment