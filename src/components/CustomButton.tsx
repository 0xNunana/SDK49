import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

type buttonProps={
    title:string;
    press?:()=>void;
    color?:string;
    text?:string;
    fontFamily?:string;
    fontSize?:number
}



const CustomButton = ({title,press,color,text,fontFamily,fontSize}:buttonProps) => {
  return (
    <TouchableOpacity onPress={press} 
    className={`rounded-full items-center h-12 justify-center`}
    style={{backgroundColor:color}}
    >
      <Text className='font-bold text-[14px] ' style={{color:text,opacity:0.5,fontFamily:fontFamily,fontSize:fontSize}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton