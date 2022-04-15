import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity, Platform } from 'react-native'
import React from 'react';
import DatePicker from 'react-native-date-picker'
import { useState } from 'react';
import {Dropdown} from 'react-native-element-dropdown'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const BookAppointment = ({route}) => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

 

 const onChange =(event, selectedDate) =>{
  const currentDate = selectedDate;
  setShow(false);
  setDate(currentDate);
 };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (

    <>
        <View style={{flexDirection: 'row'}}>
            <Image style={styles.img} source={require('../assets/logo/icons/left-arrow.png')}  />
           <Text style={{fontWeight: 'bold', color: "black", fontSize: 18, justifyContent: 'flex-start', padding: 20}}>
             Book Appointment
          </Text>
        </View>

    <View style={styles.container}>

    <View style={styles.container1}>
    
    <Image
      source={require('../assets/logo/images/bg1.jpg')} 
      style={{ width: "30%", height: 80, marginVertical: 10}}
    />
    <TouchableOpacity style={{marginLeft: 40}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>{route.params.data[0]}</Text>
      <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>{route.params.data[1]}</Text>
      <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>{route.params.data[2]}</Text>
      <TouchableOpacity>
        <Text style={{fontSize: 14, fontWeight: '600', color: '#1a22eb'}}>View Profiles </Text>
      </TouchableOpacity>
     
     </TouchableOpacity>

   </View>
    
    <View style={{marginTop: 30}}>   
    <Text style={{color: '#000', fontWeight: '700'}}>Fill the form</Text>
    <TextInput placeholder='Full Name'style={[styles.inputbox]} />

    <TextInput placeholder='Phone Number'style={[styles.inputbox]} />

    <View style={{flexDirection : 'row', justifyContent: 'space-evenly'}}>
      <TouchableOpacity onPress={showDatepicker} style={styles.text1}>
         <Text style={{paddingHorizontal: 20,marginTop: 12, color: 'gray'}}>Choose Date</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={showTimepicker} style={styles.text2}>
         <Text style={{paddingHorizontal: 20,marginTop: 12, color: 'gray'}}>Choose Time</Text>
      </TouchableOpacity>
    </View>
     
      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder='Select item' 
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        
        />      

<TextInput placeholder='Your Message'style={[styles.inputbox2,]} />

</View>

<Text>selected : {date.toLocaleString()}</Text>

{show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}


<TouchableOpacity style={styles.button}  onPress = {() => alert("Book")}>
         <Text style={{color: '#000', fontWeight: 'bold'}}>Confirm Appointment</Text>
     </TouchableOpacity>

    </View>
    </>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({  
container1: {
  backgroundColor: 'white',
  height: "15%",
  borderRadius: 5,
  margin: 8,
  flexDirection: 'row'
},

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
       
},
container: {
  backgroundColor: 'white',
  padding: 16,
  marginTop: 10,
  borderRadius: 5,
  margin: 4
},
dropdown: {
  height: 50,
  borderColor: 'gray',
  borderWidth: 0.5,
  borderRadius: 8,
  paddingHorizontal: 8,
  marginTop: 8
},
icon: {
  marginRight: 5,
},
label: {
  position: 'absolute',
  backgroundColor: 'white',
  left: 22,
  top: 8,
  zIndex: 999,
  paddingHorizontal: 8,
  fontSize: 14,
},
placeholderStyle: {
  fontSize: 16,
},
selectedTextStyle: {
  fontSize: 16,
},
iconStyle: {
  width: 20,
  height: 20,
},
inputSearchStyle: {
  height: 40,
  fontSize: 16,
},
inputbox :{
  height: 50,
  borderColor: 'gray',
  borderWidth: 0.5,
  borderRadius: 8,
  paddingHorizontal: 8,
  marginTop: 8
},
inputbox2: {
  height: 100,
  borderColor: 'gray',
  borderWidth: 0.5,
  borderRadius: 8,
  paddingHorizontal: 8,
  marginTop: 8
},
text1 :{
  height: 50,
  width: 160,
  borderColor: 'gray',
  borderWidth: 0.5,
  borderRadius: 8,
  paddingHorizontal: 8,
  marginTop: 8
},
text2 :{
  height: 50,
  width: 160,
  borderColor: 'gray',
  borderWidth: 0.5,
  borderRadius: 8,
  paddingHorizontal: 15,
  marginLeft: 40,
  marginTop: 8
},
button: {
  marginTop: 130,
  borderRadius: 4,
  borderColor: '#000',
  borderWidth:1,
  width: "100%",
  height: 40,
  justifyContent: 'center',
  alignItems: 'center', 
  backgroundColor:'#eee'        
}
}
)
