import { View, Text, TextInput, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'


export default function Upload() {
  return (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center'
    }}>

        <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>Select File</Text>
       
     <View style={styles.container}>
     
      <TextInput placeholder='Title' style={styles.InputText}></TextInput>
      <TextInput placeholder='Date' style={styles.InputText}></TextInput>
      <TextInput placeholder='Patient Name' style={styles.InputText}></TextInput>
      <TextInput placeholder='Hospital Name' style={styles.InputText}></TextInput>
      <TextInput placeholder='Doctor Name' style={styles.InputText}></TextInput>
      </View>

      <View>
          <TouchableOpacity style={styles.btn}>
              <Text>Choose File</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20
    },
    InputText:{
        width: '100%',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    }, 
    btn:{
           marginTop: 125,
           borderColor: "black",
    }
}

)