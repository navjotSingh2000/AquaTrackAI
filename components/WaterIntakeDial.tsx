import React from "react";
import { View, Text } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";

interface WaterIntakeDialProps {
  intake: number; // Current water intake in liters (or any unit)
  goal: number; // Goal water intake in liters (or any unit)
}

const WaterIntakeDial: React.FC<WaterIntakeDialProps> = ({ intake, goal }) => {
  const percentage = Math.min((intake / goal) * 100, 100); // Ensure the percentage doesn't exceed 100

  const radius = 110; // Large radius for a bold effect
  const strokeWidth = 20; // Thicker stroke for prominence
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  // Calculate the stroke offset based on the percentage
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View className="flex-1 justify-center items-center p-8">
      <Svg width={250} height={250}>
        {/* Background Circle with Elegant Gradient */}
        <Defs>
          <LinearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#333333" stopOpacity="1" />
            <Stop offset="100%" stopColor="#444444" stopOpacity="1" />
          </LinearGradient>

          <LinearGradient
            id="progress-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <Stop offset="0%" stopColor="#4ade80" stopOpacity="1" />
            <Stop offset="100%" stopColor="#16a34a" stopOpacity="1" />
          </LinearGradient>
        </Defs>

        {/* Background Circle */}
        <Circle
          cx="125"
          cy="125"
          r={radius}
          stroke="url(#bg-gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          opacity={0.2}
        />

        {/* Progress Circle with Elegant Gradient */}
        <Circle
          cx="125"
          cy="125"
          r={radius}
          stroke="url(#progress-gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          rotation="-90"
          origin="125, 125"
          strokeLinecap="round"
        />
      </Svg>

      {/* Center Percentage Text */}
      <View className="absolute justify-center items-center">
        <Text className="text-4xl font-bold text-white">
          {Math.round(percentage)}%
        </Text>
        <Text className="text-sm font-medium text-gray-200 mt-2">
          {intake}L / {goal}L
        </Text>
      </View>
    </View>
  );
};

export default WaterIntakeDial;
