import { View, Text,TouchableOpacity, ScrollView, TextInput, Button } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Tierpass } from '../constants'
import { MaterialCommunityIcons,FontAwesome5,Ionicons } from '@expo/vector-icons';

const AddPet = () => {
  const insets = useSafeAreaInsets()
  return (
    <View className=' flex-1'
    style={{paddingBottom:insets.bottom,paddingRight:insets.right,paddingLeft:insets.left,paddingTop:insets.top,backgroundColor:Tierpass.page}}>
             <ScrollView className='p-2'>

             <View className='items-center justify-center rounded-lg mt-2 flex-row space-x-4' style={{backgroundColor:Tierpass.gray,height:200}}>
          <TouchableOpacity className='flex-row items-center'>
          <Text>Upload image </Text>
          <Ionicons name="md-cloud-upload-outline" size={24} color="black" />
          </TouchableOpacity>
          <MaterialCommunityIcons name="drag-vertical" size={34} color="black" />
          <TouchableOpacity className='flex-row items-center'>
          <Text>Take a photo </Text>
          <Ionicons name="camera-outline" size={24} color="black" />
          </TouchableOpacity>

          
        </View>
        <View className='mt-2'>
          <View className='py-2'>
            <Text>Pet Name</Text>
            <TextInput className=' rounded-lg bg-white p-3' placeholder='Jason'/>
          </View>
          <View className='py-2'>
            <Text>Date of Birth</Text>
            <TextInput className='p-3 rounded-lg bg-white' placeholder='12345678911'/>
          </View>
          <View className='py-2'>
            <Text>Sex</Text>
            <TextInput className='p-3 rounded-lg bg-white' placeholder='Female'/>
          </View>
          <View className='py-2'>
            <Text>Colour / Markings</Text>
            <TextInput className='p-3 rounded-lg bg-white' placeholder='Fawn'/>
          </View>
          <View className='py-2'>
            <Text>Microchip Number</Text>
            <TextInput className='p-3 rounded-lg bg-white' placeholder='12345678911'/>
          </View>
        </View>
        <View className='mb-10'>
        <Button title='Submit'/>
        </View>
       











             </ScrollView>
      </View>
  )
}

export default AddPet