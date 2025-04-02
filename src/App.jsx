import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Zadanie4_1 from './Zadanie4_1.jsx'
import Zadanie4_2 from './Zadanie4_2.jsx'
import Zadanie4_3 from './Zadanie4_3.jsx'
import Zadanie4_4 from './Zadanie4_4.jsx'
import Zadanie4_5 from './Zadanie4_5.jsx'
import Zadanie4_6 from './Zadanie4_6.jsx'
import Zadanie4_7 from './Zadanie4_7.jsx'
// import Zadanie4_8 from './Zadania4_8.jsx'
// import Zadanie4_9 from './Zadanie4_9.jsx'
// import Zadanie4_10 from './Zadanie4_10.jsx'
// import Zadanie4_11 from './Zadanie4_11.jsx'
// import Zadanie4_12 from './Zadanie4_12.jsx'

function App() {
    return(
    <section>
      <article style={{width: "97%", wordSpacing:"5px"}}>
      <p id='start'>Goto zadanie</p>
    <a href="#z1">Zadanie 1</a>
    <a href="#z2">  Zadanie 2</a>
    <a href="#z3">  Zadanie 3</a>
    <a href="#z4">  Zadanie 4</a>
    <a href="#z5">  Zadanie 5</a>
    <a href="#z6">  Zadanie 6</a>
    <a href="#z7">  Zadanie 7</a>
        {/* <a href="#z8">  Zadanie 8</a>
    <a href="#z9">  Zadanie 9</a>
    <a href="#z10">  Zadanie 10</a>
    <a href="#z11">  Zadanie 11</a>
    <a href="#z12">  Zadanie 12</a> */}
    </article>
    
    <Zadanie4_1/>
    
    <Zadanie4_2/>
    
    <Zadanie4_3 text="Name"/>
    
    <Zadanie4_4/>
    
    <Zadanie4_5/>
   
    <Zadanie4_6/>
    
    <Zadanie4_7/>
    {/* <h1 id='z8' ><a href="#start">Zadanie 8</a></h1>
    <Zadanie4_8/>
    <h1 id='z9' ><a href="#start">Zadanie 9</a></h1>
    <Zadanie4_9/>
    <h1 id='z10' ><a href="#start">Zadanie 10</a></h1>
    <Zadanie4_10/>
    <h1 id='z11' ><a href="#start">Zadanie 11</a></h1>
    <Zadanie4_11/>
    <h1 id='z12' ><a href="#start">Zadanie 12</a></h1>
    <Zadanie4_12/> */}
    </section>

    
  )
}

export default App
