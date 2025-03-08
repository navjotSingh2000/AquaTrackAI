import WaterIntakeDial from "@/components/WaterIntakeDial";
import { calculateWaterIntake } from "@/utils/helpers";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import WaterIntakeCup from "@/components/WaterIntakeCup";
import { MATERIAL_ICON_CUPS } from "@/constants/data";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { logIntake, resetIntake } from "@/redux/logIntakeSlice";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Tab() {
  const dispatch = useAppDispatch();
  const attributes = useAppSelector((state: RootState) => state.attributes);
  const currentIntake = useAppSelector(
    (state: RootState) => state.logIntake.currentIntake
  );

  useEffect(() => {
    const checkAndResetIntake = async () => {
      const today = moment().format("YYYY-MM-DD");
      const lastResetDate = await AsyncStorage.getItem("lastResetDate");

      if (lastResetDate !== today) {
        dispatch(resetIntake());
        await AsyncStorage.setItem("lastResetDate", today);
      }
    };

    checkAndResetIntake();
  }, [dispatch]);

  const goal = calculateWaterIntake(
    attributes.weight,
    "kg",
    attributes.exerciseTimeInMins,
    attributes.hotWeather,
    attributes.highSodiumOrProteinDiet
  );

  function handleLogIntake(cupCapacity: number) {
    const potentialIntake = currentIntake + cupCapacity;
    const newIntake = potentialIntake > goal ? goal : potentialIntake;
    dispatch(logIntake({ key: "currentIntake", value: newIntake }));
  }

  return (
    <View className="flex-1 bg-gray-900">
      <SafeAreaView className="flex justify-center items-center">
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <View className="justify-center items-center p-6">
            <Text className="text-3xl font-bold text-white mb-4">Tab Home</Text>
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
                    onPress={() => handleLogIntake(cup.capacity)}
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
