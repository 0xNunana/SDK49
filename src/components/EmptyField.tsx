import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Tierpass } from '../constants/index'
import {Ionicons} from '@expo/vector-icons'

type addprop={
    pressed:()=>void
}

const EmptyField = ({pressed}:addprop) => {
  return (
    <View className='p-5 '>
    <View className='items-center flex-row justify-center rounded-lg mt-2 mb-5' style={{backgroundColor:Tierpass.cardbg,height:150}} >
    <View style={{marginHorizontal:20,height:120,width:120,borderRadius:100,backgroundColor:Tierpass.cardplace}}>
              
              
              </View>
              <View className='flex-1'>
                <View className='py-1 space-y-1'>
                    <View className='w-36 h-3' style={{backgroundColor:Tierpass.cardplace}}/>
                    <View className='w-28 h-3' style={{backgroundColor:Tierpass.cardplace}}/>
                </View>
                <View className='py-1 space-y-1'>
                <View className='w-36 h-3' style={{backgroundColor:Tierpass.cardplace}}/>
                    <View className='w-28 h-3' style={{backgroundColor:Tierpass.cardplace}}/>
                </View>
                <View className='py-1 space-y-1'>
                <View className='w-36 h-3' style={{backgroundColor:Tierpass.cardplace}}/>
                    <View className='w-28 h-3' style={{backgroundColor:Tierpass.cardplace}}/>
                </View>
              </View>
              
            </View>
          <TouchableOpacity className='flex-row items-center justify-center' style={{backgroundColor:Tierpass.bg,height:60,borderRadius:30}} onPress={pressed}>
            <Text className='text-white' style={{fontFamily:"Bold",fontSize:14}}>Add a pet {''}</Text>
            <Ionicons name="add" size={30} color="white" />
          </TouchableOpacity>
    </View>
  )
}

export default EmptyField