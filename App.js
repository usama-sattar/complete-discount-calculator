import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Buttons from "./components/buttons.jsx";

class App extends Component {
  state = {
    guessedNumber: "",
    selectedNumber: "",
    message: "",
    turns: 0,
    points: 0,
  };

  componentDidMount() {
    this.setState({
      guessedNumber: Math.ceil(Math.random() * 100),
    });
  }
  evaluate = (e) => {
    if (e === "=") {
      this.calculate();
    } else if (e === "C") {
      this.cancel();
    } else if (e === "B") {
      this.back();
    } else {
      let temp = this.state.selectedNumber;
      this.setState({
        selectedNumber: temp + e,
      });
    }
  };
  calculate = (e) => {
    if (this.state.selectedNumber == this.state.guessedNumber) {
      this.setState({
        message: "you are right",
        points: this.state.points + 10,
        guessedNumber: Math.ceil(Math.random() * 100),
      });
    } else {
      this.setState({
        message: "you are wrong",
        turns: this.state.turns + 1,
      });
    }
  };
  cancel = () => {
    this.setState({
      selectedNumber: "",
      message: "",
    });
  };
  back = () => {
    return this.state.selectedNumber.length > 0
      ? this.setState({
          message: "",
          selectedNumber: this.state.selectedNumber.slice(0, -1),
        })
      : null;
  };
  hint = () => {
    let temp = parseInt(this.state.guessedNumber, 10);
    let min = temp - 5;
    let max = temp + 5;
    this.setState({
      message: `the number lies between ${min} and ${max}`,
    });
  };
  playAgain = () => {
    this.setState({
      message: "",
      points: 0,
      turns: 0,
      selectedNumber: "",
      guessedNumber: Math.ceil(Math.random() * 100),
    });
  };
  render() {
    return (
      <View>
        <Buttons
          exp={this.state.selectedNumber}
          guess={this.state.guessedNumber}
          msg={this.state.message}
          totalTurns={this.state.turns}
          selected={this.state.selectedNumber.length}
          points={this.state.points}
          evaluateExpression={this.evaluate}
          hint={this.hint}
          playAgain={this.playAgain}
        />
      </View>
    );
  }
}
export default App;
