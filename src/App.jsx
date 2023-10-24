import React from "react"
import Navbar from "./components/Navbar";
import ShopProduct from "./components/ShopProduct"

import { useSelector, useDispatch } from "react-redux"
import { updateTotal } from "./redux/features/shopSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch()
  const shop  = useSelector((state) => state.shop)
  useEffect(() => {
    dispatch(updateTotal())
  }, [shop , dispatch])

  return (
    <div>
      <Navbar />
      <ShopProduct />
    </div>
  )
}

export default App