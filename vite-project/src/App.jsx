import { useState } from "react";


function App() {

  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDos, setNumeroDos] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleChangeUno = (event) => {
    console.log(event);
    setNumeroUno(event.target.value);
  }

  const handleChangeDos = (e) => {
    console.log(e);
    setNumeroDos(e.target.value);
  }

  const handleSumar = (event) => {
     setResultado(parseFloat(numeroUno) + parseFloat(numeroDos));
  } 

  const handleRestar = (event) => {
    setResultado(parseFloat(numeroUno) - parseFloat(numeroDos));
 } 

  const handleMultiplicar = (event) => {
    setResultado(parseFloat(numeroUno) * parseFloat(numeroDos));
  } 

  const handleDividir = (event) => {
    setResultado(parseFloat(numeroUno) / parseFloat(numeroDos));
  } 

  const nombre = "fatima";
  return (
 <>
  {nombre}
  <h1>CALCULADORA</h1>
  <input type="text" placeholder="numero 1"  value={numeroUno} onChange={handleChangeUno}/>
  <input type="text" placeholder="numero 2" value={numeroDos} onChange={handleChangeDos}/>
  <hr />
  <hr />
  <button onClick={handleSumar}> sumar
    </button>
  <button onClick={handleRestar}> restar
    </button>
  <button onClick={handleMultiplicar}> multiplicar
    </button>
  <button onClick={handleDividir}> dividir
  </button>
  <hr />
  <hr />
  <p>resultado: { resultado } </p>
 
 </> 
  )
  
}

export default App
