import { useCart } from "../../contexts/CartContext";
import { toast, Bounce, ToastContainer, } from 'react-toastify'; // Import Bounce from react-toastify
import 'react-toastify/dist/ReactToastify.css';
import ItemBill from "./ItemBill";

const Payment = () => {
    const { state,totalPrice } = useCart();

    const handleToast = () => {
        
      if(totalPrice > 0) {
        toast.success('Thanks for shopping ', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
      }
      else{
        toast.error('Please add items to the cart', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
      });
      }
        
    }

    return (
        <>
            <span className="text-lg font-semibold mb-2">Total Amount : {totalPrice}</span>
            {state.cart.length > 0 && <div className="flex justify-between px-6 py-2"> 
              <span className="text-sm font-bold">items</span>
              <span className="text-sm font-bold">price</span>
            </div>}
           {state.cart.map((item) => <ItemBill key={item.id} name={item.name} price={item.price} quantity={item.quantity}/>)}
            <button className="bg-orange-500 text-white p-1 px-2 rounded-xl" onClick={handleToast}>Pay</button>
            <ToastContainer />
        </>
    );
}

export default Payment;
