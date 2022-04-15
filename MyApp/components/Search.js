import { View, Text, TextInput,Image, StyleSheet } from 'react-native'
import React from 'react'
export default function Search() {
  return (
    < View style={{marginTop: 5, flexDirection: 'row'}}>
     <View style={{
         flexDirection: 'row',
         backgroundColor: "#eee",
         width: "100%",
         borderRadius: 5, 
     }}>
         <Image
          style={styles.bell}
          source={require('../assets/logo/search.png')}
        /> 
      <TextInput   
          placeholder='What You want?'      
         />

</View>
    
    </View>
  )
}
const styles = StyleSheet.create({
    
    bell: {
      width: 30, height: 30,
      margin: 10
       
    },
  })