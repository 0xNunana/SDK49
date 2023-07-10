import {NavigationContainer} from '@react-navigation/native'
import StackNavigation from './src/navigations/StackNavigation';
import {useFonts} from 'expo-font'
import { View } from 'react-native';

// entry point for the app
// Upper level navigation container allows for navigation accross screens

export default function App() {
  const [fontsLoaded]=useFonts({
    'Thin': require('./assets/fonts/CabinetGrotesk-Thin.otf'),
   'Extralight': require('./assets/fonts/CabinetGrotesk-Extralight.otf'),
 'Light': require('./assets/fonts/CabinetGrotesk-Light.otf'),
 'Regular': require('./assets/fonts/CabinetGrotesk-Regular.otf'),
'Medium': require('./assets/fonts/CabinetGrotesk-Medium.otf'),
 'Bold': require('./assets/fonts/CabinetGrotesk-Bold.otf'),
 'Extrabold': require('./assets/fonts/CabinetGrotesk-Extrabold.otf'),
 'Black': require('./assets/fonts/CabinetGrotesk-Black.otf')
  }
  );
  if (!fontsLoaded) {
    return <View />;
  }
  return (
   <NavigationContainer>
<StackNavigation/>
   </NavigationContainer>
  );
}

