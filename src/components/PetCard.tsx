import { View, Text ,Image,Platform} from 'react-native'
import { Tierpass } from '../constants';
import React from 'react'

type Pet={
    
        name: string;
        image: string;
        microchipNumber: string;
        breed: string;
      
      
}
type PetProp={
    pet:Pet
}

const PetCard = ({pet}:PetProp) => {
  return (
    <View className='items-center flex-row justify-center rounded-xl mt-2 w-72 mb-5 ' style={{backgroundColor:Tierpass.card,height:150,
  

    ...Platform.select({
        ios: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
        },
        android: {
            elevation: 4,
        },
    }),}} >
          <View style={{marginHorizontal:20}}>
             <Image source={{uri:pet.image}} style={{height:120,width:120,resizeMode:'cover',borderRadius:100}}/> 
          
          </View>
          <View className='flex-1'>
            <View className='py-1 space-y-1'>
                <Text style={{fontFamily:"Regular",fontSize:10}}>Name</Text>
                <Text style={{fontFamily:"Medium",fontSize:14}}>{pet.name}</Text>
            </View>
            <View className='py-1 space-y-1'>
                <Text  style={{fontFamily:"Regular",fontSize:10}}>Passport Number</Text>
                <Text style={{fontFamily:"Medium",fontSize:14}}>{pet.microchipNumber}</Text>
            </View>
            <View className='py-1 space-y-1'>
                <Text style={{fontFamily:"Regular",fontSize:10}}>Breed</Text>
                <Text style={{fontFamily:"Medium",fontSize:14}}>{pet.breed}</Text>
            </View>
          </View>
          
        </View>
  )
}

export default PetCard