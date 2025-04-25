import { useNavigation } from "expo-router";
import { useRef } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
const { height } = Dimensions.get('window');
import { Feather, MaterialIcons } from '@expo/vector-icons';
import CardBuilding from "@/components/fragments/CardBuilding/CardBuilding";



export default function Index() {
  const navigation: any = useNavigation()
  const ref: any = useRef();
  const data = [
    {
      title: 'Jalan Rusak',
      desc: 'Lorem ipsum dolor s...'
    },
    {
      title: 'Jalan Rusak',
      desc: 'Lorem ipsum dolor s...'
    },
    {
      title: 'Jalan Rusak',
      desc: 'Lorem ipsum dolor s...'
    },
    {
      title: 'Jalan Rusak',
      desc: 'Lorem ipsum dolor s...'
    },

  ]



  const layananData = [
    {
      image: require('../assets/images/galeri-icon.png'),
      label: 'Galeri'
    },
    {
      image: require('../assets/images/building-icon.png'),
      label: 'Bangunan'
    },
    {
      image: require('../assets/images/alert.png'),
      label: 'Peringatan'
    },
    {
      image: require('../assets/images/lainnya.png'),
      label: 'Lainnya'
    },
  ];

  return (
    <ScrollView className='pt-4 px-2 bg-white' style={{ height: height }} >
      <View className='flex-row items-center w-full justify-between  p-1   ' >

        <View className="gap-5 flex-col" >
          <Text className="text-2xl">Hello 👋 ! </Text>
          <View className="flex-col gap-1">
            <Text className="text-3xl font-semibold text-primary">Diding Kautsar </Text>
            <Text className="text-sm text-gray-500">📍Pamulang, Benda Baru, Tangerang Selatan </Text>
          </View>
        </View>

        <View className='w-16 h-16 p-1 rounded-xl bg-gray-400  '>
          <Image
            className='w-full h-full rounded-lg'
            source={require('../assets/images/person.png')}
            resizeMode='cover'
          />
        </View>

      </View>

      <View className=" flex-row justify-end  ">
        <View className="p-2  border-2 border-gray-300 rounded-xl">
          <MaterialIcons name="notifications-none" size={33} color="black" />
        </View>
      </View>


      <View className="mt-5 flex flex-row items-center  gap-2">
        <View className="flex-1 border-2 border-gray-300 h-14 justify-center px-2 rounded-lg">
          <View className="flex-row items-center gap-2">
            <Feather name="search" size={24} color="gray" />
            <Text className="text-gray-400" >Cari apa saja...</Text>
          </View>
        </View>
        <View className="w-24 border-2 border-gray-300 h-14 justify-center items-center rounded-lg">
          <Feather name="menu" size={24} color="black" />
        </View>
      </View>

      {/* layanan */}
      <View>
        <Text className="text-lg font-semibold my-5 text-slate-600">Layanan</Text>
        <View className="flex-row justify-between">
          {layananData.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="w-20 h-20 p-3 rounded-xl bg-white shadow-xl shadow-slate-500"
            >
              <Image
                className="w-full h-full rounded-lg"
                source={item.image}
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="bg-white shadow-xl shadow-slate-600 h-24 my-5 rounded-xl p-5">

      </View>

      <Text className="text-lg font-semibold mb-5 text-slate-600">Laporan Prioritas 🔥</Text>

      {/* data belum di map */}
      <View className="flex flex-row flex-wrap ">
        {data.map((item: any, index: any) => (
          <CardBuilding key={index} title={item.title}
            desc={item.desc} location={() => navigation.navigate('report')} />
        ))}
      </View>


    </ScrollView>
  );
}
