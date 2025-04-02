import React, { useRef, useState } from "react"; 
function Zadanie4_3(){
    function Zadanie4_3a() { 
    const emailRef = useRef(null); 
    const passwordRef = useRef(null); 
    
    function handleSubmit(event) { 
        event.preventDefault(); 
        if (emailRef.current && passwordRef.current) { 
        const user = {

            email: emailRef.current.value, 
            password: passwordRef.current.value, 
        }; 
        console.log("Dane użytkownika:", user); 
        } 
    } 
    
    return ( 
        <form onSubmit={handleSubmit}> 
        <div className="mb-3"> 
            <label htmlFor="email3_1" className="form-label">Email</label> 
            <input type="text" id="email3_1" className="form-control" ref={emailRef} /> 

            <label htmlFor="password3_1" className="form-label">Hasło</label> 
            <input type="password" id="password3_1" className="form-control" ref={passwordRef} />  
    
        <button type="submit" className="btn btn-primary">Wyślij</button> 
        </div>
        </form> 
    ); 
    } 
    function Zadanie4_3b(){
    const taskRef = useRef(null);  
    const [task, setTask] = useState(["Zakupy", "Sprzatanie", "Kwantyzowanie"]);
    
    function addTask(index, newName){
            setTask((prevTask) => {
            const newTask = [...prevTask]; 
            newTask.splice(index, 0, newName); 
            return newTask;     
        });
    }
    function handleSubmit(event) { 
        event.preventDefault(); 
        if (taskRef.current) { 
        addTask(0, document.getElementById("taskAdd").value);
        } 
    } 
    
    return ( 
        <form onSubmit={handleSubmit}> 
        <div className="mb-3"> 
            <label htmlFor="taskAdd" className="form-label">TaskList</label> 
            <input type="text" id="taskAdd" className="form-control" ref={taskRef} />  
        
        <button type="submit" className="btn btn-primary">Wyślij</button> 
        <p>{task.join("\r\n")}</p> 
        </div>
        </form> 
    );}

    return(<>
        <h1 id='z3' ><a href="#start">Zadanie 3</a></h1>
        <Zadanie4_3a/>
        <Zadanie4_3b/>
    </>);
}
export default Zadanie4_3; 