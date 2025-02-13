import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface WaterIntakeCupProps {
  icon: keyof typeof MaterialIcons.glyphMap; // Ensures only valid MaterialIcons names
  label: string;
  capacity: number;
  size?: number;
  color?: string;
  onPress: () => void;
}

const WaterIntakeCup: React.FC<WaterIntakeCupProps> = ({
  icon,
  label,
  capacity,
  size = 64,
  color = "white",
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons
        name={icon}
        capacity={capacity}
        size={size}
        color={color}
      />
      <Text className="text-center text-lg font-medium text-gray-300">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default WaterIntakeCup;
