
import React, { Component } from "react";
import { StyleSheet, TouchableHighlight, Text, TextInput, View } from "react-native";

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToJobSeekerHomeScreen = () => {
    this.props.navigation.navigate("JobSeekerHome", this.state);
  };

  goToLoginScreen = () => {
    this.props.navigation.navigate("Login", this.state);
  };

  goToRecruiterHomeScreen = () => {
    this.props.navigation.navigate("RecruiterHome", this.state);
  };

  signUpUser = () => {
    // todo
  };

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.inputContainer]}>
          <TextInput 
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.username}
            placeholder="username"
            style={[styles.inputItem]}
          />
        </View>

        <View style={[styles.inputContainer]}>
          <TextInput 
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            placeholder="password"
            style={[styles.inputItem]}
          />
        </View>

        <View style={[styles.buttonRow]}>
          <View style={[styles.signUpButtonContainer]}>
            <TouchableHighlight
              underlayColor="#ddd"
              style={[styles.signUpButton]}
              onPress={() => this.signUpUser()}>
              <Text style={[styles.signUpButtonText]}>Sign Up</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={[styles.loginRedirectRow, styles.textItem]}>
          <Text 
            style={[styles.link, styles.centerText]}
            onPress={() => this.goToLoginScreen()}>
            Already have an account? Log In.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 25,
    paddingBottom: 15
  },
  centerText: {
    textAlign: "center"
  },
  container: {
    padding: 8,
    paddingTop: 15
  },
  link: {
    color: "blue"
  },
  loginRedirectRow: {
    marginTop: 10
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 5
  },
  inputItem: {
    margin: "auto",
    borderColor: "#333333",
    borderRadius: 5,
    borderWidth: 1.5,
    width: "55%",
    height: 35,
    paddingLeft: 10
  },
  signUpButton: {
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc"
  },
  signUpButtonContainer: {
    borderRadius: 8,
    width: "40%",
    backgroundColor: "#ccc",
    marginTop: 10
  },
  signUpButtonText: {
    fontSize: 18
  },
  textItem: {
    paddingTop: 8
  }
});