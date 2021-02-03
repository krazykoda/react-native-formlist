import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { createEmailAccount, dispatcher } from "../redux/actions/authActions";
import {connect} from "react-redux"

class RegisterScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            email:"",
            password:"",
            comfirm_password: ""
        }

        this.navigator = props.navigation
    }

    register = () => {
      console.log(this.props)
      if(!this.state.email || !this.state.password) {
        return this.props.dispatcher("error", {register: "Please fill the form"})
      }
      if(this.state.password !== this.state.comfirm_password) {
        return this.props.dispatcher("error", {register: "Password does not match"})
      }

      this.props.createEmailAccount(this.state.email, this.state.password)
      
    }

    login = () => {
      this.navigator.navigate("login")
    }
    

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Sign Up</Text>
        </View>

        <View>
          {this.props.appState.errors.register && 
            <Text style={{color: 'red'}}> {this.props.appState.errors.register} </Text>
          }
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="#aaaaaa"
            value={this.state.email}
            onChangeText={(email)=>{
              this.setState({email})
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
            value={this.state.comfirm_password}
            onChangeText={(password)=>{
                this.setState({comfirm_password: password})
            }}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={this.register}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Already have an account?</Text>
          <Text style={styles.signUpText} onPress={this.login}>Log in</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 60,
    marginTop: 100,
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

const mapStateToProps = (state) => {
  return {
    appState: state,
  }
}

const mapDispatchToProps = {
  createEmailAccount,
  dispatcher
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);