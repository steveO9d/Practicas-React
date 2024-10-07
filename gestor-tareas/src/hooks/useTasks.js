import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import db from '../firebase/firebaseConfig';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      const newTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(newTasks);
    });

    return () => unsubscribe();
  }, []);

  const addTask = (task) => {
    addDoc(collection(db, 'tasks'), task);
  };

  const updateTask = (id, updatedTask) => {
    const taskDoc = doc(db, 'tasks', id);
    updateDoc(taskDoc, updatedTask);
  };

  const deleteTask = (id) => {
    const taskDoc = doc(db, 'tasks', id);
    deleteDoc(taskDoc);
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;
