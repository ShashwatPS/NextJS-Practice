import { Schema, model } from "mongoose";

const todoSchema = new Schema({
    id: Number,
    title: String,
    description: String,
});

const Todo = model("Todo", todoSchema);

export default Todo;