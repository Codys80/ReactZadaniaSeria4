import React from "react"; 
import { useForm } from "react-hook-form"; 
 
function Zadanie4_6() { 

  function Zadanie4_6a(){
    const pattern = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
      } = useForm(); 
    
    function onSubmit(data) { 
        console.log("Dane użytkownika:", data); 
      } 
     
      return ( 
        <form onSubmit={handleSubmit(onSubmit)}> 
          <div className="mb-3"> 
            <label htmlFor="email" className="form-label">Imię</label> 
            <input 
              type="text" 
              id="email" 
              className="form-control" 
              {...register("email", { required: true, minLength: 3, pattern: pattern })} 
            /> 
            {errors.email?.type === "required" && ( 
              <p className="text-danger">email jest wymagane.</p> 
            )} 
            {errors.email?.type === "minLength" && ( 
              <p className="text-danger">email musi mieć co najmniej 3 znaki.</p> 
            )} 
            {errors.email?.type === "pattern" && ( 
              <p className="text-danger">email ma być</p> 
            )} 
          <button type="submit" className="btn btn-primary">Wyślij</button> 
          </div> 
     
        </form> 
      );
  }

  function Zadanie4_6b(){
    const pattern = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
      } = useForm(); 
    
    function onSubmit(data) { 
        console.log("Dane użytkownika:", data); 
      } 
    
      return ( 
        <form onSubmit={handleSubmit(onSubmit)}> 

          <div className="mb-3"> 
            <label htmlFor="fullName " className="form-label">Imię</label> 
            <input 
              type="text" 
              id="fullName " 
              className="form-control" 
              {...register("fullName ", { required: true})} 
            /> 
            {errors.fullName?.type === "required" && ( 
              <p className="text-danger">Fullname jest wymagane.</p> 
            )} 
          </div>

          <div className="mb-3"> 
            <label htmlFor="email" className="form-label">Adres emali</label> 
            <input 
              type="text" 
              id="email" 
              className="form-control" 
              {...register("email", { required: true, minLength: 3, pattern: pattern })} 
            /> 
            {errors.email?.type === "required" && ( 
              <p className="text-danger">email jest wymagane.</p> 
            )} 
            {errors.email?.type === "minLength" && ( 
              <p className="text-danger">email musi mieć co najmniej 3 znaki.</p> 
            )}
            {errors.email?.type === "pattern" && ( 
              <p className="text-danger">email ma być</p> 
            )}  
          </div>

          <div className="mb-3"> 
            <label htmlFor="checkInDate " className="form-label">Data</label> 
            <input 
              type="date" 
              id="checkInDate " 
              className="form-control" 
              {...register("checkInDate ", { required: true, valueAsDate: true, min: Date.now()})} 
            /> 
            {errors.checkInDate?.type === "required" && ( 
              <p className="text-danger">email jest wymagane.</p> 
            )} 
            {errors.checkInDate?.type === "minLength" && ( 
              <p className="text-danger">email musi mieć co najmniej 3 znaki.</p> 
            )} 
          </div>

          <div className="mb-3"> 
            <label htmlFor="numberOfGuests " className="form-label">Liczba gości</label> 
            <input 
              type="number" 
              id="numberOfGuests " 
              className="form-control" 
              {...register("numberOfGuests", { required: true, min: 1, max: 5})} 
            /> 
            {errors.numberOfGuests ?.type === "required" && ( 
              <p className="text-danger">email jest wymagane.</p> 
            )} 
            {errors.numberOfGuests ?.type === "minLength" && ( 
              <p className="text-danger">email musi mieć co najmniej 3 znaki.</p> 
            )} 
          <button type="submit" className="btn btn-primary">Wyślij</button> 
          </div> 
     
        </form> 
      );
  }

  return(<>
    <h1 id='z6' ><a href="#start">Zadanie 6</a></h1>
    <Zadanie4_6a/>
    <Zadanie4_6b/>
    </>);
} 
 
export default Zadanie4_6; 