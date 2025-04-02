import React from "react"; 
import { useForm } from "react-hook-form"; 
import { z } from "zod"; 
import { zodResolver } from "@hookform/resolvers/zod"; 


function Zadanie4_7(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

   

    function Zadanie4_7a() {
        const schema = z.object({ 
            email: z.string().email({message: "Email musi być"}), 
            message: z.string().min(10, { message: "Wiadomośc musi mieć conajmniej 10 znaków" }) 
        });  
        const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
        } = useForm({ resolver: zodResolver(schema) }); 
    
        function onSubmit(data) { 
        console.log("Dane użytkownika:", data); 
        } 
    
    
        return ( 
        <form onSubmit={handleSubmit(onSubmit)}> 
            <div className="mb-3" title="FeedbackForm"> 
            <label htmlFor="email" className="form-label">email</label> 
            <input type="text" id="email" className="form-control" {...register("email")} /> 
            {errors.email && <p className="text-danger">{errors.email.message}</p>} 
            
            
            </div> 
            
            <div className="mb-3"> 
            <label htmlFor="message" className="form-label">message</label> 
            <input type="text" id="message" className="form-control" {...register("message")} /> 
            {errors.message && <p className="text-danger">{errors.message.message}</p>} 
  
            <button type="submit" className="btn btn-primary">Wyślij</button> 
            </div> 
    
        </form> 
        ); 
    } 
    function Zadanie4_7b(){
        const schema = z.object({ 
            email: z.string().email({message: "Email musi być"}), 
            fullName: z.string().min(3, { message: "Imię musi mieć co najmniej 3 znaki." }), 
            eventDate: z.coerce.date().min(new Date(today), { message: "Nieprawidłowa data" }),
            ticket: z.coerce.number().min(1, { message: "Błędna liczba biletów"})   
        });  
        const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
        } = useForm({ resolver: zodResolver(schema) }); 
    
        function onSubmit(data) { 
        } 
        return ( 
            <form onSubmit={handleSubmit(onSubmit)}> 
        <div className="mb-3"> 
            <label htmlFor="fullName " className="form-label">Imię</label> 
            <input 
              type="text" 
              id="fullName " 
              className="form-control" 
              {...register("fullName")} 
            /> 
           {errors.fullName && <p className="text-danger">{errors.fullName.message}</p>} 
          </div>

          <div className="mb-3"> 
            <label htmlFor="email" className="form-label">Adres emali</label> 
            <input 
              type="text" 
              id="email" 
              className="form-control" 
              {...register("email")} 
            /> 
           {errors.email && <p className="text-danger">{errors.email.message}</p>} 
          </div>

          <div className="mb-3"> 
            <label htmlFor="eventDate " className="form-label">Data</label> 
            <input 
              type="date" 
              id="eventDate " 
              className="form-control" 
              {...register("eventDate", { required: true, valueAsDate: true, min: Date.now()})} 
            /> 
            {errors.eventDate && <p className="text-danger">{errors.eventDate.message}</p>} 
          </div>

          <div className="mb-3"> 
            <label htmlFor="ticket " className="form-label">Bilety</label> 
            <input 
              type="number" 
              id="ticket " 
              className="form-control" 
              {...register("ticket", { required: true, min: 1, max: 5})} 
            /> 
            {errors.ticket && <p className="text-danger">{errors.ticket.message}</p>} 
          <button type="submit" className="btn btn-primary">Wyślij</button> 
          </div> 
     
          </form>
        );
    }
    return(<>
        <h1 id='z7' ><a href="#start">Zadanie 7</a></h1>
        <Zadanie4_7a/>
        <Zadanie4_7b/>
        </>);
}


 
export default Zadanie4_7; 