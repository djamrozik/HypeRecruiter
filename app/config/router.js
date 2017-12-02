
// global imports
import { StackNavigator } from "react-navigation";

// local imports
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RecruiterHomeScreen from "../screens/RecruiterHomeScreen/RecruiterHomeScreen";
import JobSeekerHomeScreen from "../screens/JobSeekerHomeScreen/JobSeekerHomeScreen";


export const Root = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Login"
    }
  },
  RecruiterHome: {
    screen: RecruiterHomeScreen,
    navigationOptions: {
      title: "Recruiter Home"
    }
  },
  JobSeekerHome: {
    screen: JobSeekerHomeScreen,
    navigationOptions: {
      title: "Job Seeker Home"
    }
  }
});