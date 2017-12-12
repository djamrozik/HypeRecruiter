
import React, { Component } from "react";
import { StyleSheet, TouchableHighlight, Text, View, ImageBackground, Button } from "react-native";

export default class RecruiterHomeScreen extends Component {
  goToApprovedApplicantsScreen = () => {
    this.props.navigation.navigate("ApprovedApplicantsScreen", this.state);
  };

  goToRejectedApplicantScreen = () => {
    this.props.navigation.navigate("RejectedApplicantsScreen", this.state);
  };

  goToResumeScreen = () => {
    this.props.navigation.navigate("ResumeScreen", this.state);
  };

  render() {
    return (
      <ImageBackground source={require('../../assets/images/Background.png')} style={styles.backgroundImage}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            <Text style={{ fontFamily: "Raleway-Black", fontSize: 40, color: "white" }}>R</Text>
            ECRUITER HOME</Text>
        </View>

        <View style={styles.container}>
        <View style={[styles.buttonRow]}>
            <View style={[styles.ButtonContainer]}>
              <TouchableHighlight
                underlayColor="#ddd"
                style={[styles.Button]}
                /*TODO: onPress={}*/
                >
                <Text style={[styles.ButtonText]}>Scan QR Codes</Text>
              </TouchableHighlight>
            </View>
          </View>

          <View style={[styles.buttonRow]}>
            <View style={[styles.ButtonContainer]}>
              <TouchableHighlight
                underlayColor="#ddd"
                style={[styles.Button]}
                onPress={() => this.goToResumeScreen()}>
                <Text style={[styles.ButtonText]}>Review Applicants</Text>
              </TouchableHighlight>
            </View>
          </View>

          <View style={[styles.buttonRow]}>
            <View style={[styles.ButtonContainer]}>
              <TouchableHighlight
                underlayColor="#ddd"
                style={[styles.Button]}
                onPress={() => this.goToApprovedApplicantsScreen()}>
                <Text style={[styles.ButtonText]}>Approve Applicants</Text>
              </TouchableHighlight>
            </View>
          </View>

          <View style={[styles.buttonRow]}>
            <View style={[styles.ButtonContainer]}>
              <TouchableHighlight
                underlayColor="#ddd"
                style={[styles.Button]}
                onPress={() => this.goToRejectedApplicantScreen()}>
                <Text style={[styles.ButtonText]}>Reject Applicants</Text>
              </TouchableHighlight>
            </View>
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
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 10,
    paddingBottom: 10,
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
  whiteColor: {
    color: "white"
  },
  buttonToggleLabelText: {
    fontSize: 14,
    fontFamily: "Raleway-Light"
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
  errorRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 14
  },
  errorText: {
    color: "red"
  },
  flexGrow: {
    flexGrow: 1
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: 'rgba(76,76,76,.37)',
    marginTop: 25
  },
  inputItem: {
    margin: "auto",
    borderColor: "transparent",
    borderRadius: 50,
    fontSize: 14,
    paddingLeft: 30,
    //underlineColorAndroid : "none",
    fontFamily: "Raleway-Thin",
    width: "70%",
    height: 60,
    color: "white"
  },
  link: {
    color: "#FFFFFF",
    backgroundColor: "transparent",
    fontFamily: "Raleway-Light"
  },
  Button: {
    borderRadius: 50,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7178C4"
  },
  ButtonContainer: {
    marginTop: 20,
    borderRadius: 50,
    width: "50%",
    backgroundColor: "#ccc",
    marginTop: 10
  },
  ButtonText: {
    fontSize: 24,
    fontFamily: "Raleway-Light",
    color: "white",
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
  headerContainer: {
    flexDirection: "row",    
    justifyContent: "center",
    paddingTop: 40,    
  },
  headerText: {
    fontSize: 40,
    fontFamily: "Raleway-Thin",
    color: "white",
    backgroundColor: "transparent",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10
  }
});

