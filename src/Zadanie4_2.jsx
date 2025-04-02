import React from "react"; 
function Zadanie4_2(){
function Zadanie4_2a() { 
    function handleSubmit(event) { 
        event.preventDefault(); 
        console.log(document.getElementById("password2_1").value); 
        console.log(document.getElementById("user2_1").value); 
    } 
    return (
    <form onSubmit={handleSubmit}> 
      <div className="mb-3"> 
        <label htmlFor="user2_1" className="form-label">Nazwa uzytkownika</label> 
        <br/><input type="text" id="user2_1" className="form-control" /> 

        <label htmlFor="password2_1" className="form-label">Hasło</label> 
        <br/><input type="password" id="password2_1" className="form-control" /> 
 
      <button type="submit" className="btn btn-primary">Zaloguj</button> 
      </div> 
    </form> 
  ); 
} 
function Zadanie4_2b(){
        function handleSubmit(event) { 
            event.preventDefault(); 
            alert(document.getElementById("user2_2").value); 
            alert(document.getElementById("password2_2").value); 
            alert(document.getElementById("messege2_2").value); 
        } 
    return (
        <form onSubmit={handleSubmit}> 
        <div className="mb-3"> 
            <label htmlFor="user2_2" className="form-label">Nazwa uzytkownika</label> 
            <br/><input type="text" id="user2_2" className="form-control" /> 

            <label htmlFor="password2_2" className="form-label">Hasło</label> 

            <label htmlFor="messege2_2" className="form-label">messege</label> 
            <br/><input type="text" id="messege2_2" className="form-control" /> 
        <button type="submit" className="btn btn-primary">Zaloguj</button> 
        </div> 
        </form> 
    
    );
}


    return(<>
        <h1 id='z2' ><a href="#start">Zadanie 2</a></h1>
        <Zadanie4_2a/>
        <Zadanie4_2b/>
    </>);
}
export default Zadanie4_2; 