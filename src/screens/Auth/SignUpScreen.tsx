import { View, Text, TextInput ,Alert,Image, ScrollView} from 'react-native'
import React, { useState,useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import { Tierpass } from '../../constants'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../../navigations/StackNavigation'
import { useNavigation } from '@react-navigation/native'
import { supabase } from '../../library/Supabase'



type SignUpProp = NativeStackNavigationProp<RootStackParams,'SignUp'>

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpProp>()
    const insets = useSafeAreaInsets()
    const [firstName,setFirstName]=useState<string>('')
    const [lastName,setLastName]=useState<string>('')
    const [email,setEmail]=useState<string>('')
    const [password,setPassword]=useState<string>('')
    const [confirm,setConfirm]=useState<string>('')
    const [confirmedPassword,setConfirmedPassword]=useState<string>('')

    // check if the password typed in the first field is the same as the one typed in the confirm password field
    useEffect(() => {
      if (password === confirm) {
        setConfirmedPassword(password);
      }
    }, [password, confirm]); // the effect runs whenever `password` or `confirm` changes


    const handleSubmit=async()=>{
  if(firstName.trim()===''){
    Alert.alert('Error', 'First Name is required')
  }else if(lastName.trim()===''){
    Alert.alert('Error', 'Last Name is required')
  }else if (email.trim()===''){
    Alert.alert('Error','Email is required')
  }
  else if (password.trim()===''){
    Alert.alert('Error', 'Password is required')
  }else if (confirm.trim()===''){
    Alert.alert('Error', 'Password confirmation is required')
  }else if(password!==confirm){
    Alert.alert('Error','Password does not match')
  }else {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: confirmedPassword,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName
        }
      }
    })

    if (error) Alert.alert(error.message)
  }


}

  return (
    <View
    className={`flex-1  justify-center items-center `}
    style={{paddingBottom:insets.bottom,paddingRight:insets.right,paddingLeft:insets.left,paddingTop:insets.top,backgroundColor:Tierpass.page}}>
    
<ScrollView className='w-full py-5 px-[10%] '>
  <View className='justify-center mt-10'>
  <View className='items-center justify-center mb-10'>
  <Image source={require('../../../assets/tierpass2.png')}/>
  <Text className='mt-4' style={{fontFamily:'Medium',fontSize:16}}>Your bestfriend's passport</Text>
  </View>
  <View className='py-1'>
    <Text  style={{fontFamily:'Bold',fontSize:14,color:Tierpass.bg}}>First Name</Text>
    <TextInput style={{fontFamily:'Medium',fontSize:14}} className='rounded-full border border-gray-400 h-12 p-3 my-2' placeholder='Jane ' value={firstName} onChangeText={(text)=>setFirstName(text)} />
  </View>
  <View className='py-1'>
    <Text  style={{fontFamily:'Bold',fontSize:14,color:Tierpass.bg}}>Last Name</Text>

<TextInput style={{fontFamily:'Medium',fontSize:14}} className='rounded-full border  border-gray-400 h-12 p-3 my-2' placeholder='Travolta '  value={lastName} onChangeText={(text)=>setLastName(text)}/>
  </View>
  <View className='py-1'>
    <Text  style={{fontFamily:'Bold',fontSize:14,color:Tierpass.bg}}>Email</Text>
    <TextInput  style={{fontFamily:'Medium',fontSize:14}} className='rounded-full border  border-gray-400 h-12 p-3 my-2' placeholder='janetravels@gmail.com ' value={email} onChangeText={(text)=>setEmail(text)}/>
  </View>
  <View className='py-1'>
    <Text  style={{fontFamily:'Bold',fontSize:14,color:Tierpass.bg}}>Choose a password</Text>
    <TextInput style={{fontFamily:'Medium',fontSize:14}} className='rounded-full border  border-gray-400 h-12 p-3 my-2' placeholder='min. 6 characters' secureTextEntry value={password} onChangeText={(text)=>setPassword(text)}/>
  </View>
  <View className='py-1'>
    <Text  style={{fontFamily:'Bold',fontSize:14,color:Tierpass.bg}}>Confirm password</Text>

<TextInput style={{fontFamily:'Medium',fontSize:14}} className='rounded-full border  border-gray-400 h-12 p-3 my-2' placeholder='min. 6 characters' secureTextEntry value={confirm} onChangeText={(text)=>setConfirm(text)}/>
  </View>

  <Text className={`text-[12px] text-center `} style={{color:Tierpass.bg}}>By creating an account you agree to our {''}
  <Text className='underline'>Terms of use</Text> </Text>

<View className='mt-10 mb-10'>
  {/* if the input field is not empty,show a colored button */}
  {firstName || lastName || email || password || confirm ?
   (<CustomButton title='Continue' press={handleSubmit} color={Tierpass.yellow} />):
   (  <CustomButton title='Continue' press={handleSubmit} color={Tierpass.gray} text={Tierpass.pale}/>)
    } 
   
     

</View>

  </View>
 





</ScrollView>

    </View>
  )
}

export default SignUpScreen