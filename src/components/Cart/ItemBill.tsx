type BillProps = {
    name : string,
    price : number,
    quantity : number
}


const ItemBill = (props : BillProps) => {

    const totalPrice = props.quantity * props.price

  return (
    <div className="flex justify-between px-6 py-2 font-extralight"> 
        <span className="text-sm">{props.name} x {props.quantity}</span>
        <span className="text-sm">{totalPrice}</span>
    </div>
  )
}

export default ItemBill