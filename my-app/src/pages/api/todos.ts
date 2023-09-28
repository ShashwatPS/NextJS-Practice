import {NextApiRequest, NextApiResponse} from "next";
import connectMongo from "../../../utils/db.js";
import Todo from "../../../models/testModel"
export default async function handler(req: NextApiRequest,res: NextApiResponse){
    await connectMongo();
    if(req.method === 'GET'){
        const ans = await Todo.find({});
        res.status(200).json({ans})
    }
    else if(req.method === 'POST'){
        const newTodo = {
            id: Math.floor(Math.random()*1000000),
            title: req.body.title,
            description: req.body.description,
        };
        try {
            const newSave = new Todo(newTodo);
            await newSave.save();
            res.status(200).json(newTodo);
        } catch {
            res.status(500);
        }
    }
}