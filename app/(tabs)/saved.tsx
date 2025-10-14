import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'

const Saved = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" resizeMode="cover" />
      
      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Logo */}
        <View className="w-full flex-row justify-center mt-20 mb-8">
          <Image source={icons.logo} className="w-12 h-10" />
        </View>

        {/* Header */}
        <View className="mb-8">
          <Text className="text-white text-3xl font-bold mb-2">Saved Movies</Text>
          <Text className="text-light-300 text-sm">Your favorite movies collection</Text>
        </View>

        {/* Empty State */}
        <View className="flex-1 items-center justify-center py-20">
          <View className="w-24 h-24 rounded-full bg-accent/10 items-center justify-center mb-6 border-2 border-accent/20">
            <Image source={icons.save} className="w-12 h-12 tint-accent" />
          </View>
          <Text className="text-white text-xl font-bold mb-2">No Saved Movies Yet</Text>
          <Text className="text-light-300 text-sm text-center px-8">
            Start saving your favorite movies to watch them later
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Saved