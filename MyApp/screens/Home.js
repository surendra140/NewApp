import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Banner from '../components/Banner'
import Doctors from './Doctors'
import Container from '../components/Container'
import BottomTab from '../components/BottomTab'

export default function HomeScreen({navigation}) {
  return (
      <>  
          <View style={{ margin: 15 }}>
            <Header />
            <Search />
          </View>
    <ScrollView style={{
        flex: 1
    }}>
    <Banner />
       <Container />
    </ScrollView>

     <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee', height: 50}}>
         <BottomTab navigation={navigation} />
     </View>
  
  </>
  )
}