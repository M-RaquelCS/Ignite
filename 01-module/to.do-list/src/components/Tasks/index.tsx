import styles from './styles.module.scss'

import clipboardImg from '../../assets/Clipboard.png'
import { Task } from '../Task'

export function Tasks(){
  return (
    <div className={styles.content}>
      <header>
        <strong>Tarefas Criadas</strong>
        <strong>Concluídas</strong>
      </header>
      <main>
        <ul>
          <Task />
          <Task />
          <Task />
          <Task />
        </ul>
        <div className={styles.noTasks}>
          <img src={clipboardImg} alt="imagem de uma prancheta" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </main>
    </div>
  )
}