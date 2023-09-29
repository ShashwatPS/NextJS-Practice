import {Button, Card, CardActions, CardContent} from "@mui/material";
import {useEffect, useState} from "react";
import styles from "../styles/Todos.module.css";

type test = {
    _id: string,
     id:number,
    title: string,
    description: string
}
function Todos(){
    const [Todo, SetTodo] = useState<test[]>([]);
    const fetchTodos = ()=>{
        fetch("http://localhost:3000/api/todos", {
            method: "GET",
        }).then((res) => {
            res.json().then((data) => {
                SetTodo(data.Todos);
            });
        });
    }

    useEffect(() => {
        fetch("http://localhost:3000/api/todos", {
            method: "GET",
        }).then((res) => {
            res.json().then((data) => {
                SetTodo(data.Todos);
            });
        });
    }, []);

    return(
        <div>
            {Todo.map((data) => (
                <Card key={data.id} sx={{
                    bgcolor: "#454545",
                    borderRadius: "0",
                    borderBottom: "1px solid white",
                }}>
                    <CardContent>
                        <div className={styles.titlecard}>
                            {data.title}
                        </div>
                        <br/>
                        <div className={styles.descriptioncard}>
                            {data.description}
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button sx={{
                            color: "white",
                        }}
                                size="small"
                                onClick={() => {
                                    fetch(`http://localhost:3000/api/todos/${data.id}`, {
                                        method: "DELETE",
                                        headers: {
                                            "Content-type": "application/json",
                                        },
                                    }).then(() => fetchTodos());
                                }}
                        >
                            DELETE
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )}


export default Todos;