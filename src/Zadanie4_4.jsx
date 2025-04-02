import React, { useState } from "react"; 
 
function Zadanie4_4() { 
  function Zadanie4_4a(){
    const [person, setPerson] = useState({ email: "", password: "" }); 
 
  function handleChange(event) { 
    const { id, value } = event.target; 
    setPerson(prevPerson => ({ ...prevPerson, [id]: value })); 
  } 
 
  function handleSubmit(event) { 
    event.preventDefault(); 
    console.log("Dane użytkownika:", person); 
  } 
 
  return ( 
    <form onSubmit={handleSubmit}> 
      <div className="mb-3"> 
        <label htmlFor="email" className="form-label">Emali</label> 
        <input type="text" id="email" className="form-control" value={person.email} onChange={handleChange} /> 

        <label htmlFor="password" className="form-label">hasło</label> 
        <input type="password" id="password" className="form-control" value={person.password} onChange={handleChange} /> 
      <button type="submit" className="btn btn-primary">Zaloguj</button> 
      </div> 
 
    </form> 
  );}
  
  function Zadanie4_4b(){
    const [product, setProduct] = useState({ name: "", price: 0, category: "" }); 
 
  function handleChange(event) { 
    const { id, value } = event.target; 
    setProduct(prevProduct => ({ ...prevProduct, [id]: value })); 
  } 
 
  function handleSubmit(event) { 
    event.preventDefault(); 
    console.log("Dane użytkownika:", product); 
  } 
 
  return ( 
    <form onSubmit={handleSubmit}> 
      <div className="mb-3"> 
        <label htmlFor="name" className="form-label">Nazwa</label> 
        <input type="text" id="name" className="form-control" value={product.name} onChange={handleChange} /> 

        <label htmlFor="price" className="form-label">Cena</label> 
        <input type="number" id="price" className="form-control" value={product.price} onChange={handleChange} /> 

        <label htmlFor="category" className="form-label">Kategoria</label> 
        <input type="category" id="category" className="form-control" value={product.category} onChange={handleChange} /> 
      <button type="submit" className="btn btn-primary">Wyświetl</button> 
      </div> 
 
    </form> 
  );}
  return(<>
    <h1 id='z4' ><a href="#start">Zadanie 4</a></h1>
    <Zadanie4_4a/>
    <Zadanie4_4b/>
</>);
} 
 
export default Zadanie4_4; 