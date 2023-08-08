import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login';
import InvestorRegister from './src/screens/InvestorRegister';
import UserRegister from './src/screens/UserRegister';
import UserHome from './src/screens/UserHome';
import InvestorHome from './src/screens/InvestorHome';
import ImageUploading from './src/screens/ImageUploading';
import ForgetPassword from './src/screens/ForgetPassword';
import ImageUploading2 from './src/screens/ImageUploading2';
import Logout from './src/screens/Logout';
import AddStartUpIdea from './src/screens/AddStartUpIdea';
import AddFundRaising from './src/screens/AddFundRaising';
import AddFeedback from './src/screens/AddFeedback';
import MyIdeas from './src/screens/MyIdeas';
import DeleteIdea from './src/screens/DeleteIdea';
import MyFundRequest from './src/screens/MyFundRequest';
import DeleteRequest from './src/screens/DeleteRequest';
import Explorestartup from './src/screens/ExploreStartup';
import StartupList from './src/screens/StartupList';
import FundraisingList from './src/screens/FundraisingList';

export default function App() {
  const Stack=createNativeStackNavigator();
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">

         <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
         <Stack.Screen name="InvestorRegister" component={InvestorRegister} options={{headerShown: false}} />
         <Stack.Screen name="UserRegister" component={UserRegister} options={{headerShown: false}} />
         <Stack.Screen name="UserHome" component={UserHome} options={{headerShown: false}} />
         <Stack.Screen name="InvestorHome" component={InvestorHome} options={{headerShown: false}} />
         <Stack.Screen name="ImageUploading" component={ImageUploading}  />
         <Stack.Screen name="ForgetPassword" component={ForgetPassword}  />
         <Stack.Screen name="ImageUploading2" component={ImageUploading2}  />
         <Stack.Screen name="Logout" component={Logout}  />
         <Stack.Screen name="AddStartUpIdea" component={AddStartUpIdea}  />
         <Stack.Screen name="AddFundRaising" component={AddFundRaising}  />
         <Stack.Screen name="AddFeedback" component={AddFeedback}  />
         <Stack.Screen name="MyIdeas" component={MyIdeas}  />
         <Stack.Screen name="DeleteIdea" component={DeleteIdea}  />
         <Stack.Screen name="MyFundRequest" component={MyFundRequest}  />
         <Stack.Screen name="DeleteRequest" component={DeleteRequest}  />
         <Stack.Screen name="Explorestartup" component={Explorestartup}  />
         <Stack.Screen name="StartupList" component={StartupList}  />
         <Stack.Screen name="FundraisingList" component={FundraisingList}  />
       </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

