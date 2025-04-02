import React from "react"; 
function Zadanie4_1(){
function Zadanie4_1a() { 
  return ( 
    <form> 
      <div className="mb-3"> 
        <label htmlFor="user" className="form-label">Nazwa uzytkownika</label> 
        <br/><input type="text" id="user" className="form-control" />  
 
        <label htmlFor="password" className="form-label">Hasło</label> 
        <br/><input type="password" id="password" className="form-control" /> 
 
      <button type="submit" className="btn btn-primary">Zaloguj</button> 
      </div> 
    </form> 
  ); 
} 
function Zadanie4_1b(){
        function handleSubmit(event) { 
            event.preventDefault(); 
            alert(document.getElementById("password2").value); 
            alert(document.getElementById("user2").value); 
            alert(document.getElementById("messege").value); 
        } 
    return (
        <form onSubmit={handleSubmit}> 
        <div className="mb-3"> 
            <label htmlFor="user2" className="form-label">Nazwa uzytkownika</label> 
            <br/><input type="text" id="user2" className="form-control" /> 

            <label htmlFor="password2" className="form-label">Hasło</label> 
            <br/><input type="password" id="password2" className="form-control" /> 

            <label htmlFor="messege" className="form-label">messege</label> 
            <br/><input type="text" id="messege" className="form-control" /> 
    
        <button type="submit" className="btn btn-primary">Zaloguj</button> 
        </div> 
        </form> 
    );
}


    return(<>
        <h1 id='z1' ><a href="#start">Zadanie 1</a></h1>
        <Zadanie4_1a/>
        <Zadanie4_1b/>
    </>);
}
export default Zadanie4_1; 