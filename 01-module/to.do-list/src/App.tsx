import './App.scss'
import { FormNewTask } from './components/FormNewTask'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

function App() {
  return (
    <>
      <Header />
      <FormNewTask />
      <Tasks />
    </>
  )
}

export default App
