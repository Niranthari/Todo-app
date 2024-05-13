
import { useState } from "react";

export function AddTodo(props){

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    return (
        <div>
            <input id = "title" style ={{
                padding:10,
                margin:10,
            }}type="text" placeholder="Title" onChange={function(e){
                const value = e.target.value;
                setTitle(value);
            }}></input>
            <input id="description" type ="text" style ={{
                padding:10,
                margin:10,
            }} placeholder="description" onChange={function(e){
                const value = e.target.value;
                setDescription(value);
            }}></input>
        
            <button onClick={function(){

                fetch("http://localhost:3000/todo", {
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:description,
                        completed:false
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                }).then( async function(req,res){
                    const resp = await res.json();
                    console.log("todo added");
                })

            }}> Add todo</button>       
        </div>
    )
}