import React, { useState } from "react";

function TodoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState();

    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTasks("");
        }
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }

    }

    function moveTaskdown(index){

         if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }

    }

    return(

        <div className="to-do-list">

            <h1>To-do-List</h1>

            <div>
                <input
                    className="inputs"
                    type="text"
                    placeholder="Enter a Task"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>
            <ul>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>

                        <button className="delete-button" 
                        onClick={() => deleteTask(index)}>
                            Delete
                        </button> 

                         <button className="move-button" 
                        onClick={() => moveTaskUp(index)}>
                            Up
                        </button> 

                         <button className="move-button" 
                        onClick={() => moveTaskdown(index)}>
                            Down
                        </button> 
                </li>)}
            </ul>
        </div>

    );
}

export default TodoList