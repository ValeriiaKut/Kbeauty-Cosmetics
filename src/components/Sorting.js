import React from 'react';
import { useDispatch } from 'react-redux';
import { sortItems } from '../store/actions';
import '../index.css';

export default function Sorting() {
    const dispatch = useDispatch();

    const handleSortChange = (e) => {
        const sortOrder = e.target.value;
        dispatch(sortItems(sortOrder));
    };

    return (
        <div className="price-filter">
            <label>
                Sortuj według ceny:   
                    <select onChange={handleSortChange} className="custom-select"> 
                    <option value="asc">Od najniższej do najwyższej</option>
                    <option value="desc">Od najwyższej do najniższej</option>
                </select>
            </label>
        </div>
    );
}


