import React from 'react'
import './cartpage.css';

import CartHead from '../../../usercomponents/ordercomponents/carthead'
import CartBody from '../../../usercomponents/ordercomponents/cartbody'

export default function CartPage() {
  return (
    <div className='cartpg'>

    <CartHead />
    <CartBody />
    
    </div>
  )
}
