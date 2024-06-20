import { Schema, model, models } from "mongoose";


const CategoriesSchema = new Schema({
    categoryId: { type: String, required: true },
    name: { type: String, required: true }
});

const Category = models.Category || model("Category", CategoriesSchema);
export default Category;
