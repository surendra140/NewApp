import * as React from 'react';
import { Animated, View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Previous from './Previous';
import Todays from './Todays';
import Upcoming from './Upcoming';


const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#dadbf5', justifyContent: 'center', alignItems:'center' }]}> 
      <Previous />
  </View>
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#dadbf5', justifyContent: 'center', alignItems:'center' }]}> 
  <Todays />
</View>
);

const ThirdRoute = () => (
  <View style={[styles.container, { backgroundColor: '#dadbf5', justifyContent: 'center', alignItems:'center' }]}> 
  <Upcoming />
</View>
);


export default class AppointmentManagement extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Previous' },
      { key: 'second', title: 'Todays' },
      {key:  'third',  title: 'Upcoming'}
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ opacity, color:'#000', fontWeight: 'bold', fontSize: 16 }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  render() {
    return (
     <>
        <View style={{flexDirection: 'row'}}>
            <Image style={styles.img} source={require('../assets/logo/icons/left-arrow.png')}  />
           <Text style={{fontWeight: 'bold', color: "black", fontSize: 18, justifyContent: 'flex-start', padding: 20}}>
             Your Appointments
          </Text>
        </View>
      
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />

</>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',  
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    
  },
  img:{
    width: 20, height: 20, 
    marginLeft: 12,
    marginTop: 22
    
  },
});