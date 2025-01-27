import React, { useState } from 'react';
import { TfiBriefcase } from 'react-icons/tfi';
import Order from './Order';


export default function Header(props) {
  const [cartOpen, setCartOpen,] = useState(false);
  const showOrders = () => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return( <div>
      {props.orders.map(el => (
      <Order key={el.id} item={el} onDelete={props.onDelete} />
    ) )}
    <p className='summa'>Razem: {new Intl.NumberFormat().format(summa)} zł </p>
    </div>)
  }
  
  const showNothing = () => {
    return ( <div className='empty'>
      <h2>Twój koszyk jest pusty</h2>
    </div>
  
    )
  }

  return (
    <header>
      <div>
        <span className='logo'>KBeauty Cosmetics</span>
        <ul className='nav'>
          <li>O Nas</li>
          <li>Dostawa</li>
          <li>Kontakt</li>
        </ul>
        <TfiBriefcase
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen ? 'active' : ''}`}
        />
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
                 showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}
