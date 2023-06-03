import { Trash } from '@phosphor-icons/react'
import styles from './styles.module.scss'

export function Task(){
  return (
    <li className={styles.task}>
      <div className={styles.checkbox}>
        <input type="checkbox" id="myCheckbox" />
        <label className={styles.myCheckbox}></label>
      </div>
      <p>Título da task</p>
      <button type='button'>
        <Trash size={24} />
      </button>
    </li>
  )
}