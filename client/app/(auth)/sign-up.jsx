import { View, Text, SafeAreaView, Image, Alert } from 'react-native'
import images from '../../constant/images'
import { router } from 'expo-router';
import React, { useState } from 'react'
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import SecondaryButton from '../../components/SecondaryButton';
import { createUser } from '../../lib/service';

const SignUp = () => {
  const [ form, setForm ] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const submit = async () => {
    if (!form.email || !form.password || !form.confirmPassword){
      Alert.alert('Error', 'Please enter all fields!');
      return;
    }

    if (form.password.length < 8 || form.password.length > 10){
      if (form.password.length < 8) Alert.alert('Error', 'The password must have at least 8 characters!');
      if (form.password.length > 50) Alert.alert('Error', 'The password can have at most 50 characters!');
      return;
    }

    if (form.password !== form.confirmPassword){
        Alert.alert('Error', 'The passwords are not the same');
        return;
    }

    await createUser(form.email, form.password);
    
  }
  
  return (
    <SafeAreaView className="h-full w-full bg-black justify-center">
      <View className="items-center justify-center"> 
        <Image source={images.locked} className="w-16 h-[100px] mb-10" resizeMethod='contain'/>
        <Text className="text-2xl text-white text-center font-semibold">Sign Up</Text>
        <View className="items-center justify-center w-full">
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
          handleChangeText={(e) => setForm({...form, confirmPassword: e})}
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