import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home(){
    const navigate=useNavigate()
    return( <>
    <p>Home</p>
    <button onClick={()=>navigate('ordersummary')}>Place Order</button>
    </>)
}

export default Home