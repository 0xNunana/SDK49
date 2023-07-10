import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../navigations/StackNavigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Tierpass } from '../constants'


export type Nav = NativeStackNavigationProp<RootStackParams,'Splash'>


const SplashScreen = () => {
  const navigation = useNavigation<Nav>()
  const insets = useSafeAreaInsets()
  return (
    <View className={`flex-1 items-center justify-center `}
    style={{paddingBottom:insets.bottom,paddingRight:insets.right,paddingLeft:insets.left,paddingTop:insets.top,backgroundColor:Tierpass.bg}}>
     <View className='w-[70%] '>
  {/* Tierpass Logo  */}
  <View className='items-center pb-10 mb-16'>
       <Image source={require('../../assets/Tierpass.png')}/>

      </View>


  
      {/* Sign in or Register Button  */}
      <View className='space-y-5'>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}
        className='rounded-full border-[#EFCA08] border items-center h-14 justify-center'>
          <Text className='text-[#EFCA08] ' style={{fontFamily:'Bold',fontSize:14}}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}
        className={`rounded-full  items-center h-14 justify-center `} style={{backgroundColor:Tierpass.yellow}}>
          <Text style={{fontFamily:'Bold',fontSize:14}}>Get Started for free</Text>
        </TouchableOpacity>
      </View>
     </View>
     
    

    </View>
  )
}

export default SplashScreen