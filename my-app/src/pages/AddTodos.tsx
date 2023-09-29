import {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import styles  from "../styles/AddTodo.module.css"

function AddTodos() {
    const [Todo, SetTodo] = useState([]);
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");

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

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "350px",
                }}
            >
                <div
                    style={{
                        marginBottom: "35px",
                    }}
                >
                    <TextField
                        style={{
                            marginRight: "50px",
                        }}
                        InputLabelProps={{className: styles.text}}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        id="title"
                        label="Title"
                        variant="standard"
                    />
                    <TextField
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        style={{
                            marginRight: "35px",
                        }}
                        id="description"
                        label="Description"
                        variant="standard"
                    />
                    <AddIcon style={{
                        paddingTop: "18px",
                    }}
                             onClick={() => {
                                 function callback2(data) {
                                     fetchTodos();
                                     console.log(data);
                                 }

                                 function callback1(res) {
                                     res.json().then(callback2);
                                 }

                                 fetch("http://localhost:3000/api/todos", {
                                     method: "POST",
                                     body: JSON.stringify({
                                         title: Title,
                                         description: Description,
                                     }),
                                     headers: {
                                         "Content-type": "application/json",
                                     },
                                 }).then(callback1);
                             }}
                    >
                        Add Todo
                    </AddIcon>
                </div>
            </div>
        </>
    );
}

export default AddTodos;