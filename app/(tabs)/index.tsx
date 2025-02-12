import WaterIntakeDial from "@/components/WaterIntakeDial";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  const currentIntake = 1.5;
  const goal = 3;

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
