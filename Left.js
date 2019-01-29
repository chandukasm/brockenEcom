import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";
import HomeScreen from "./containers/HomeScreen";
import ElectronicsScreen from "./containers/ElectronicsScreen";
import BooksScreen from "./containers/BooksScreen";
import ShoppingCartIcon from "./containers/ShoppingCartIcon";
import CartScreen from "./containers/CartScreen";
import PointsScreen from "./containers/PointsScreen";
import LogOutScreen from "./containers/LogOutScreen";
import BillScreen from "./containers/BillScreen";
import QrScreen from "./containers/QrScreen";
//import Bill from "./containers/Bill";

export default class Left extends Component {
  render() {
    return <AppDrawerkNavigator />;
  }
}


/*const AppDrawerNavigator = createDrawerNavigator({ 
    Homex: AppStackNavigator,
    
})


/*const AppSwitchNavigator = createSwitchNavigator({
    rout1:AppStackNavigator,
})*/

const AppDrawerkNavigator = createDrawerNavigator (
  {
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart: CartScreen,
    qr: QrScreen,
    bill: BillScreen,
    logout: LogOutScreen,
   
    //bill:BillScreen
  },
 
);


/*const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart: CartScreen,
    qr: QrScreen,
    bill: BillScreen,
    logout: LogOutScreen,
   
    //bill:BillScreen
  }
);
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
