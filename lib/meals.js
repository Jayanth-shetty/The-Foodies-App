import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export default async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
 
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  if (typeof meal.image !== "string" || !meal.image.startsWith("http")) {
    throw new Error("Invalid image URL from Cloudinary.");
  }

  db.prepare(
    `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
     VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`
  ).run(meal);
}
