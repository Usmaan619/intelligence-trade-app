import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CommonButton from '../components/CommonButton';
import * as ImagePicker from 'expo-image-picker';
import { GradientHOC } from '../HOC/Gradient.hoc';


const DocumentVerifPage = () => {
  const [frontImage, setFrontImage] = useState('')
  const [backImage, setBackImage] = useState('')
  let img


  const uploadImage = async (type) => {
    try {
      // No permissions request is necessary for launching the image library
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        // base64: true
      });



      if (type === 'front') {
        const img = result?.assets[0]?.uri
        console.log('img: ', img);
        setFrontImage(img)
      }

      if (type === 'back') setBackImage(result?.assets[0]?.uri)
      console.log('frontImage: ', frontImage);

    } catch (error) {
      console.log('error: ', error);

    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text className='text-center text-xl font-bold mt-10 text-white'>Document Verification</Text>
      <View className='p-5'>
        <View>

          <View className='flex-row items-center gap-2 my-3'>
            <Entypo name="text-document" size={24} color="white" />
            <Text className='text-md text-white'>Upload document front page</Text>
          </View>
          {!frontImage &&
            <TouchableOpacity onPress={() => {
              uploadImage('front')
            }} className='h-40 bg-white rounded flex-row justify-center items-center'>
              <View className='flex justify-center items-center'>
                <Feather name="upload" size={30} color="black" />
                <Text className='font-semibold text-md text-black'>Upload</Text>
              </View>
            </TouchableOpacity>}
          {frontImage &&
            <Image source={{ uri: frontImage }} className='h-40 rounded ' resizeMode='cover' />
          }
        </View>

        <View>

          <View className='flex-row items-center gap-2 my-3'>
            <Entypo name="text-document" size={24} color="white" />
            <Text className='text-md text-white'>Upload document back page</Text>
          </View>
          {!backImage &&
            <TouchableOpacity onPress={() => {
              uploadImage('back')
            }} className='h-40 bg-white rounded flex-row justify-center items-center'>
              <View className='flex justify-center items-center'>
                <Feather name="upload" size={30} color="black" />
                <Text className='font-semibold text-md text-black'>Upload</Text>
              </View>
            </TouchableOpacity>
          }
          {backImage &&
            <Image source={{ uri: backImage }} resizeMode='cover' className='h-40 rounded flex-row justify-center items-center' />
          }


        </View>

      </View>
      <View className='mt-auto mb-3 px-3'>

        <CommonButton
          onPress={() => {
            console.log();
          }}
          title={"Upload"}
        />
      </View>

    </View>
  )
}

export default GradientHOC(DocumentVerifPage)