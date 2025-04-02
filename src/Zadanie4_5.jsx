import React from "react"; 
import { useForm } from "react-hook-form"; 
 
function Zadanie4_5() { 
    function Zadanie4_5a(){
        const { register, handleSubmit } = useForm(); 
 
        function onSubmit(data) {
      
          console.log("Dane użytkownika:", data); 
        } 
       
        return ( 
          <form onSubmit={handleSubmit(onSubmit)}> 
            <div className="mb-3"> 
              <label htmlFor="name" className="form-label">Nazwa</label> 
              <input type="text" id="name" className="form-control" {...register("name")} /> 

              <label htmlFor="emai" className="form-label">Adres</label> 
              <input type="text" id="emai" className="form-control" {...register("number")} /> 

              <label htmlFor="message" className="form-label">Wiadomośc</label> 
              <input type="text" id="message" className="form-control" {...register("message")} /> 
                
              <button type="submit" className="btn btn-primary">Wyślij</button> 
            </div> 
       
          </form> 
        ); 
    }

    function Zadanie4_5b(){
        const { register, handleSubmit } = useForm(); 
 
        function onSubmit(data) {
      
          console.log(data); 
        } 
       
        return ( 
          <form onSubmit={handleSubmit(onSubmit)}> 
            <div className="mb-3"> 
              <label htmlFor="fullName" className="form-label">Nazwa</label> 
              <input type="text" id="fullName" className="form-control" {...register("fullName")} /> 

              <label htmlFor="emai" className="form-label">Adres</label> 
              <input type="text" id="emai" className="form-control" {...register("number")} /> 

              <label htmlFor="date " className="form-label">Wiadomośc</label> 
              <input type="date" id="date " className="form-control" {...register("date ")} /> 

              <label htmlFor="ticketCount" className="form-label">Wiadomośc</label> 
              <input type="number" id="ticketCount" className="form-control" {...register("ticketCount")} /> 
                
              <button type="submit" className="btn btn-primary">Wyślij</button> 
            </div> 
       
          </form> 
        ); 
    }
  return(<>
    <h1 id='z5' ><a href="#start">Zadanie 5</a></h1>
    <Zadanie4_5a/>
    <Zadanie4_5b/>
    </>);
} 
 
export default Zadanie4_5; 