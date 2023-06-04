import { Task } from '../Task'
import styles from './styles.module.scss'

import clipboardImg from '../../assets/Clipboard.png'
import { ITasks } from '../../App'

type TasksProps = {
  tasks: ITasks[],
  handleRemoveTask: (id: number, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  handleToggleTaskCompletion: (id: number, event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void,
  totalTasks: number,
  totalCompletedTasks: number
}

export function Tasks({ tasks, handleRemoveTask, handleToggleTaskCompletion, totalCompletedTasks,totalTasks }: TasksProps){

  return (
    <div className={styles.content}>
      <header>
        <div>
          <strong>Tarefas Criadas</strong>
          <p className={styles.quantity}>{totalTasks}</p>
        </div>
        <div>
          <strong>Concluídas</strong>
          <p className={styles.quantity}>{totalCompletedTasks + ' de ' + totalTasks}</p>
        </div>
      </header>
      <main>
        {tasks.length == 0 ? (
          <div className={styles.noTasks}>
            <img src={clipboardImg} alt="imagem de uma prancheta" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          <ul>
            {tasks.map(task =>(
                <Task 
                  key={task.id} 
                  id={task.id} 
                  title={task.title} 
                  isCompleted={task.isCompleted} 
                  handleRemoveTask={handleRemoveTask}
                  handleToggleTaskCompletion = {handleToggleTaskCompletion}
                />
            ))}
          </ul>
        )}
        
      </main>
    </div>
  )
}