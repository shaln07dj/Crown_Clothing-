import { useContext } from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import { CartContex } from '../../contexts/cart.contex';

import './cart-icon.styles.scss';

const CartIcon =() => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContex);

    const toggleIsCartOpen = () => 
    { console.log("clicked")
        setIsCartOpen(!isCartOpen)
    }
    return( 
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className="item-count">0</span>
    </div>
    )
}

export default CartIcon