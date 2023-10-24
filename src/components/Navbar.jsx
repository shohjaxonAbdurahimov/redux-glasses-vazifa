import {useSelector} from "react-redux"
function Navbar() {
const {amount} = useSelector((state) =>state.shop )

    return (
      <>
        <div className='max-w-3xl mx-auto px-5 py-5 flex justify-between '>
            <h1 className='font-medium text-2xl'>Home</h1>
            <div className='flex'>
                <span className='block mr-1'> shop</span>
                <span className='badge badge-secondary badge-sm'>{amount}</span>
            </div>
        </div>
            <h1 className='text-center text-4xl mt-10 font-semibold'>Redux store </h1>
        </>
    )
}

export default Navbar