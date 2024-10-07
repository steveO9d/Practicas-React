import React from 'react';
import useTasks from '../../hooks/useTasks';
import TaskRow from './TaskRow';
import TaskForm from './TaskForm';
import Modal from 'react-modal';
import { useModal } from '../../hooks/useModal';  // Importar el hook personalizado

const TaskList = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();

  Modal.setAppElement('#root');  // Esto es necesario para la accesibilidad

  const { isOpen, openModal, closeModal } = useModal();

  const handleSave = () => {
    // Aquí puedes agregar la lógica de guardar
    console.log('Guardado');
    closeModal(); // Cerrar el modal después de guardar
  };

  return (
    <div className="container">
      <h2>Módulo de Tareas</h2>
      <button onClick={openModal} className="btn btn-success mt-3">Agregar</button>
      {/* <TaskForm addTask={addTask} /> */}
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Fecha Creación</th>
            <th>Fecha Vencimiento</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Modal Ejemplo"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%', // Ajustar el ancho a 80% del viewport
            height: '60%', // Ajustar la altura a 70% del viewport
            maxWidth: '900px', // Definir un tamaño máximo de ancho
            maxHeight: '420px', // Definir un tamaño máximo de alto
          }
        }}
      >
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">Título del Modal</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeModal}
              style={{ position: 'absolute', top: '10px', right: '10px' }}
            ></button>
          </div>

          {/* Body */}
          <TaskForm addTask={addTask} />

          {/* Footer */}
          <div className="modal-footer mt-4">
            <button type="button" className="btn btn-secondary me-2" onClick={closeModal}>Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>Guardar</button>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default TaskList;
