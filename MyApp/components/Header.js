import { View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native'
import React,{useState} from 'react'

export default function Header() {
  
  return (
    <View>
         <HeaderButton />
         
    </View>
  );
}

const HeaderButton = (props) => (
  <View style={{flexDirection: 'row', marginTop: 5, marginLeft: 5}}>
       <Text style={{fontWeight: 'bold', fontSize: 28, color: '#000'}}>
          MED
       </Text>
        <Text
          style={{fontWeight: 'bold', fontSize: 28, color: '#64beff'}}>
          LIST
      </Text> 
          <Image
          style={styles.bell}
          source={require('../assets/logo/1633777-200.png')}
        />
 
      <Image
          style={styles.qrcode}
          source={require('../assets/logo/qrcode.png')}
        />
        
</View>
);

const styles = StyleSheet.create({
  HeadText:{
    fontSize:25,
    textAlign:'center',
    padding:20,
  },
 qrcode:{
    width: 40, height: 40, 
    paddingLeft: 10,
    marginLeft: 10
  },
  
  bell: {
    width: 40, height: 40, 
    marginLeft: 140,
  },
})