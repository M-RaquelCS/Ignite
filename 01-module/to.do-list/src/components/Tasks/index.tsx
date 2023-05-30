import styles from './styles.module.scss'

import clipboardImg from '../../assets/Clipboard.png'

export function Tasks(){
  return (
    <div className={styles.content}>
      <header>
        <strong>Tarefas Criadas</strong>
        <strong>Concluídas</strong>
      </header>
      <main className={styles.main}>
        <img src={clipboardImg} alt="imagem de uma prancheta" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </main>
    </div>
  )
}