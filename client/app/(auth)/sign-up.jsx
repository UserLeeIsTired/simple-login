import { View, Text, SafeAreaView, Image, Alert } from 'react-native'
import images from '../../constant/images'
import { router } from 'expo-router';
import React, { useState } from 'react'
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import SecondaryButton from '../../components/SecondaryButton';

const SignUp = () => {
  const [ form, setForm ] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const submit = async () => {
    console.log('hello');
    if (!form.email || !form.password || !form.confirmPassword){
      Alert.alert('Error', 'Please enter all fields!');
      return;
    }

    if (form.password !== form.confirmPassword){
        Alert.alert('Error', 'The passwords are not the same');
        return;
    }

    // TODO: sign-up function connect to database (mariaDB)
  }
  
  return (
    <SafeAreaView className="h-full w-full bg-black justify-center">
      <View className="items-center justify-center"> 
        <Image source={images.locked} className="w-16 h-[100px] mb-10" resizeMethod='contain'/>
        <Text className="text-2xl text-white text-center font-semibold">Sign Up</Text>
        <View className="items-center justify-center">
        <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          placeholder=''
          additionalStyle="mt-7 w-full p-[6px]"
        />
        <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e})}
          placeholder=''
          additionalStyle="w-full p-[6px]"
        />
        <FormField 
          title="Confirm Password"
          value={form.confirmPassword}
          handleChangeText={(e) => setForm({...form, password: e})}
          placeholder=''
          additionalStyle="w-full p-[6px]"
        />
        <CustomButton title='Submit' onPress={submit}/>
        <SecondaryButton containerStyle={'px-2'} title="Sign In" handlePress={() => router.push('/login')}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp