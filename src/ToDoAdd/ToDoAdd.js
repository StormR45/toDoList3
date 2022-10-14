import React, {useState} from "react";

const ToDoAdd =({toDo, setToDo})=>{
    const [value, setValue] = useState('')

    const saveToDo =()=>{
        // let inId = 4;
        // inId = inId++;
        // console.log(inId);
        setToDo(
            [...toDo,{
            id: Math.random().toString(10),
            title: value,
            status: 'false'
        }]
        )
        // console.log(status)
    }
    return(
        <div>
            <input placeholder='What we are doing today?' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={saveToDo}>Add</button>
        </div>
    )
}
export default ToDoAdd;