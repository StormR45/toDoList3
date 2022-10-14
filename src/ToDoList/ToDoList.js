import React from "react";
const ToDoList =({ toDo, setToDo})=>{

    const StyleOfClass ={
        textDecoration : 'line-through'
    }

    const stateToDo =(id)=>{
        let newToDo = [...toDo].filter(item => {
            if (item.id == id){
                item.status = !item.status
            }

            return item
        })
        setToDo(newToDo)
    }
    const deleteToDo =(id)=>{
        let newToDo = [...toDo].filter(item => item.id!=id)// если условие фильтра выполняется, то зписывается в новый массив(id не равно
        setToDo(newToDo)
    }
    return(
        <div>
            {
            toDo.map(item => ( // зачеркивание работает со второго раза, если ново созданный объект
                <div key={item.id}>
                    <div>
                        <p style={item.status == true ? StyleOfClass : {}}>
                            {item.title}
                        </p>
                    </div>
                    <button onClick={ ()=>deleteToDo(item.id)}>Delete</button>
                    <button onClick={ ()=>stateToDo(item.id)}>Completed</button>
                </div>
            ))
            }
        </div>
    )
}
export default ToDoList;