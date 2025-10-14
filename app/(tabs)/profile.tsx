import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'

const Profile = () => {
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

        {/* Profile Header */}
        <View className="items-center mb-8">
          {/* Avatar */}
          <View className="w-28 h-28 rounded-full bg-accent/20 border-4 border-accent items-center justify-center mb-4">
            <Text className="text-5xl text-accent font-bold">MF</Text>
          </View>
          
          {/* User Info */}
          <Text className="text-white text-2xl font-bold mb-1">Movie Fanatic</Text>
          <Text className="text-light-300 text-sm">moviefan@gmail.com</Text>
          <View className="mt-3 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
            <Text className="text-accent text-xs font-semibold">Premium Member</Text>
          </View>
        </View>

        {/* Stats Section */}
        <View className="flex-row justify-around mb-8 bg-secondary/40 rounded-2xl py-6 px-4 border border-accent/10">
          <View className="items-center">
            <Text className="text-accent text-2xl font-bold">127</Text>
            <Text className="text-light-300 text-xs mt-1">Watched</Text>
          </View>
          <View className="w-px h-12 bg-accent/20" />
          <View className="items-center">
            <Text className="text-accent text-2xl font-bold">45</Text>
            <Text className="text-light-300 text-xs mt-1">Favorites</Text>
          </View>
          <View className="w-px h-12 bg-accent/20" />
          <View className="items-center">
            <Text className="text-accent text-2xl font-bold">8</Text>
            <Text className="text-light-300 text-xs mt-1">Watchlist</Text>
          </View>
        </View>

        {/* Account Info */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-4">Account Information</Text>
          
          <View className="bg-secondary/40 rounded-2xl border border-accent/10 overflow-hidden">
            <InfoRow label="Member Since" value="January 2024" />
            <Divider />
            <InfoRow label="Username" value="@moviefanatic" />
            <Divider />
            <InfoRow label="Location" value="Los Angeles, CA" />
            <Divider />
            <InfoRow label="Language" value="English" />
          </View>
        </View>

        {/* Preferences */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-4">Preferences</Text>
          
          <View className="bg-secondary/40 rounded-2xl border border-accent/10 overflow-hidden">
            <OptionRow icon={icons.star} label="Favorite Genres" value="Action, Sci-Fi, Thriller" />
            <Divider />
            <OptionRow icon={icons.play} label="Auto-play Trailers" value="Enabled" />
            <Divider />
            <OptionRow icon={icons.save} label="Download Quality" value="High (1080p)" />
          </View>
        </View>

        {/* Action Buttons */}
        <View className="gap-3 mb-6">
          <TouchableOpacity className="bg-accent/20 py-4 rounded-xl border border-accent/30 flex-row items-center justify-center">
            <Text className="text-accent text-base font-bold">Edit Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-secondary/60 py-4 rounded-xl border border-accent/10 flex-row items-center justify-center">
            <Text className="text-white text-base font-bold">Settings</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-red-900/20 py-4 rounded-xl border border-red-500/30 flex-row items-center justify-center">
            <Text className="text-red-400 text-base font-bold">Sign Out</Text>
          </TouchableOpacity>
        </View>

        {/* App Version */}
        <Text className="text-light-300/40 text-xs text-center mb-4">
          MovieFlex v1.0.0
        </Text>
      </ScrollView>
    </View>
  )
}

// Helper Components
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View className="flex-row justify-between items-center px-5 py-4">
    <Text className="text-light-300 text-sm">{label}</Text>
    <Text className="text-white text-sm font-semibold">{value}</Text>
  </View>
)

const OptionRow = ({ icon, label, value }: { icon: any; label: string; value: string }) => (
  <View className="flex-row justify-between items-center px-5 py-4">
    <View className="flex-row items-center gap-3">
      <Image source={icon} className="w-5 h-5 tint-accent" />
      <Text className="text-light-300 text-sm">{label}</Text>
    </View>
    <Text className="text-white text-sm font-semibold">{value}</Text>
  </View>
)

const Divider = () => <View className="h-px bg-accent/10 mx-5" />

export default Profile