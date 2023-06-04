import { PlusCircle } from '@phosphor-icons/react'
import styles from './styles.module.scss'

type FormProps = {
  handleCreateNewTask : (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  setNewTitle: (title: string) => void,
}

export function FormNewTask({ setNewTitle,handleCreateNewTask }: FormProps){

  return (
    <form className={styles.form}>
      <input type="text" placeholder='Adicione uma nova tarefa' onChange={(event) => setNewTitle(event.target.value)}/>
      <button type="submit" onClick={(event)=> handleCreateNewTask(event)}>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}