import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// to convert oz to liters
export const OZ_TO_LITRES = 0.5 * 0.0295735;

// to account 35mL per kg
export const ML_PER = 35;
export const GRAMS = 1000;

// added 10% for high temperature condition
export const ADD_TEMPERATURE_PERCENT = 0.1;

// extra water for exercise (0.35 to 0.5 liters per 30 min)
export const ADD_EXERCISE_INTAKE_L = 0.4;
export const ADD_EXERCISE_PER_MINUTE = 30;

// extra water for high sodium/protein diet (1L extra for high sodium or protein intake)
export const ADD_SPECIAL_DIET_L = 1;

export const EXERCISE_TIMES = [
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

export const MATERIAL_ICON_CUPS: {
  name: keyof typeof MaterialIcons.glyphMap;
  label: string;
  capacity: number;
}[] = [
  { name: "local-drink", label: "100 ml", capacity: 0.1 },
  { name: "10mp", label: "250 ml", capacity: 0.25 },
  { name: "11mp", label: "500 ml", capacity: 0.5 },
  { name: "12mp", label: "750 ml", capacity: 0.75 },
  { name: "13mp", label: "1 L", capacity: 1 },
  { name: "14mp", label: "1.25 L", capacity: 1.25 },
  { name: "15mp", label: "1.5 L", capacity: 1.5 },
];
