import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Header,
  Modal,
  TouchableHighlight,
} from "react-native";

class App extends Component {
  state = {
    save: 0,
    price: 0,
    discount: 0,
    original:0,
    modalVisible: false,
    history: [{
     
    }],
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
    const regex = /^[0-9\b]+$/;
    let bool = regex.test(e);
    if (bool) {
      this.setState({
        discount: e,
      });
    }
  };
  printPrice = () => {
    let saveTotal = this.state.price * (this.state.discount / 100);
    let total =
      this.state.price - this.state.price * (this.state.discount / 100);
    return this.setState({
      price: total,
      save: saveTotal,
    });
  };
  saveData=(total)=>{
    this.setState({
      history:[...this.state.history,{
        Original_Price:this.state.price,
        Discount:this.state.discount,
        Price_after: total
      }]
    })
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    let saveTotal =
      Math.round(this.state.price * (this.state.discount / 100) * 100) / 100;
    let total =
      this.state.price -
      Math.round(this.state.price * (this.state.discount / 100) * 100) / 100;
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          
        >
          <View style={styles.mainView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{this.state.history.map(record => 
            <Text> {`Original: ${record.Original_Price}, after disc: ${record.Price_after}, Discount: ${record.Discount}`}</Text>

              )}
              </Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <View style={styles.header}>
          <Text style={{ fontSize: 25, color: "white" }}>
            Discount Calculator
          </Text>
        </View>
        <View style={{ flex: 0.5, justifyContent: "flex-end" }}>
          <Text style={styles.title}>Amount:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Original Amount"
            onChangeText={(text) => this.setPrice(text)}
          />
          <Text style={styles.title}>Discount %</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter % discount"
            onChangeText={(text) => this.setDiscount(text)}
          />
        </View>
        <View style={{ flex: 0.4 }}>
          <Text style={styles.title}>{`You Save: ${saveTotal}`}</Text>
          <Text style={styles.title}>{`Final Price: ${total}`}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.saveData(total);
          }}
        >
          <Text style={styles.textStyle}>Save Calculation</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Show History</Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "cyan",
  },
  mainView: {
    flex: 1,
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  header: {
    paddingTop: 40,
    backgroundColor: "black",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    width: 200,
    height: 40,
    backgroundColor: "pink",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    paddingLeft: 4,
    fontSize: 15,
  },
  title: {
    color: "purple",
    fontSize: 20,
    marginTop: 12,
  },
  openButton: {
    backgroundColor: "lightblue",
    borderRadius: 20,
    padding: 10,
  },
});
export default App;
