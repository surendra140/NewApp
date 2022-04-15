import { View, Text, ScrollView,Image } from 'react-native'
import React from 'react'

const items = [
    {
        Image: require('../assets/logo/images/bread.png'),
        Text: "Pick-up",
    },
    {
        Image: require('../assets/logo/images/coffee.png'),
        Text: "Pick-up",
    },
    {
        Image: require('../assets/logo/images/deals.png'),
        Text: "Pick-up",
    },
    {
        Image: require('../assets/logo/images/desserts.png'),
        Text: "Pick-up",
    },
    {
        Image: require('../assets/logo/images/fast-food.png'),
        Text: "Pick-up",
    }, {
        Image: require('../assets/logo/images/soft-drink.png'),
        Text: "Pick-up",
    },
   
];


const TypesDoctor = () => {
  return (
    <View style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
        borderRadius: 5,
    }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          {  items.map((item, index)=> ( 
          <View key={index} style={{alignItems: 'center', marginRight: 30}}>
          <Image source={item.Image} style={{
              width: 50,
              height: 40,
              resizeMode: 'contain'
          }}  />
          <Text style={{fontSize: 13, fontWeight: '900', color: '#000'}}>{item.Text}
          </Text>
          </View>
          ))}
   
    </ScrollView>
  </View>
  )
}

export default TypesDoctor