import WaterIntakeDial from "@/components/WaterIntakeDial";
import { calculateWaterIntake } from "@/utils/helpers";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector } from "@/redux/hooks";

export default function Tab() {
  const attributes = useAppSelector((state) => state.attributes);
  const goal = calculateWaterIntake(
    attributes.weight,
    "kg",
    attributes.exerciseTimeInMins,
    attributes.hotWeather,
    attributes.highSodiumOrProteinDiet
  );
  const currentIntake = 1.5;

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView
        contentContainerStyle={{ padding: 16, backgroundColor: "#111827" }}
      >
        <View className="justify-center items-center bg-gray-900 p-6">
          <Text className="text-white text-2xl font-bold">Tab Home</Text>
          <WaterIntakeDial intake={currentIntake} goal={goal} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
