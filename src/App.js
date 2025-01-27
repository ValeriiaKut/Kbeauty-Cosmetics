import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import React, { Component } from "react";
import './index.css';
import itemsData from "./data/item.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: itemsData, // використання даних з JSON
      items: itemsData, 
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }
    const filteredItems = this.state.items.filter(el => el.category === category);
    this.setState({ currentItems: filteredItems });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
