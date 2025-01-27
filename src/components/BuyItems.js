import React from 'react';
import { useSelector } from 'react-redux';
import '../index.css';

export default function BuyItems({ onClose }) {
    const orders = useSelector((state) => state.app.orders);
    let summa = orders.reduce((acc, el) => acc + parseFloat(el.price), 0);

    const handleClose = (e) => {
        e.preventDefault(); 
        if (onClose) {
            onClose(); 
        }
    };

    return (
        <div className="buy-items-overlay">
            <div className="buy-items-modal">
                <h2>Składanie zamówienia</h2>
                {orders.length > 0 ? (
                    orders.map(order => (
                        <div key={order.id} className="order-item">
                            <p>{order.title} - {order.price}</p>
                        </div>
                    ))
                ) : (
                    <p>Twój koszyk jest pusty</p>
                )}
                <form>
                    <input type="text" placeholder="Twoje imię" required />
                    <input type="text" placeholder="Twój numer telefonu" required />
                    <input type="text" placeholder="Adres dostawy" required />
                    <div className="payment-container">
                        <p>Płatność:</p>
                        <select name="payment">
                            <option>Gotówka</option>
                            <option>Karta</option>
                        </select>
                        <p className="summa1">Do zapłaty: {new Intl.NumberFormat().format(summa)} zł</p>
                    </div>
                    <div className="button-container">
                        <button type="submit">Potwierdź zamówienie</button>
                        <button onClick={handleClose}>Zamknij</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
