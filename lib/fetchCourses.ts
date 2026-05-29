import { supabase } from "./supabase";

export async function fetchCourses() {
  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}