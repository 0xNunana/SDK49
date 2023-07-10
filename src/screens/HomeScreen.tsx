import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Tierpass } from '../constants'
import { MaterialIcons, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigations/StackNavigation';
import CustomButton from '../components/CustomButton';
import ServiceCard from '../components/ServiceCard';
import PetCard from '../components/PetCard';
import EmptyField from '../components/EmptyField';
import { SignOut } from '@supabase/supabase-js';
import { supabase } from '../library/Supabase';

type homeNavProps = NativeStackNavigationProp<RootStackParams, 'Home'>

const data = [
  {
    name: 'Blue',
    image: 'https://eliteboerboels.com/wp-content/uploads/2018/03/Boerboel-puppies123.jpg',
    microchipNumber: '123456789',
    breed: 'Boerboel',
  },
  {
    name: 'Dax',
    image: 'https://media.istockphoto.com/id/824883238/photo/dog-running.jpg?s=612x612&w=0&k=20&c=oRw8ZvtMZ5Y4l8szrHvRbQbAgx0HSGkDA7sXZp4SP2s=',
    microchipNumber: '123456789',
    breed: 'Maltese',
  },
]

const HomeScreen = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation<homeNavProps>()
  const [petAdded, setPetAdded] = useState<boolean>(false)
  const [showSignOutBox, setShowSignOutBox] = useState<boolean>(false)

  const toggle = () => {
    setPetAdded(true)
  }

  const logout = () => {
    setShowSignOutBox(s=>!s)
  }

  const handleSignOut = async() => {
    
    
await supabase.auth.signOut()

    setShowSignOutBox(false)
  }

  return (
    <View style={{ flex: 1, backgroundColor: Tierpass.page, paddingBottom: insets.bottom, paddingRight: insets.right, paddingLeft: insets.left, paddingTop: insets.top }}>
      <View style={{ flex: 1, paddingHorizontal: 2 }}>
        {/* Show registered pets or empty section with add pet button */}
        <View style={{ paddingHorizontal: 2, borderRadius: 20, paddingVertical: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: Tierpass.bg, fontSize: 34, fontFamily: 'Bold' }}>My Pets</Text>
          </View>

          {petAdded ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 2 }}>
              {data.map((item, index) => (
                <View key={index} style={{ marginRight: 10 }}>
                  <PetCard pet={item} />
                </View>
              ))}
            </ScrollView>
          ) : (
            <EmptyField pressed={() => navigation.navigate('AddPet')} />
          )}
        </View>

        {/* Other sections */}
        <View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 2, paddingVertical: 2 }}>
            <View style={{ margin: 1, width: '47%' }}>
              <ServiceCard cardName='Request Permit' />
            </View>
            <View style={{ margin: 1, width: '47%' }}>
              <ServiceCard cardName='Request travel crate' />
            </View>
            <View style={{ margin: 1, width: '47%' }}>
              <ServiceCard cardName='Schedule vet appointment' />
            </View>
            <View style={{ margin: 1, width: '47%' }}>
              <ServiceCard cardName='Contact us' />
            </View>
          </View>
        </View>
      </View>

      {/* Profile icon box */}
      <View style={{ paddingHorizontal: 2 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 60, alignItems: 'center', paddingHorizontal: 10, position: 'absolute', bottom: 0, width: '100%', backgroundColor: '#FFFFFF', borderRadius: 25 }}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="home-minus-outline" size={30} color={Tierpass.bg} />
          </TouchableOpacity>
          <TouchableOpacity style={{ position: 'absolute', top: -8, left: '50%', right: '50%', width: 70, borderRadius: 50, height: 70, backgroundColor: Tierpass.bg, alignItems: 'center', justifyContent: 'center' }} onPress={toggle}>
            <Ionicons name="add" size={50} color={Tierpass.yellow} />
          </TouchableOpacity>
          <TouchableOpacity onPress={logout}>
            <FontAwesome name="user-circle-o" size={30} color={Tierpass.bg} />
          </TouchableOpacity>
        </View>

        {/* Sign-out box */}
        {showSignOutBox && (
          <View style={{ position: 'absolute', top: -80, right: 20, backgroundColor:Tierpass.card, padding: 10, borderRadius: 10 ,borderColor:'red',borderWidth:1}}>
            <TouchableOpacity onPress={handleSignOut}>
              <Text className='text-red-800'>Sign Out</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  )
}

export default HomeScreen
