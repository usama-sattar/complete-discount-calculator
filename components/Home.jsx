import React, { Component } from "react";
import "react-native-gesture-handler";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Header,
  TouchableHighlight,
} from "react-native";
import { ProductConsumer } from "../context";
class Home extends Component {
  //it worked fine once and the other time does not, dont know why thats why created button in bottom.. may be server error

  // componentDidMount() {
  //   <ProductConsumer>
  //     {(value) => {
  //       return this.props.navigation.setOptions({
  //         headerRight: () => (
  //           <TouchableOpacity
  //             style={styles.openButton}
  //             activeOpacity={1}
  //             onPress={() => {
  //               this.props.navigation.navigate("History");
  //             }}
  //           >
  //             <Text style={{ color: "white" }}>Show History</Text>
  //           </TouchableOpacity>
  //         ),
  //       });
  //     }}
  //   </ProductConsumer>;
  // }
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          let saveTotal =
            Math.round(value.totalPrice * (value.discount / 100) * 100) / 100;
          let total =
            value.totalPrice -
            Math.round(value.totalPrice * (value.discount / 100) * 100) / 100;
          return (
            <View style={styles.container}>
              <View style={{ flex: 0.5, justifyContent: "flex-end" }}>
                <Text style={styles.title}>Amount:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Original Amount"
                  onChangeText={(text) => value.setPrice(text)}
                />
                <Text style={styles.title}>Discount %</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter % discount"
                  onChangeText={(text) => value.setDiscount(text)}
                />
              </View>
              <View style={{ flex: 0.4 }}>
                <Text style={styles.title}>{`You Save: ${saveTotal}`}</Text>
                <Text style={styles.title}>{`Final Price: ${total}`}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={styles.openButton}
                  onPress={(total) => value.saveData(total)}
                >
                  <Text style={{ color: "white" }}>Save Calculation</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.openButton}
                  activeOpacity={1}
                  onPress={() => {
                    this.props.navigation.navigate("History");
                  }}
                >
                  <Text style={{ color: "white" }}>Show History</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </ProductConsumer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  mainView: {
    flex: 1,
    alignItems: "center",
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    textAlign: "center",
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
    backgroundColor: "maroon",
    borderRadius: 20,
    padding: 10,
  },
});

export default Home;
