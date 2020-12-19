import React, { Component } from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text,Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ProductProvider } from "./context";
import Home from "./components/Home";
import History from "./components/History";

const Stack = createStackNavigator();
class App extends Component {
  state = {};

  render() {
    return (
      <ProductProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Home",
              headerStyle: {
                backgroundColor: 'pink',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: 'black'
            },
            
          }}
            />
            <Stack.Screen
              name="History"
              component={History}
              options={{ title: "History",
              headerStyle: {
                backgroundColor: 'pink',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: 'black' }}
              }
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ProductProvider>
    );
  }
}

export default App;
