import { useDispatch } from "react-redux"
import { incrementAmount, decrementAmount, removeItem } from "../redux/features/shopSlice"

function Product({ name, price, amount, image }) {
    const dispatch = useDispatch()
    return (
        <div className='flex justify-between items-center  mb-5    '>

            <img src={image} alt={name + ' glasses '} className='w-40' />
            <div className='w-1/3'>
                <p className='font-medium '>{name}</p>
                <p>$ {price}</p>
                <button onClick={() => dispatch(removeItem({ name }))} className="btn btn-sm btn-warning">remove</button>
            </div>

            <div>
                <div className='flex flex-col items-center '>
                    <p className='font-bold mb-2'>Amount </p>
                    <div className='flex items-center gap-1'>

                        <button onClick={() => {
                            if (amount == 1) {
                                dispatch(removeItem({ name }))
                                return
                            }
                            dispatch(decrementAmount({ name }))
                        }} className='btn btn-sm btn-warning '> - </button>
                        <span className='text-xl font-medium'>  {amount}</span>
                        <button onClick={() => dispatch(incrementAmount({ name }))} className='btn btn-sm btn-warning'> +</button>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Product