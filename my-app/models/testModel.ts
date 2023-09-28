import { Schema, model,models } from "mongoose";

const todoSchema = new Schema({
    id: Number,
    title: String,
    description: String,
});

const Todo = models.Todo || model("Todo", todoSchema);

export default Todo;