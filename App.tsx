import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraGalleryScreen from './screens/CameraGalleryScreen';
import LoaderScreen from './screens/LoaderScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CameraGallery" component={CameraGalleryScreen} />
        <Tab.Screen name="LoaderScreen" component={LoaderScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}
export default App