import connectMongo from '../../../utils/db.js';
import { NextApiRequest, NextApiResponse } from 'next';
import Todo from '../../../models/testModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();

    const id = Number(req.query.id);

    if (req.method === 'GET') {
        try {
            const todo = await Todo.findById(id);
            if (!todo) {
                res.status(404).json({ message: "Todo Not Found" });
            } else {
                res.status(200).json({ todo });
            }
        } catch (error) {
            res.status(500).json({ error: "Error fetching todo" });
        }
    } else if (req.method === 'PUT') {
        try {
            const todo = await Todo.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            if (!todo) {
                res.status(404).json({ message: "Todo Not Found" });
            } else {
                res.status(200).json({ message: "Todo Updated Successfully" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error updating todo" });
        }
    } else if (req.method === 'DELETE') {
        try {
            const deletedTodo = await Todo.deleteOne({ id: id });
            if (deletedTodo.deletedCount === 0) {
                res.status(404).json({ message: "Todo not found" });
            } else {
                res.status(200).json({ message: "Todo Deleted successfully" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error deleting todo" });
        }
    }
}