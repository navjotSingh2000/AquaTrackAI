import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";

export type Attributes = {
  weight: number;
  exerciseTimeInMins: number;
  hotWeather: boolean;
  highSodiumOrProteinDiet: boolean;
};

const defaultAttributes = {
  weight: 70,
  exerciseTimeInMins: 60,
  hotWeather: true,
  highSodiumOrProteinDiet: false,
};

const exerciseTimes = [
  { time: 15, label: "15 mins" },
  { time: 30, label: "30 mins" },
  { time: 45, label: "45 mins" },
  { time: 60, label: "1 hour" },
  { time: 90, label: "1 hour 30 mins" },
  { time: 120, label: "2 hours" },
  { time: 150, label: "2 hours 30 mins" },
  { time: 180, label: "3 hours" },
  { time: 210, label: "3 hours 30 mins" },
  { time: 240, label: "4 hours" },
];

export default function Tab() {
  const [attributes, setAttributes] = useState<Attributes>(defaultAttributes);

  function onAttributeChange(value: number | boolean, key: keyof Attributes) {
    setAttributes((prev) => ({
      ...prev,
      [key]: value,
    }));

    console.log(attributes);
  }

  return (
    <View className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <Text className="text-3xl font-bold text-gray-800 mb-4">Attributes</Text>
      <View className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <View className="mb-4">
          <Text className="text-lg font-medium text-gray-700 mb-1">
            Weight (kg)
          </Text>
          <TextInput
            keyboardType="numeric"
            onChangeText={(text) =>
              onAttributeChange(
                parseInt(text.toString().replace(/[^0-9]/g, "")) || 0,
                "weight"
              )
            }
            value={attributes.weight.toString()}
            placeholder="Enter your weight"
            className="w-full p-3 border border-gray-300 rounded-lg text-lg"
          />
        </View>
        <View className="mb-4">
          <Text className="text-lg font-medium text-gray-700 mb-1">
            Exercise Time (mins)
          </Text>
          <Picker
            className="w-full p-3 border border-gray-300 rounded-lg text-lg"
            selectedValue={attributes.exerciseTimeInMins}
            onValueChange={(itemValue, itemIndex) =>
              onAttributeChange(itemValue, "exerciseTimeInMins")
            }
          >
            {exerciseTimes.map((entry) => (
              <Picker.Item
                key={entry.time}
                label={entry.label}
                value={entry.time}
              />
            ))}
          </Picker>
        </View>
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-lg font-medium text-gray-700">Hot Weather</Text>
          <Checkbox
            value={attributes.hotWeather}
            onValueChange={(value) => onAttributeChange(value, "hotWeather")}
            color={attributes.hotWeather ? "#4F46E5" : undefined}
          />
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-medium text-gray-700">
            High Sodium/Protein Diet
          </Text>
          <Checkbox
            value={attributes.highSodiumOrProteinDiet}
            onValueChange={(value) =>
              onAttributeChange(value, "highSodiumOrProteinDiet")
            }
            color={attributes.highSodiumOrProteinDiet ? "#4F46E5" : undefined}
          />
        </View>
      </View>
    </View>
  );
}
