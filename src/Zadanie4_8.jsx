import React from "react"; 
import { z } from "zod"; 
import { useForm } from "react-hook-form"; 
import { zodResolver } from "@hookform/resolvers/zod"; 

function Zadanie4_8(){
    function Zadanie4_8a() { 
        const pattern = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        const { 
          register, 
          handleSubmit, 
          formState: { errors, isValid }, 
        } = useForm({ mode: "onChange" }); 
       
        function onSubmit(data) { 
          console.log("Dane rejestracyjne:", data); 
        } 
       
        return ( 
          <form onSubmit={handleSubmit(onSubmit)}> 
      
            <div className="mb-3"> 
              <label htmlFor="email" className="form-label">Email</label> 
              <input type="text" id="email" className="form-control" {...register("email", { required: true, pattern: pattern })} /> 
              {errors.email && <p className="text-danger">Email musi być</p>} 
            </div> 
          
      
            <div className="mb-3"> 
              <label htmlFor="password" className="form-label">Hasło</label> 
              <input type="password" id="password" className="form-control" {...register("password", { required: true, minLength: 6 })} /> 
              {errors.password && <p className="text-danger">Hasło musi mieć co najmniej 6 znaków.</p>} 
            <button type="submit" className="btn btn-primary" disabled={!isValid}>Zarejestruj się</button> 
            </div> 
       
          </form> 
        ); 
    } 
    function Zadanie4_8b(){
            const schema = z.object({ 
                fullName: z.string().min(3, { message: "Imię musi mieć co najmniej 3 znaki." }), 
                adress: z.string().min(10, { message: "Adres musi mieć co najmniej 10 znaki." }), 
                phone: z.string().min(9, { message: "Błędny numer telefonu (za mały)"}).max(9, { message: "Błędny numer telefonu (za duży)"}),  
            });  
            const { 
            register, 
            handleSubmit, 
            formState: { errors, isValid }, 
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
                <label htmlFor="adress" className="form-label">Adres</label> 
                <input 
                  type="text" 
                  id="adress" 
                  className="form-control" 
                  {...register("adress")} 
                /> 
               {errors.adress && <p className="text-danger">{errors.adress.message}</p>} 
              </div>
    
              <div className="mb-3"> 
                <label htmlFor="phone " className="form-label">Numer telefonu</label> 
                <input 
                  type="number" 
                  id="phone " 
                  className="form-control" 
                  {...register("phone")} 
                /> 
                {errors.phone && <p className="text-danger">{errors.phone.message}</p>} 
              </div>
    
              <div className="mb-3"> 
                <label htmlFor="product " className="form-label">Produkt</label> 
                <select 
                  type="string" 
                  id="product" 
                  className="form-control" 
                > 
                <option value="" disabled>--Wybierz produkt--</option>
                <option value="produkt1">produkt1</option>
                <option value="produkt2">produkt2</option>
                <option value="produkt3">produkt3</option>
                </select>
                <button type="submit" className="btn btn-primary" 
                >Zamów</button> 
              </div> 
         
              </form>
            );
        }


    return(<>
        <h1 id='z8' ><a href="#start">Zadanie 8</a></h1>
        <Zadanie4_8a/>
        <Zadanie4_8b/>
        </>); 
}

 
export default Zadanie4_8; 