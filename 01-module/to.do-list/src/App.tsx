import { useState } from 'react'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import { FormNewTask } from './components/FormNewTask'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

export interface ITasks {
  id: number,
  title: string,
  isCompleted: boolean
}

function App() {

  const [newTitle, setNewTitle] = useState('')
  const [tasks, setTasks] = useState<ITasks[]>([])

  function handleCreateNewTask(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    event.preventDefault();

    const hasTitle = Boolean(newTitle)

    if (hasTitle == false) {
      toast.error('A task precisa de um título, por favor preencha o campo.')
    } else {
      const task = {
        id: Math.random(),
        title: newTitle,
        isCompleted: false
      }

      setTasks([...tasks, task])
      setNewTitle('')
    }

  }

  function handleToggleTaskCompletion(id: number, event: React.MouseEvent<HTMLLabelElement, MouseEvent>) {
    event.preventDefault();

    const finishedTask = tasks.map(task => task.id === id ? {
      ...task,
      isCompleted: !task.isCompleted
    }: task)

    setTasks(finishedTask)
  }

  function handleRemoveTask(id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header />
      <FormNewTask handleCreateNewTask={handleCreateNewTask} setNewTitle={setNewTitle} />
      <Tasks tasks={tasks} handleRemoveTask={handleRemoveTask} handleToggleTaskCompletion={handleToggleTaskCompletion}/>
    </>
  )
}

export default App
