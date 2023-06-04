import { Trash } from '@phosphor-icons/react'
import styles from './styles.module.scss'

type TaskProps = {
  id: number,
  title: string,
  isCompleted: boolean,
  handleRemoveTask: (id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  handleToggleTaskCompletion: (id: number, event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void
}

export function Task({ id, title, isCompleted, handleRemoveTask, handleToggleTaskCompletion }: TaskProps){
  return (
    <li className={isCompleted ? styles.isCompleted : styles.task} key={id}>
      <div className={styles.checkbox}>
        <input type="checkbox" id="myCheckbox" checked={isCompleted} readOnly/>
        <label className={styles.myCheckbox} onClick={(event) => handleToggleTaskCompletion(id, event)}></label>
      </div>
      <p>{title}</p>
      <button type='button' onClick={(event) => handleRemoveTask(id, event)}>
        <Trash size={24} />
      </button>
    </li>
  )
}