import { useState } from "react";
import '../src/styles.css';

function App() {

  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDos, setNumeroDos] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleChangeUno = (event) => {
    setNumeroUno(event.target.value);
  }

  const handleChangeDos = (event) => {
    setNumeroDos(event.target.value);
  }

  const handleSumar = () => {
    setResultado(parseFloat(numeroUno) + parseFloat(numeroDos));
  } 

  const handleRestar = () => {
    setResultado(parseFloat(numeroUno) - parseFloat(numeroDos));
  } 

  const handleMultiplicar = () => {
    setResultado(parseFloat(numeroUno) * parseFloat(numeroDos));
  } 

  const handleDividir = () => {
    setResultado(parseFloat(numeroUno) / parseFloat(numeroDos));
  } 

  return (
    <>
      <h1 style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '40px' }}>CALCULADORA</h1>
      <div style={{ textAlign: 'center' }}>
        <input className="texto" type="text" placeholder="Numero 1" value={numeroUno} onChange={handleChangeUno} style={{ marginRight: '10px' }} />
        <input className="texto" type="text" placeholder="Numero 2" value={numeroDos} onChange={handleChangeDos} />
      </div>
      <hr />
      <div style={{ textAlign: 'center' }}>
        <button className="button" onClick={handleSumar}>Sumar</button>
        <button className="button" onClick={handleRestar}>Restar</button>
        <button className="button" onClick={handleMultiplicar}>Multiplicar</button>
        <button className="button" onClick={handleDividir}>Dividir</button>
      </div>
      <hr />
      <p className="res">Resultado: {resultado}</p>
    </>
  );
}

export default App;
