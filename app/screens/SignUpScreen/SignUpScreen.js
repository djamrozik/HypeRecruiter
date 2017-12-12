
import React, { Component } from "react";
import { StyleSheet, TouchableHighlight, Text, TextInput, View, ImageBackground, Image  } from "react-native";
import { signUpJobSeeker, signUpRecruiter } from "./../../api/auth.js";

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singUpAs: "jobSeeker"
    };
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
    let user = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password
    };

    let signUp = this.state.signUpAs === "jobSeeker" ?
      signUpJobSeeker : signUpRecruiter;

    let goToScreen = this.state.singUpAs === "jobSeeker" ?
      this.goToJobSeekerHomeScreen : this.goToRecruiterHomeScreen;

    signUp(user).then(response => {
      goToScreen();
    }).catch(error => {
      console.log("Error signing up:", error);
    });
  };

  render() {
    let jobSeekerButtonStyle = this.state.singUpAs === "jobSeeker" ?
      styles.buttonToggleItemSelected : styles.buttonToggleItemNotSelected;

    let recruiterButtonStyle = this.state.singUpAs === "recruiter" ?
      styles.buttonToggleItemSelected : styles.buttonToggleItemNotSelected;

    return (
      <ImageBackground source={require('../../assets/images/Background.png')} style={styles.backgroundImage}>
      <View style={[styles.container]}>


        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> 
            <Text style={{fontFamily : "Raleway-Black",fontSize: 40,color : "white"}}>H</Text>
            YPERCRUITER</Text>
        </View>

        <View style={styles.buttonToggleRow}>
          <View style={[styles.pullRight, styles.flexGrow]}>
            <TouchableHighlight 
              style={[styles.buttonToggleItem, jobSeekerButtonStyle]}
              onPress={() => this.setState({singUpAs: "jobSeeker"})}>
              <Text>Job Seeker</Text>
            </TouchableHighlight>
          </View>

          <View style={[styles.pullLeft, styles.flexGrow]}>
            <TouchableHighlight 
              style={[styles.buttonToggleItem, recruiterButtonStyle]}
              onPress={() => this.setState({singUpAs: "recruiter"})}>
              <Text>Recruiter</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={[styles.inputContainer]}>
          <TextInput 
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholder="email"
            autoCapitalize="none"
            style={[styles.inputItem]}
          />
        </View>

        <View style={[styles.inputContainer]}>
          <TextInput 
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            placeholder="password"
            autoCapitalize="none"
            secureTextEntry={true}
            style={[styles.inputItem]}
          />
        </View>

        <View style={[styles.inputContainer]}>
          <TextInput 
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.name}
            placeholder="full name"
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
      </ImageBackground>
      
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
  buttonToggleItem: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 6,
    paddingBottom: 6,
    width: 130,
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonToggleItemSelected: {
    backgroundColor: "#7178C4",
  },
  buttonToggleItemNotSelected: {
    backgroundColor: "#D8D8D8",
    

  },
  buttonToggleLabel: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
    paddingBottom: 14
  },
  buttonToggleLabelText: {
    fontSize: 11,
    color : "white",
    fontFamily : "Raleway-Thin"
  },

  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  }, 
  buttonToggleRow: {
    flexDirection: "row",
    marginTop: 30,
    paddingBottom: 8
  },
  centerText: {
    textAlign: "center"
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexGrow: {
    flexGrow: 1
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor : 'rgba(76,76,76,.37)',
    marginTop : 25
  },
  inputItem: {
    margin: "auto",
    borderColor: "transparent",
    borderRadius: 50,
    fontSize : 14,
    paddingLeft : 30,
    //underlineColorAndroid : "none",
    fontFamily : "Raleway-Thin",
    width: "70%",
    height: 60,
    color : "white"
  },
  link: {
    color: "#FFFFFF",
    backgroundColor : "transparent",
    fontFamily : "Raleway-Light"
  },
  loginButton: {
    borderRadius: 50,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7178C4"
  },
  signUpButtonContainer: {
    marginTop : 20,
    borderRadius: 50,
    width: "50%",
    backgroundColor: "#ccc",
    marginTop: 10
  },
  signUpButtonText: {
    fontSize: 24,
    fontFamily : "Raleway-Light",
    color : "white",
  },
  pullLeft: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  pullRight: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  textItem: {
    paddingTop: 8
  },
  signUpRedirectRow: {
    marginTop: 10
  },
  headerContainer : {
    
  },
  headerText : {
     fontSize: 40,
     fontFamily : "Raleway-Thin",
     color : "white",
     backgroundColor : "transparent",
  },
  iconContainer : {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom : 10
  }
});
