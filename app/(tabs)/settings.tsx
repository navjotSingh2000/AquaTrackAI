import { View, Text, TextInput, ScrollView, Platform } from "react-native";
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAttribute } from "@/redux/attributesSlice";
import { Attributes } from "@/types/attributes";
import { EXERCISE_TIMES } from "@/constants/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootState } from "@/redux/store";

export default function Tab() {
  const dispatch = useAppDispatch();
  const attributes = useAppSelector((state: RootState) => state.attributes);

  function onAttributeChange<T extends keyof Attributes>(
    value: Attributes[T],
    key: T
  ) {
    dispatch(setAttribute({ key, value }));
  }

  return (
    <View className="flex-1 bg-gray-900">
      <SafeAreaView className="flex">
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <View className="flex flex-col items-center p-6 min-h-screen">
            <Text className="text-3xl font-bold text-white mb-4">
              Attributes
            </Text>
            <View className="w-full max-w-md bg-gray-800 p-6 rounded-2xl shadow-lg">
              <View className="mb-4">
                <Text className="text-lg font-medium text-gray-300 mb-1">
                  Weight (kg)
                </Text>
                <TextInput
                  keyboardType="numeric"
                  onChangeText={(text) =>
                    onAttributeChange(
                      parseInt(text.replace(/[^0-9]/g, "")) || 0,
                      "weight"
                    )
                  }
                  value={attributes.weight.toString()}
                  placeholder="Enter your weight"
                  className="w-full p-3 border border-gray-600 rounded-lg text-lg text-white"
                />
              </View>
              <View className="mb-4">
                <Text className="text-lg font-medium text-gray-300 mb-1">
                  Exercise Time (mins)
                </Text>
                <Picker
                  selectedValue={attributes.exerciseTimeInMins}
                  onValueChange={(itemValue) =>
                    onAttributeChange(itemValue, "exerciseTimeInMins")
                  }
                  style={{
                    backgroundColor:
                      Platform.OS === "android" ? "#4F46E5" : "transparent",
                  }}
                >
                  {EXERCISE_TIMES.map((item) => (
                    <Picker.Item
                      key={item.time}
                      label={item.label}
                      value={item.time}
                      style={{
                        backgroundColor:
                          Platform.OS === "android" ? "#4F46E5" : "transparent",
                        color: "white",
                      }}
                    />
                  ))}
                </Picker>
              </View>
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-lg font-medium text-gray-300">
                  Hot Weather
                </Text>
                <Checkbox
                  value={attributes.hotWeather}
                  onValueChange={(value) =>
                    onAttributeChange(value, "hotWeather")
                  }
                  color={attributes.hotWeather ? "#4F46E5" : undefined}
                />
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-lg font-medium text-gray-300">
                  High Sodium/Protein Diet
                </Text>
                <Checkbox
                  value={attributes.highSodiumOrProteinDiet}
                  onValueChange={(value) =>
                    onAttributeChange(value, "highSodiumOrProteinDiet")
                  }
                  color={
                    attributes.highSodiumOrProteinDiet ? "#4F46E5" : undefined
                  }
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
