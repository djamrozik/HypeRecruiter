
import React, { Component } from "react";
import { StyleSheet, TouchableHighlight, Text, View, ImageBackground, Button } from "react-native";

export default class RejectedApplicantsScreen extends Component {
  constructor(props) {
    super(props);

    // dummy data for now
    this.state = {
      currentApplicantIdx: 0,
      rejectedApplicants: [
        {
          name: "Dohn Joe",
          email: "dohnjoe@illinois.edu",
          major: "Computer Science",
          school: "University of Illinois",
          details: "CEO of both Google and Starbucks. In my free time I like to set subway maps on fire and complain about tax payer waste. Hobbies include: La Croix",
          graduating: "Spring 2020"
        },
        {
          name: "Foo Bar",
          email: "foobar@alaska.edu",
          major: "Computer Engineering",
          school: "University of Alaska",
          details: "Direct descendant of Napolean. Expatriated after his death, and moved to Alaska. My goal is to study computer engineering and build an army of robots.",
          graduating: "December 2022"
        },
        {
          name: "Car Mex",
          email: "carmex@gmail.edu",
          major: "Statistics",
          school: "University of Chicago",
          details: "CEO of both La Croix and La Croix. Born with a PhD in Economics, studying statistics because it's pretty neat.",
          graduating: "Spring 2018"
        }
      ]
    };
  }

  changeCurrentApplicant(newIdx) {
    this.setState({ currentApplicantIdx: newIdx });
  }

  render() {
    let { currentApplicantIdx, rejectedApplicants } = this.state;
    let currentApplicant = rejectedApplicants[currentApplicantIdx];

    return (
      <ImageBackground source={require('../../assets/images/Background.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
          {
            (rejectedApplicants && rejectedApplicants.length > 0) &&
            <Text style={[styles.itemIndicator, styles.itemIndicatorText]}>
              Applicant {currentApplicantIdx + 1} out of {rejectedApplicants.length}
            </Text>
          }

          <View style={[styles.detailBoxRow]}>
            <View style={[styles.arrowSideBox]}>
              {
                (currentApplicantIdx > 0) &&
                <Text
                  style={[styles.arrowItem]}
                  onPress={() => this.changeCurrentApplicant(currentApplicantIdx - 1)}>
                  &#x2190;
              </Text>
              }
            </View>
            <View style={[styles.detailBox]}>
              <Text style={[styles.detailName]}>
                {currentApplicant.name}
              </Text>

              <Text style={[styles.detailMajor, styles.detailTextItem]}>
                {currentApplicant.major}
              </Text>

              <Text style={[styles.detailSchool, styles.detailTextItem]}>
                {currentApplicant.school}
              </Text>

              <Text style={[styles.detailYear, styles.detailTextItem]}>
                Graduating {currentApplicant.graduating}
              </Text>

              <View style={[styles.descriptionContainer]}>
                <Text style={[styles.detailTextItem]}>
                  {currentApplicant.details}
                </Text>
              </View>

              <View style={[styles.buttonColumn]}>
                <View style={[styles.optionButtonContainer]}>
                  <TouchableHighlight
                    underlayColor="#ddd"
                    style={[styles.optionButton]}
                  /*onPress={() => this.goToApprovedApplicantsScreen()}>*/
                  >
                    <Text style={[styles.optionButtonText]}>Resume</Text>
                  </TouchableHighlight>
                </View>

                <View style={[styles.optionButtonContainer]}>
                  <TouchableHighlight
                    underlayColor="#ddd"
                    style={[styles.optionButton]}
                  /*onPress={() => this.goToApprovedApplicantsScreen()}>*/
                  >
                    <Text style={[styles.optionButtonText]}>Accept</Text>
                  </TouchableHighlight>
                </View>

                <View style={[styles.optionButtonContainer]}>
                  <TouchableHighlight
                    underlayColor="#ddd"
                    style={[styles.optionButton]}
                  /*onPress={() => this.goToApprovedApplicantsScreen()}>*/
                  >
                    <Text style={[styles.optionButtonText]}>Delete</Text>
                  </TouchableHighlight>
                </View>
              </View>

            </View>
            <View style={[styles.arrowSideBox]}>
              {
                (currentApplicantIdx < (rejectedApplicants.length - 1)) &&
                <Text
                  style={[styles.arrowItem]}
                  onPress={() => this.changeCurrentApplicant(currentApplicantIdx + 1)}>
                  &#x2192;
              </Text>
              }
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

/*const styles = StyleSheet.create({
  arrowBottomBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    paddingTop: 12
  },
  arrowItem: {
    fontSize: 24
  },
  arrowSideBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "10%"
  },
  bold: {
    fontWeight: "bold"
  },
  container: {
    padding: 8,
    flexDirection: "column"
  },
  descriptionContainer: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  detailBox: {
    borderWidth: 1,
    borderColor: "#666",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "12%",
    width: "80%",
    flexDirection: "column"
  },
  detailBoxRow: {
    flexDirection: "row",
    height: "78%",
    marginTop: 32
  },
  detailName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    marginTop: "20%",
    paddingBottom: 12
  },
  detailTextItem: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16
  },
  itemIndicator: {
    textAlign: "center",
    marginTop: 24
  }
});*/

const styles = StyleSheet.create({
  arrowItem: {
    fontSize: 40,
    color: "white"
  },
  arrowSideBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "10%"
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  buttonColumn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",    
    paddingTop: 25,
    paddingBottom: 15,
    justifyContent: "flex-end"    
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
  buttonToggleLabelText: {
    fontSize: 14,
    fontFamily: "Raleway-Light"
  },
  buttonToggleRow: {
    flexDirection: "row",
    marginTop: 30,
    paddingBottom: 8
  },
  bold: {
    fontWeight: "bold"
  },
  centerText: {
    textAlign: "center"
  },
  container: {
    padding: 8,
    flexDirection: "column"
  },
  descriptionContainer: {
    flexGrow: 1,
    flexDirection: "column",
    /*marginTop: 40,
    marginBottom: 40,
    marginLeft: 10,
    marginRight: 10,*/
  },
  detailBox: {
    borderWidth: 4,
    borderColor: "#666",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "5%",
    width: "80%",
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
  },
  detailBoxRow: {
    flexDirection: "row",
    height: "85%",
    marginTop: 32,
  },
  detailName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    marginTop: "20%",
    paddingBottom: 12
  },
  detailTextItem: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16
  },
  errorRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 14
  },
  errorText: {
    color: "white",
    backgroundColor: "transparent",
    fontFamily: "Raleway-Bold"
  },
  flexGrow: {
    flexGrow: 1
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 40,
  },
  headerText: {
    fontSize: 40,
    fontFamily: "Raleway-Regular",
    color: "white",
    backgroundColor: "transparent",
  },
  itemIndicator: {
    textAlign: "center",
    marginTop: 24
  },
  itemIndicatorText: {
    fontSize: 30,
    fontFamily: "Raleway-Regular",
    color: "white",
    backgroundColor: "transparent",
  },
  link: {
    color: "#FFFFFF",
    backgroundColor: "transparent",
    fontFamily: "Raleway-Light"
  },
  loginButton: {
    /*borderRadius: 50,*/
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7178C4"
  },
  loginButtonContainer: {
    /*marginTop: 20,
    borderRadius: 50,*/
    width: "50%",
    backgroundColor: "#ccc",
  },
  loginButtonText: {
    fontSize: 24,
    fontFamily: "Raleway-Light",
    color: "white",
  },
  optionButton: {
    borderRadius: 50,
    height: 60,
    /*borderWidth: 10,*/
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7178C4"
  },
  optionButtonContainer: {
    marginTop: 20,
    borderRadius: 50,
    width: "50%",
    backgroundColor: "#ccc",
  },
  optionButtonText: {
    fontSize: 24,
    fontFamily: "Raleway-Light",
    color: "white",
  },
  optionButtons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 12,
    /*flexGrow: 1,*/
  },
  optionButtonRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
