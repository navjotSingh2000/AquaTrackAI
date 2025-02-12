import { View, Text, TextInput, Button } from "react-native";
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAttribute } from "@/redux/attributesSlice";
import { Attributes } from "@/types/attributes";
import { ExerciseTimes } from "@/constants/exerciseTimesData";

export default function Tab() {
  const dispatch = useAppDispatch();
  const attributes = useAppSelector((state) => state.attributes);

  function onAttributeChange<T extends keyof Attributes>(
    value: Attributes[T],
    key: T
  ) {
    dispatch(setAttribute({ key, value }));
  }

  return (
    <View className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <Text className="text-3xl font-bold text-gray-800 mb-4">Attributes</Text>
      <Button title="Test" onPress={() => console.log(attributes)}></Button>
      <View className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <View className="mb-4">
          <Text className="text-lg font-medium text-gray-700 mb-1">
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
            onValueChange={(itemValue) =>
              onAttributeChange(itemValue, "exerciseTimeInMins")
            }
          >
            {ExerciseTimes.map((item) => (
              <Picker.Item
                key={item.time}
                label={item.label}
                value={item.time}
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
