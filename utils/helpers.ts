import {
  ADD_EXERCISE_INTAKE_L,
  ADD_EXERCISE_PER_MINUTE,
  ADD_SPECIAL_DIET_L,
  ADD_TEMPERATURE_PERCENT,
  GRAMS,
  ML_PER,
  OZ_TO_LITRES,
} from "@/constants/data";

export const calculateWaterIntake = (
  weight: number,
  unit: "kg" | "lbs" = "kg",
  exerciseMinutes: number = 0,
  highTemperature: boolean = false,
  highSodiumOrProtein: boolean = false
): number => {
  let waterLiters: number;

  if (unit === "kg") {
    waterLiters = (weight * ML_PER) / GRAMS;
  } else if (unit === "lbs") {
    waterLiters = weight * OZ_TO_LITRES;
  } else {
    throw new Error("Invalid unit. Use 'kg' or 'lbs'.");
  }

  const extraWater =
    (exerciseMinutes / ADD_EXERCISE_PER_MINUTE) * ADD_EXERCISE_INTAKE_L;

  let weatherAdjustment = 0;
  if (highTemperature) {
    weatherAdjustment = waterLiters * ADD_TEMPERATURE_PERCENT;
  }

  const dietAdjustment = highSodiumOrProtein ? ADD_SPECIAL_DIET_L : 0;

  const totalWater =
    waterLiters + extraWater + weatherAdjustment + dietAdjustment;

  return parseFloat(totalWater.toFixed(2));
};
