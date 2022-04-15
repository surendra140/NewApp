import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const AddMember = () => {
  return (
    <View>
       <View style={{flexDirection: 'row'}}>
            <Image style={styles.img} source={require('../assets/logo/icons/left-arrow.png')}  />
           <Text style={{fontWeight: 'bold', color: "black", fontSize: 18, justifyContent: 'flex-start', padding: 20}}>
             Add Member
          </Text>
        </View>

        <View style={{padding: 30,}}>
            <Text style={{color: '#000', fontWeight: '500'}}> Fill below details</Text>
            <TextInput placeholder='Name' style={styles.InputText}/>
            <TextInput placeholder='Date Of Birth' style={styles.InputText}/>
            <TextInput placeholder='Gender' style={styles.InputText}/>
            <TextInput placeholder='ID Proof' style={styles.InputText}/>
            
        </View>
        <View>
       
    </View>

    <TouchableOpacity style={{justifyContent: 'center', alignItems:'center', marginTop:380, backgroundColor: '#eee', height: 50}} onPress={()=>navigation.navigate('AddMember')}>
            <Text style={{fontSize: 20,
                fontWeight: 'bold',
                color: '#000'}}>Add Member</Text>
        </TouchableOpacity>
    </View>
  )
}

export default AddMember;
const styles = StyleSheet.create({  
    img:{
    width: 20, height: 20, 
    marginLeft: 12,
    marginTop: 22
    
  },
  InputText:{
    width: '100%',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginTop: 10,
    
}, 
button: {
    marginTop: 10,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth:1,
    width: 100,
    margin:8,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',    
         
}
}
)