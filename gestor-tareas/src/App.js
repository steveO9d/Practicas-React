import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import TaskList from './components/Tasks/TaskList';
import TaskForm from './components/Tasks/TaskForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* Asegúrate de usar "navbar-brand" y "ms-3" para Bootstrap 5 o "ml-3" para versiones anteriores */}
          <Link className="navbar-brand ms-3" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link mt-1" to="/tasks">
                  Tareas
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className='container'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/tasksAdd" element={<TaskForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};


export default App;
