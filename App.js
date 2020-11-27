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
    modalVisible: false,
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
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

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
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Show History</Text>
        </TouchableHighlight>
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
  header: {
    paddingTop: 40,
    backgroundColor: "black",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 20,
  },
  openButton: {
    backgroundColor: "lightblue",
    borderRadius: 20,
    padding: 10,
  },
});
export default App;
