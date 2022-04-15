
import * as React from 'react';
import { View, Text,Image , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import MedicalHistory from './screens/MedicalHistory';
import Upload from './screens/Upload';
import User from './screens/User';
import AddMember from './screens/AddMember';
import UploadHistory from './screens/UploadHistory';
import ViewHistory from './screens/ViewHistory';
import Doctors from './screens/Doctors';
import BookAppointment from './screens/BookAppointment';
import DoctorDetails from './screens/DoctorDetails';
import AppointmentManagement from './screens/AppointmentManagement';
import Previous from './screens/Previous';
import Todays from './screens/Todays';
import Upcoming from './screens/Upcoming';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator  
        screenOptions = {{
        headerShown: false
    }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MedicalHistory" component={MedicalHistory} />
        <Stack.Screen name="AddMember" component={AddMember} />
        <Stack.Screen name="UploadHistory" component={UploadHistory} />
        <Stack.Screen name="ViewHistory" component={ViewHistory} />
        <Stack.Screen name="Doctors" component={Doctors} />
        <Stack.Screen name="BookAppointment" component={BookAppointment} />
        <Stack.Screen name="DoctorDetails" component={DoctorDetails} />
        <Stack.Screen name="AppointmentManagement" component={AppointmentManagement} />
        <Stack.Screen name="Previous" component={Previous} />
        <Stack.Screen name="Todays" component={Todays} />
        <Stack.Screen name="Upcoming" component={Upcoming} />
        <Stack.Screen name="User" component={User} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  
  bell: {
    width: 30, height: 30, 
    marginTop: 10,
    padding: 5,
  },
})