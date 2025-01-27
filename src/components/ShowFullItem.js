import React from 'react';
import { useDispatch } from 'react-redux';
import { addToOrder } from '../store/actions';
import '../index.css';


export default function ShowFullItem({ item, onShowItem }) {
    const dispatch = useDispatch();

    if (!item) {
        return <div>Niedostępny produkt</div>;
    }

    return (
        <div className="full-item">
          <div className="item-content"> 
            <div>
             <img
              src={`./img2/${item.img}`}
              alt={item.title || 'Item image'}
              onClick={() => onShowItem(null)}
             />
             <h2>{item.title}</h2>
             <p>{item.desc}</p>
             <b>{item.price}</b>
             </div>
         </div>
         <div className="add-to-card" onClick={() => dispatch(addToOrder(item))}>+</div>
      </div>

    );
}

