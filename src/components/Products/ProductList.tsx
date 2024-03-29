import Product from "./Product"
import { productData } from "../../data/data"

const ProductList = () => {
  return (
    <div className="p-8 lg:p-24 ">
        <h1 className="mb-5 text-2xl font-light">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productData.map((item) => <Product key={item.id} id={item.id} name={item.name} price={item.price}/> )}
        </div>
    </div>
  )
}

export default ProductList