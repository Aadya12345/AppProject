import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/Home';
import Form from '../Screens/Form';

const Tab= createBottomTabNavigator();
const BottomTabNavigator=()=>{
  return(
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon:({focused,color,size})=>{
        let iconName;
        if(route.name==='HomeScreen'){
          iconName=focused
          ?'home'
          :'home-outline'
        }
        else if(route.name==='Form'){
          iconName=focused?'create':'create-outline'
        }
        return <Ionicons name ={iconName} size={size} color={color}/>
      }
    })}
    tabBarOptions={{
      activeTintColor:'tomato',
      inactiveTintColor:'gray'
    }}>
    <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
    <Tab.Screen name="Form" component={Form} options={{headerShown:false}}/>
    </Tab.Navigator>
  )
}
export default BottomTabNavigator