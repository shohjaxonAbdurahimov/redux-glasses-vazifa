import { useSelector } from "react-redux"
import Product from "./Product"
function ShopProduct() {
  const { products, total } = useSelector((state) => state.shop)
  return (
    <div className="">
      <div className="mt-10 max-w-3xl mx-auto  justify-between ">
        {products.map((product) => {
          const { name, price, amount, image } = product

          return <Product
            key={name}
            name={name}
            price={price}
            amount={amount}
            image={image} />
        })}
      </div>
      <div className="max-w-2xl flex justify-between mx-auto py-3">
        <h1 className="text-2xl">Total :</h1>
        <h2 className="text-2xl ">$ {total.toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default ShopProduct