import { View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native'
import React from 'react'


export default function BottomTab({navigation}) {
  return (
    <View>
    <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 20}}>
        
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
               style={styles.home}
               source={require('../assets/logo/homepng.png')}
             />
       </TouchableOpacity>   
 
       <TouchableOpacity onPress={() => navigation.navigate('Doctors')}>
           <Image
               style={styles.stethis}
               source={require('../assets/logo/stehescop.png')}
             />
        </TouchableOpacity>
 
        <TouchableOpacity onPress={() => navigation.navigate('MedicalHistory')}>
               <Image
               style={styles.upload}
               source={require('../assets/logo/upload.png')}
             />
         </TouchableOpacity>
 
         <TouchableOpacity onPress={() => navigation.navigate('AppointmentManagement')}>
             <Image
               style={styles.list1}
               source={require('../assets/logo/1633777-200.png')}
             />
             </TouchableOpacity>
 
          <TouchableOpacity onPress={() => navigation.navigate('User')}>
             <Image
               style={styles.user1}
               source={require('../assets/logo/user.png')}
             />
             </TouchableOpacity>
                 
         </View>
    </View>
  )
}
const styles = StyleSheet.create({
    
    home:{
      width: 30, height: 30, 
      marginTop:2,
      marginBottom:5
    },
    stethis:{
      width: 30, height: 30, 
      paddingLeft: 10,
      marginLeft: 50,
      marginTop:2
    },
    upload:{
      width: 30, height: 30, 
      marginLeft: 45,
      marginTop:2
    },
    list1:{
      width: 40, height: 40, 
      marginLeft: 50,
      marginTop:2
    },
    user1:{
      width: 30, height: 30, 
      marginLeft:30,
      marginTop:2
    }
    
  });
  