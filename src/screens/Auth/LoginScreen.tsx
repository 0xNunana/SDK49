import { View, Text, TextInput,Image ,Alert, Linking} from 'react-native'
import React, { useState,useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../../navigations/StackNavigation'
import { Tierpass } from '../../constants'
import { supabase } from '../../library/Supabase'



type LoginProp = NativeStackNavigationProp<RootStackParams,'Login'>

const LoginScreen = () => {
  const navigation = useNavigation<LoginProp>()
  const insets = useSafeAreaInsets()
  const [email, setEmail] = useState<string>('')
  const [password,setPassword]=useState<string>('')

  const handleLogin = async () => {

    if (email.trim() === '') {
      Alert.alert('Error', 'Email is required to log in')
    }else{
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
  
      if (error) Alert.alert(error.message)
    }


  }


   
  return (
    <View className={` items-center flex-1 `}
     style={{paddingBottom:insets.bottom,paddingRight:insets.right,paddingLeft:insets.left,paddingTop:insets.top,backgroundColor:Tierpass.page}}>
  
      <View className=' w-full p-7  flex-1 justify-center'>
      <View className='items-center justify-center mb-10 '>
  <Image source={require('../../../assets/tierpass2.png')}/>
  <Text className='mt-4' style={{fontFamily:'Medium',fontSize:16}}>Your bestfriends's passport</Text>
  </View>
        <View className='my-7 space-y-3'>
          <Text  style={{fontFamily:'Bold',fontSize:14,color:Tierpass.bg}}>Email address</Text>
        <TextInput style={{fontFamily:'Medium',fontSize:14}} className=' rounded-full h-12 px-5 border border-[#1D2433]' value={email} onChangeText={(text)=>setEmail(text)} placeholder='janetravels@gmail.com' />
        </View>
        <View className='my-7 space-y-3'>
          <Text  style={{fontFamily:'Bold',fontSize:14,color:Tierpass.bg}}>Password</Text>
        <TextInput style={{fontFamily:'Medium',fontSize:14}} className=' rounded-full h-12 px-5 border border-[#1D2433]' value={password} onChangeText={(text)=>setPassword(text)} placeholder='min.6 characters' />
        </View>

<CustomButton title='Login' press={handleLogin} color={Tierpass.yellow} fontFamily='Bold' fontSize={14} />
      </View>


    </View>
  )
}

export default LoginScreen