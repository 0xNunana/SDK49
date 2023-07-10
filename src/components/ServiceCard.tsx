import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Tierpass } from '../constants'


type serviceprop={
    cardName:string
}

const ServiceCard = ({cardName}:serviceprop) => {
  return (
    <TouchableOpacity style={{backgroundColor:Tierpass.cardbg,borderRadius:15}} className='flex-row items-center' >
        <View style={{height:70,width:70,backgroundColor:Tierpass.page,borderRadius:15}} className='ml-2 mr-1 my-2'>
            
        </View>
        <View style={{flex:1}} className='p-1'>
        <Text style={{color:Tierpass.bg,fontFamily:'Bold',fontSize:12,flexWrap:'wrap'}}>{cardName}</Text>
        </View>
      
    </TouchableOpacity>
  
  )
}

export default ServiceCard