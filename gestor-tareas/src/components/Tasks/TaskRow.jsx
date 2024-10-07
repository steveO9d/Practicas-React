import React from 'react';

const TaskRow = ({ task, updateTask, deleteTask }) => {

  // const creationDate = task.fechaCreacion ? task.fechaCreacion.toDate() : new Date();
  // const formattedCreationDate = format(creationDate, 'dd/MM/yyyy HH:mm:ss'); // Formatea la fecha como prefieras

  // const dueDate = task.fechaVencimiento ? task.fechaVencimiento.toDate() : new Date();
  // const formattedDueDate = format(dueDate, 'dd/MM/yyyy HH:mm:ss'); // Formatea la fecha como prefieras

  const handleDelete = () => {
    deleteTask(task.id);
  };

  // Aquí podrías agregar una función para manejar la edición
  // Por ejemplo, podrías abrir un modal con el formulario de edición

  return (
    <tr>
      <td>{task.nombre}</td>
      <td>{task.descripcion}</td>
      <td>{task.fechaCreacion}</td>
      <td>{task.fechaVencimiento}</td>
      <td>{task.estado? 'Completada' : 'Pendiente'}</td>
      <td>
        <button className="btn btn-primary btn-sm" onClick={() => {/* función para editar */}}>
          Editar
        </button>
        {' '}
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TaskRow;
