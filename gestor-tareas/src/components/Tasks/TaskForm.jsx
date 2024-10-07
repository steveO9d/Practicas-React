import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate() + 1).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  const [newTask, setNewTask] = useState({
    nombre: '',
    descripcion: '',
    fechaCreacion: formattedDate,
    fechaVencimiento: '',
    estado: false, // O cualquier valor por defecto
  });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask({
      nombre: '',
      descripcion: '',
      fechaCreacion: formattedDate,
      fechaVencimiento: '',
      estado: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='mb-2'>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          value={newTask.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          className="form-control"
          id="descripcion"
          name="descripcion"
          value={newTask.descripcion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="fechaVencimiento">Fecha Vencimiento</label>
        <input
          type="date"
          className="form-control"
          id="fechaVencimiento"
          name="fechaVencimiento"
          value={newTask.fechaVencimiento}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="estado">Estado</label>
        <select
          className="form-control"
          id="estado"
          name="estado"
          value={newTask.estado}
          onChange={handleChange}
          required
        >
          <option value="false">Pendiente</option>
          <option value="true">Completada</option>
        </select>
      </div>
      {/* <button type="submit" className="btn btn-success mt-3">
        Agregar Tarea
      </button> */}
    </form>
  );
};

export default TaskForm;
