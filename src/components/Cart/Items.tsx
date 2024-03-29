import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useCart } from "../../contexts/CartContext";


type ItemsProps = {
    id : number,
    name : string,
    price :number,
    quantity : number
}

const Items = (props : ItemsProps) => {

    const {dispatch} = useCart()

    const addQuantity = (id:number,name : string,price:number) => {
        dispatch({ type: 'INCREMENT_ITEM', payload: { id,name,price,quantity:0} });
    }
    const removeQuantity = (id:number,name : string,price:number) => {
        dispatch({ type: 'DECREMENT_ITEM', payload: { id,name,price,quantity:0} });
    }
    const removeItem = (id:number) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    }

    


  return (
   
        <div className="flex justify-between items-center border border-t-0 border-x-0 border-b-orange-500 p-2 mb-4">
            <span className="text-lg font-semibold">{props.name}</span>
            <button className="border border-orange-500 text-black px-2 rounded-lg" onClick={()=>removeItem(props.id)}>remove</button>
            <div className="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-orange-500" onClick={()=>addQuantity(props.id,props.name,props.price)}>
            <FaPlus className="w-3 h-2 me-2"/>
            </button>
            <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
            {props.quantity}
            </button>
            <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-orange-500" onClick={()=>removeQuantity(props.id,props.name,props.price)}>
                <FaMinus className="w-3 h-3 me-2"/>
            </button>
            </div>
        </div>
  
  )
}

export default Items





// const cartReducer = (state: CartState, action: Action): CartState => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const existingIndex = state.cart.findIndex(item => item.id === action.payload.id);
//       if (existingIndex !== -1) {
//         const updatedCart = [...state.cart];
//         updatedCart[existingIndex].quantity += action.payload.quantity;
//         return { ...state, cart: updatedCart };
//       } else {
//         return { ...state, cart: [...state.cart, action.payload] };
//       }
//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         cart: state.cart.filter(item => item.id !== action.payload),
//       };
//     default: 
//       return state;
//   }
// };