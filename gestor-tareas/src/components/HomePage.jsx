import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Página de Inicio</h1>
      <Link to="/tasks">Ir al módulo de tareas</Link>
    </>
  );
};

export default HomePage;
