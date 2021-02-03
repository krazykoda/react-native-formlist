import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ContactsScreen from "./screen/ContactsScreen";
import Contact from "./components/Contact";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import store from "./redux/store";
import { dispatcher } from "./redux/actions/authActions";

const Stack = createStackNavigator();

export default function App() {
  const [state, setState] = React.useState()
  store.subscribe(() => {
    setState(store.getState())
  })

  React.useEffect(() => {
    setState(store.getState())
  },[])
  
  return (
    // <View style={styles.container}>
    <Provider store={store}>
      <NavigationContainer>
        {
          !state?.loggedin? (
            <Stack.Navigator>
              <Stack.Screen 
                options={{
                  header: () => null,
                }} 
                name="login" 
                component={LoginScreen} 
              />
            
              <Stack.Screen 
                options={{
                  header: () => null,
                }} 
                name="register" 
                component={RegisterScreen} 
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen 
                options={{
                  headerRight: () => 
                    <TouchableOpacity 
                      style={{marginRight: 30}}
                      onPress={() => store.dispatch({type: "log_out"})}
                    >
                      <Text>Log Out</Text>
                    </TouchableOpacity>
                }}
                name="contact" 
                component={ContactsScreen} 
              />
            </Stack.Navigator>
          )
        }
        
      </NavigationContainer>
    </Provider>  
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
