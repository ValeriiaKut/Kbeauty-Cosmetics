import React, { Component } from 'react';
// Import categories from the JSON file
import categoriesData from '../data/categories.json';

export class Categories extends Component {
    constructor(props){
        super(props)
        // Set the categories from the imported JSON data
        this.state = {
            categories: categoriesData
        }
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
                        {el.name}
                    </div>
                ))}
            </div>
        )
    }
}

export default Categories;

