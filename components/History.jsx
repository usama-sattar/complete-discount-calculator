import React, { Component } from "react";
import "react-native-gesture-handler";
import { DataTable } from "react-native-paper";
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
import { ProductConsumer } from "../context";

class History extends Component {
  state = {};
  
  componentDidMount(){
    <ProductConsumer>
      {
        value => {
          this.props.navigation.setOptions({
            headerRight: () => (
              <TouchableOpacity style={{...styles.remove, width:60,height:30,marginRight:20,}} onPress={() => value.setNull()} ><Text style={{color:'white'}}>Clear</Text></TouchableOpacity>
            ),
          });
        }
      }
    </ProductConsumer>
  }
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          
          return (
            <DataTable>
              <DataTable.Header>
                <DataTable.Title numeric >Original Price</DataTable.Title>
                <DataTable.Title numeric>Discount</DataTable.Title>
                <DataTable.Title numeric>Final Price</DataTable.Title>
                <DataTable.Title style={{ marginLeft: 20 }}>
                  Delete
                </DataTable.Title>
              </DataTable.Header>
              {value.history.map((data, index) =>( 
                <View>
                  {console.log(index)}
                  {console.log(data)}
                  {index===0?null:
                  <DataTable.Row style={{ paddingLeft: 0 }}>
                    <DataTable.Cell numeric>{data.total}</DataTable.Cell>
                    <DataTable.Cell numeric>{data.disc}</DataTable.Cell>
                    <DataTable.Cell numeric>
                      {
                       data.total -
                          Math.round(
                            data.total * (data.disc / 100) * 100
                          ) /
                            100
                       }
                    </DataTable.Cell>
                  
                    <DataTable.Cell style={{ marginLeft: 30 }}>
                      <TouchableOpacity
                        style={styles.remove}
                        onPress={() => value.removeCell(index)}
                      >
                        <Text style={styles.cross}>X</Text>
                      </TouchableOpacity>
                    </DataTable.Cell>
                  </DataTable.Row>
        }
                </View>
              ))}

              <DataTable.Pagination
                page={1}
                numberOfPages={3}
                onPageChange={(page) => {
                  console.log(page);
                }}
                label="1 of 1"
              />
            </DataTable>
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
    backgroundColor: "cyan",
  },
  remove: {
    backgroundColor: "maroon",
    width: 25,
    height: 25,
    textAlign: "center",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cross: {
    alignSelf: "center",
    color: "white",
    textAlign: "center",
  },
});

export default History;
