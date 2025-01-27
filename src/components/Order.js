import React, { Component } from 'react'
import { IoTrashOutline } from "react-icons/io5";

export class Order extends Component {
  render() {
    return (
      <div className='item'>
      <img 
          src={"./img2/" + this.props.item.img} 
          alt={this.props.item.title || "Item image"}
        />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}</b>
        <IoTrashOutline className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Order