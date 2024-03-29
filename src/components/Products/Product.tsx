import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { useCart } from "../../contexts/CartContext";

type ProductProps = {
    id: number;
    name: string;
    price: number;
}

const Product = (props: ProductProps) => {

    const { state, dispatch } = useCart();
    const isItemExist = state.cart.some(item => item.id === props.id)
    const [addCart, setAddCart] = useState<boolean>(isItemExist);

    useEffect(() => {
        if(isItemExist){
            setAddCart(true)
        }
    }, [isItemExist]);

    const handleAddCart = (id: number, name: string, price: number) => {
        dispatch({ type: 'NEW_ITEM', payload: { id, name, price, quantity: 1 } });
        setAddCart(true);
    }


    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <span className="text-xl font-semibold">{props.name}</span>
                    <span className=" text-d-sm font-light">Price : ₹ {props.price}</span>
                </div>
                <div>
                    <button disabled={addCart} className={`p-1 px-2 ${addCart ? 'bg-orange-700 cursor-not-allowed' : 'bg-orange-500'} text-white rounded-lg flex items-center gap-2`} onClick={() => handleAddCart(props.id, props.name, props.price)}>
                        {addCart ? <><FaCheck />Added</> : <><FaPlus />Add to cart</>}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
