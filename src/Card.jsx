import React from 'react';

const Card = ({ nombre, camada, materia }) => {
  return (
    <div>
      <h2 style={{ color: 'pink' }}>Inscripcion Alumno:</h2>
      <p>Nombre: {nombre}</p>
      <p>Camada: {camada}</p>
      <p>Materia: {materia}</p>
    </div>
  );
};

export default Card;
