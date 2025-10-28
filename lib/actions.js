"use server";
import { uploadImage } from "@/lib/cloudinary";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const file = formData.get("image");

 
  if (!file || file.size === 0) {
    return { message: "Please select an image file." };
  }

  let imageUrl;
  try {
    imageUrl = await uploadImage(file);
  } catch (error) {
    return { message: "Image upload failed. Try again." };
  }

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: imageUrl,
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image
  ) {
    return { message: "Invalid Input.." };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
