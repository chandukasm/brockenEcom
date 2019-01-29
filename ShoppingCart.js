import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView,ScrollView } from "react-native";
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
import { Left, Right, Icon } from "native-base";
//import Bill from "./containers/Bill";

class ShoppingCart extends Component {
  render() {
    return <AppDrawerNavigator />;
  }
}
export default ShoppingCart;

/*const AppDrawerNavigator = createDrawerNavigator({ 
    Homex: AppStackNavigator,
    
})


/*const AppSwitchNavigator = createSwitchNavigator({
    rout1:AppStackNavigator,
})*/

/*const custom = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);*/

const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart: CartScreen,
    qr: QrScreen,
    bill: BillScreen,

    logout: LogOutScreen

    //bill:BillScreen
  },
  {
    
    navigationOptions: {
      headerTitle: "            welcome to Elysium",
      headerRight: <ShoppingCartIcon />
      //headerRight:"Left"
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    screen: AppStackNavigator,
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart: CartScreen,
    qr: QrScreen,
    bill: BillScreen,

    logout: LogOutScreen
  },
  {
    contentOptions: {
      activeTintColor: "orange"
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
