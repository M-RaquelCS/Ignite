import { useState } from 'react'
import './App.scss'
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
      alert('a task precisa ter um titulo')
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

  function handleRemoveTask(id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <Header />
      <FormNewTask handleCreateNewTask={handleCreateNewTask} setNewTitle={setNewTitle} />
      <Tasks tasks={tasks} handleRemoveTask={handleRemoveTask} />
    </>
  )
}

export default App
