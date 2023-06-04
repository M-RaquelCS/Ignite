import { Trash } from '@phosphor-icons/react'
import styles from './styles.module.scss'

type TaskProps = {
  id: number,
  title: string,
  isCompleted: boolean,
  handleRemoveTask: (id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function Task({ id, title, isCompleted, handleRemoveTask }: TaskProps){
  return (
    <li className={isCompleted == false ? styles.task : styles.isCompleted} key={id}>
      <div className={styles.checkbox}>
        <input type="checkbox" id="myCheckbox" />
        <label className={styles.myCheckbox}></label>
      </div>
      <p>{title}</p>
      <button type='button' onClick={(event) => handleRemoveTask(id, event)}>
        <Trash size={24} />
      </button>
    </li>
  )
}