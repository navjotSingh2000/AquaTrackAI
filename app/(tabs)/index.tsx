import WaterIntakeDial from "@/components/WaterIntakeDial";
import { calculateWaterIntake } from "@/utils/helpers";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector } from "@/redux/hooks";
import WaterIntakeCup from "@/components/WaterIntakeCup";
import { MATERIAL_ICON_CUPS } from "@/constants/data";
import { RootState } from "@/redux/store";

export default function Tab() {
  const attributes = useAppSelector((state: RootState) => state.attributes);
  const goal = calculateWaterIntake(
    attributes.weight,
    "kg",
    attributes.exerciseTimeInMins,
    attributes.hotWeather,
    attributes.highSodiumOrProteinDiet
  );
  const currentIntake = 1.5;

  return (
    <View className="flex-1 bg-gray-900">
      <SafeAreaView className="flex justify-center items-center">
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <View className="justify-center items-center p-6">
            <Text className="text-white text-2xl font-bold">Tab Home</Text>
            <WaterIntakeDial intake={currentIntake} goal={goal} />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row justify-center items-center gap-2">
              {MATERIAL_ICON_CUPS.map((cup) => {
                return (
                  <WaterIntakeCup
                    key={cup.name}
                    icon={cup.name}
                    label={cup.label}
                    capacity={cup.capacity}
                    onPress={() => console.log("Pressed")}
                  />
                );
              })}
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
