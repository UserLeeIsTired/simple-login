import { View, Text, SafeAreaView, Image, Alert } from 'react-native'
import { router } from 'expo-router';
import images from '../../constant/images'
import React, { useState } from 'react'
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import SecondaryButton from '../../components/SecondaryButton';

const Login = () => {
  const [ form, setForm ] = useState({
    email: '',
    password: ''
  });

  const submit = async () => {
    if (!form.email || !form.email){
      Alert.alert('Error', 'Please enter all fields!');
      return;
    }

    // TODO: login function connect to database
  }
  
  return (
    <SafeAreaView className="h-full w-full bg-black justify-center">
      <View className="items-center justify-center"> 
        <Image source={images.locked} className="w-16 h-[100px] mb-10" resizeMethod='contain'/>
        <Text className="text-2xl text-white text-center font-semibold">Login</Text>
        <View className="items-center justify-center w-full">
        <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          placeholder='Email'
          additionalStyle="mt-7 w-full p-[6px]"
        />
        <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e})}
          placeholder='Password'
          additionalStyle="w-full p-[6px]"
        />
        <CustomButton title='Submit' onPress={submit}/>
        <SecondaryButton containerStyle={'px-2'} title="Sign up" handlePress={() => router.push('/sign-up')}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login