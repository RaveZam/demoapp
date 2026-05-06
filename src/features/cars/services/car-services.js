import { supabase } from "@/utils/supabase";

export async function fetchCars() {
  const { data } = await supabase.from("cars").select();
  return data;
}

export async function deleteCar(id) {
  await supabase.from("cars").delete().eq("id", id);
}

export async function addCar(name, color) {
  const { error } = await supabase
    .from("cars")
    .insert([{ car_name: name, car_color: color }]);

  if (error) {
    console.log(error);
    return;
  }
}

export async function getCar(id) {
  const { data } = await supabase.from("cars").select().eq("id", id).single();
  return data;
}

export async function updateCar(id, car_name, car_color) {
  await supabase.from("cars").update({ car_name, car_color }).eq("id", id);
}
