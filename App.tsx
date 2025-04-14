import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraGalleryScreen from './screens/CameraGalleryScreen';
import LoaderScreen from './screens/LoaderScreen';
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color,size})=>{
          let iconName:string;

          if (route.name === 'CameraGallery') {
            iconName = 'camera-outline';
          } else if (route.name === 'LoaderScreen') {
            iconName = 'reload-outline';
          } else {
            iconName = 'help-outline';
          }

          // if(route.name === 'CameraGallery'){
          //   iconName = 'camera-outline';
          // }else if (route.name === 'LoaderScreen')
          // {
          //   iconName = 'reload-outline';
          // }

          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'grey'
      })}>
        <Tab.Screen name="CameraGallery" component={CameraGalleryScreen} />
        <Tab.Screen name="LoaderScreen" component={LoaderScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}
export default App