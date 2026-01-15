import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PayScreen = () => {
  return (
    <View className="px-6 pt-6">
      {/*Reputation Score Card*/}
      <View className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row items-center gap-2">
            <View className="w-6 h-6 bg-[#A7F3D0] rounded-full items-center justify-center">
              <Ionicons name="trophy" size={14} color="#059669" />
            </View>
            <Text className="text-[#8E8E8E] font-medium">Reputation Score</Text>
          </View>
          <View className="bg-[#D1FAE5] px-3 py-1 rounded-full">
            <Text className="text-[#059669] text-xs font-semibold">Verified</Text>
          </View>
        </View>

        <View className="items-center mb-4">
          <View className="flex-row items-end">
            <Text className="text-6xl font-bold text-[#0F5257]">82</Text>
            <Text className="text-2xl text-[#8E8E8E] mb-2">/100</Text>
          </View>
        </View>

        <View className="w-full h-2 bg-gray-200 rounded-full mb-2">
          <View className="w-4/5 h-2 bg-[#0F5257] rounded-full" />
        </View>

        <Text className="text-[#8E8E8E] text-xs text-center">
          Excellent reputation • Higher score = more credit
        </Text>
      </View>

      {/*Available Credit Card*/}
      <View className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-[#8E8E8E] text-sm mb-2">Available Credit</Text>
            <Text className="text-4xl font-bold text-[#0F5257]">$320.00</Text>
            <Text className="text-[#8E8E8E] text-xs mt-1">Based on your reputation</Text>
          </View>
          <View className="w-12 h-12 bg-[#FEF3C7] rounded-xl items-center justify-center">
            <Ionicons name="wallet" size={24} color="#F59E0B" />
          </View>
        </View>
      </View>

      {/*Amount Due Card*/}
      <View className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
        <View className="flex-row items-center gap-2 mb-3">
          <View className="bg-[#D1FAE5] px-3 py-1 rounded-full">
            <Text className="text-[#059669] text-xs font-semibold">ACTIVE</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <Ionicons name="time-outline" size={14} color="#8E8E8E" />
            <Text className="text-[#8E8E8E] text-xs">3 days left</Text>
          </View>
        </View>

        <Text className="text-[#8E8E8E] text-sm mb-2">Amount Due</Text>
        <Text className="text-4xl font-bold text-[#343434] mb-1">$50.00</Text>
        <Text className="text-[#8E8E8E] text-xs mb-4">of $150.00</Text>

        <View className="w-full h-2 bg-gray-200 rounded-full mb-4">
          <View className="w-1/3 h-2 bg-[#0F5257] rounded-full" />
        </View>

        <TouchableOpacity 
          activeOpacity={0.8}
          className="bg-[#FF9C6E] rounded-xl py-4 items-center"
        >
          <View className="flex-row items-center gap-2">
            <Text className="text-white font-semibold text-base">Pay now</Text>
            <Ionicons name="arrow-forward" size={18} color="white" />
          </View>
        </TouchableOpacity>
      </View>

      {/*Action buttons */}
      <View className="flex-row gap-3 mb-4">
        <TouchableOpacity 
          activeOpacity={0.8}
          className="flex-1 bg-white rounded-2xl p-5 items-center shadow-sm"
        >
          <View className="w-12 h-12 bg-[#D1FAE5] rounded-xl items-center justify-center mb-3">
            <Ionicons name="eye-outline" size={24} color="#059669" />
          </View>
          <Text className="text-[#343434] text-sm font-medium text-center">View</Text>
          <Text className="text-[#343434] text-sm font-medium text-center">Reputation</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity={0.8}
          className="flex-1 bg-white rounded-2xl p-5 items-center shadow-sm"
        >
          <View className="w-12 h-12 bg-[#FEF3C7] rounded-xl items-center justify-center mb-3">
            <Ionicons name="compass-outline" size={24} color="#F59E0B" />
          </View>
          <Text className="text-[#343434] text-sm font-medium text-center">Explore</Text>
          <Text className="text-[#343434] text-sm font-medium text-center">Merchants</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity={0.8}
          className="flex-1 bg-white rounded-2xl p-5 items-center shadow-sm"
        >
          <View className="w-12 h-12 bg-[#FECACA] rounded-xl items-center justify-center mb-3">
            <Ionicons name="time-outline" size={24} color="#EF4444" />
          </View>
          <Text className="text-[#343434] text-sm font-medium text-center">Loan History</Text>
        </TouchableOpacity>
      </View>

      {/* BNPL Card */}
      <View className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 bg-[#D1FAE5] rounded-full items-center justify-center">
            <Ionicons name="checkmark-circle" size={24} color="#059669" />
          </View>
          <View className="flex-1">
            <Text className="text-[#343434] font-semibold mb-1">You are eligible for BNPL</Text>
            <Text className="text-[#8E8E8E] text-xs">
              Start shopping with Buy Now, Pay Later at hundreds of merchants
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PayScreen;