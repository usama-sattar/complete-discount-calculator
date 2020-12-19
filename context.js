import React, { Component } from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state={
    save: 0,
    price: 0,
    discount: 0,
    history: [{}],
  };
  setPrice = (e) => {
    const regex = /^[0-9\b]+$/;
    let bool = regex.test(e);
    if (bool) {
      this.setState({
        price: e,
      });
    }
  };
  setDiscount = (e) => {
    console.log(e)
    const regex = /^[0-9\b]+$/;
    let bool = regex.test(e);
    if (bool) {
      this.setState({
        discount: e,
      });
    }
  };
  saveData = (total) => {
    let record = {
      total: this.state.price,
      disc: this.state.discount,
      discAmount: parseInt(total),
    };
    console.log(record)
    if (this.state.history.length < 1) {
      this.setState({
        history: [record],
      });
    } else {
      this.setState({
        history: [...this.state.history, record],
      });
    }
  };
  removeItem = (index) => {
    console.log(index)
    let temp = this.state.history
    temp.splice(index,1)
    this.setState({
      history:temp
    }) 
  };
  setNull=()=>{
    this.setState({
      history:[{}]
    })
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          saveAmount: this.state.save,
          totalPrice: this.state.price,
          discount: this.state.discount,
          history: this.state.history,
          setPrice: this.setPrice,
          setDiscount: this.setDiscount,
          saveData: this.saveData,
          removeCell: this.removeItem,
          setNull: this.setNull
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const 
ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
