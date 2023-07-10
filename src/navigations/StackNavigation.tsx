import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/Auth/LoginScreen'
import SignUpScreen from '../screens/Auth/SignUpScreen'
import HomeScreen from '../screens/HomeScreen'
import AddPet from '../screens/AddPet'
import { Session } from '@supabase/supabase-js'
import { supabase } from '../library/Supabase'


export type RootStackParams ={
    Splash:undefined;
    Login:undefined;
    SignUp:undefined;
    Home:undefined;
    AddPet:undefined
}





const StackNavigation = () => {
  const [session, setSession] = useState<Session | null>(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

    const Stack = createNativeStackNavigator<RootStackParams>()
  return (
    <Stack.Navigator >
          {!session ? (
        <>
          <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown:false}}/>
        </>
      ) : (
        <>
          <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="AddPet" component={AddPet}/>
        </>
      )}
    </Stack.Navigator>
  )
}

export default StackNavigation