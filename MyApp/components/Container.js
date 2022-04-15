import { View, Text,StyleSheet, Image, Dimensions, ScrollView, SafeAreaView,FlatList, StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'


const { width, height } = Dimensions.get('window')

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    Date: '24-feb-2021',
    place: 'indore',
    Speciality: 'Neurosergeon',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    Date: '24-feb-2021',
    place: 'indore',
    Speciality: 'Neurosergeon',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    Date: '24-feb-2021',
    place: 'indore',
    Speciality: 'Neurosergeon',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d82',
    title: 'Fourth Item',
    Date: '24-feb-2021',
    place: 'indore',
    Speciality: 'Neurosergeon',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d52',
    title: 'Fifth Item',
    Date: '24-feb-2021',
    place: 'indore',
    Speciality: 'Neurosergeon',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d56',
    title: 'Fifth Item',
    Date: '24-feb-2021',
    place: 'indore',
    Speciality: 'Neurosergeon',
  },
];

const Item = ({ title, Date,place, Speciality, navigation }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text1}>Date :{Date}</Text>
    <Text style={styles.text1}>Place: {place}</Text>
    <Text style={styles.text1}>Speciality: {Speciality}</Text>
        
  </View>
);

const Container = () => {

  const renderItem = ({ item }) => (
    <>
     <TouchableOpacity activeOpacity={1} >
    <Item title={item.title} Date={item.Date} place={item.place} Speciality={item.Speciality}  />
    </TouchableOpacity>
    
    </>
  );

  return (
     <>   
      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
           
          }}>
          <Text style={{fontWeight: 'bold', color: "black", fontSize: 18}}>
             Find Your Doctor By Speciality
          </Text>  
        </View>
     <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
    </SafeAreaView>

</>

  )
}

export default Container;

const styles = StyleSheet.create({   
  container: {
    flex:1,
    borderRadius: 10, 
  },
 
  HeadText:{
    fontSize:25,
    textAlign:'center',
    padding:20,
  },

  item: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 2,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,  
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  text1: {
    color: '#000'
  }
    
});
