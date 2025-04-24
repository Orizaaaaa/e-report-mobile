import { useNavigation } from "expo-router";
import { useRef } from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
const { width, height } = Dimensions.get('window');
import { MaterialIcons } from '@expo/vector-icons';

export default function Index() {
  const ref: any = useRef();
  const navigation: any = useNavigation()
  return (
    <ScrollView className='flex-1 pt-4 px-2 bg-white' style={{ height: height }} >
      <View className='flex-row items-center w-full justify-between  p-1   ' >

        <View className="gap-5 flex-col" >
          <Text className="text-2xl">Hello 👋 ! </Text>
          <View className="flex-col gap-1">
            <Text className="text-2xl font-semibold text-primary">Diding Kautsar </Text>
            <Text className="text-sm text-gray-500">📍Pamulang, Benda Baru, Tangerang Selatan </Text>
          </View>
        </View>

        <View className='w-16 h-16 p-1 rounded-xl bg-gray-400 pb  '>
          <Image
            className='w-full h-full rounded-lg'
            source={require('../assets/images/person.png')}
            resizeMode='cover'
          />
        </View>

      </View>

      <View className=" flex-row justify-end mt-5 ">
        <View className="p-2  border-2 border-gray-300 rounded-xl">
          <MaterialIcons name="notifications-none" size={33} color="black" />
        </View>
      </View>


      <View className="mt-5 flex flex-row items-center space-x-2 gap-2">
        <View className="flex-1 border-2 border-gray-300 h-14 justify-center px-2 rounded-lg">
          <View>
            <Text className="text-gray-400" >Cari apa saja...</Text>
          </View>
        </View>
        <View className="w-24 border-2 border-gray-300 h-14 justify-center items-center rounded-lg">
          <Text>K</Text>
        </View>
      </View>




    </ScrollView>
  );
}
