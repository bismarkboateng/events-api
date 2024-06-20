import { Schema, model, models } from "mongoose";


const SchoolSchema = new Schema({
    schoolId: { type: String, required: true },
    name: { type: String, required: true }
});

const School = models.School || model("School", SchoolSchema);
export default School;
