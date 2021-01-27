import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";

class RegisterScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            username:"",
            password:"",
            comfirm_password: ""
        }

        this.navigator = props.navigation
    }

    register = () => {
      console.log(this.state, this.navigator)
      this.navigator.navigate("contact")
    }
    

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Sign Up</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#aaaaaa"
            value={this.state.username}
            onChangeText={(username)=>{
              this.log(username)
              this.setState({username})
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password)=>{
                this.setState({password})
            }}
          />
            <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password)=>{
                this.setState({password})
            }}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={this.register}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Don't have an account?</Text>
          <Text style={styles.signUpText}>Sign up</Text>
        </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 60,
    marginTop: 120,
  },

  loginText: {
    fontSize: 50,
    color: "#58269e",
  },

  loginTextContainer: {
    marginBottom: 30
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#58269e",
    fontSize: 20,
    height: 20,
    marginTop:70
  },

  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 3,
    color: "#02a6cf",
  },

  button: {
    height: 50,
    backgroundColor: "#58269e",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 80,
  },

  buttonText: {
    color: "white",
    fontSize: 27,
  },

  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  noAccountText: {
    marginRight: 10,
    fontSize: 16,
  },

  signUpText: {
    fontSize: 16,
    color: "#58269e",
  },
});

export default RegisterScreen;