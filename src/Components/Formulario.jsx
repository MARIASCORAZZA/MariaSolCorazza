import React, { useState } from 'react';


const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [camada, setCamada] = useState('');
  const [materia, setMateria] = useState('');
  
  const [mostrarCard, setMostrarCard] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 3 || nombre.trim) {
        setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (nombre.length < 3 || nombre.trim) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (materia.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    setError('');
    setMostrarCard(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Camada:
          <input type="text" value={camada} onChange={(e) => setCamada(e.target.value)} />
        </label>
        <br />
        <label>
          Materia:
          <input type="text" value={materia} onChange={(e) => setMateria(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {mostrarCard && <Card nombre={nombre} camada={camada} materia={materia} />}
    </div>
  );
};

export default Formulario;
