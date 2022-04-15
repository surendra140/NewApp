import { View, Text, StyleSheet,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Search from '../components/Search';

const UploadHistory = () => {
  return (
    <>
       <View style={{flexDirection: 'row'}}>
            <Image style={styles.img} source={require('../assets/logo/icons/left-arrow.png')}  />
           <Text style={{fontWeight: 'bold', color: "black", fontSize: 18, justifyContent: 'flex-start', padding: 20}}>
             Upload History
          </Text>
        </View>
       
        <View style={{padding: 30,}}>
            <Text style={{color: '#000', fontWeight: '500'}}> Fill below details</Text>
            <TextInput placeholder='Title' style={styles.InputText}/>
            <TextInput placeholder='Date' style={styles.InputText}/>
            <TextInput placeholder='Doctor Name' style={styles.InputText}/>
            <TextInput placeholder='Hospital Name' style={styles.InputText}/>
            <TextInput placeholder='Remark' style={styles.InputText}/>
            
        </View>

        <TouchableOpacity style={{justifyContent: 'center', alignItems:'center', marginTop:250, backgroundColor: '#eee', height: 50}} onPress={() => alert("choose file")}>
            <Text style={{fontSize: 20,
                fontWeight: 'bold',
                color: '#000'}}>Choose File</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent: 'center', alignItems:'center', marginTop:10, backgroundColor: '#eee', height: 50}} onPress={()=>alert('Upload File')}>
            <Text style={{fontSize: 20,
                fontWeight: 'bold',
                color: '#000'}}>Upload File</Text>
        </TouchableOpacity>
    </>
    
  )
}

export default UploadHistory;

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
