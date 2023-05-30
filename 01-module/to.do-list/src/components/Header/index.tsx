import styles from './styles.module.scss'

export function Header(){
  return (
    <header className={styles.header}>
      <img src="/rocket.svg" alt="desenho de um foguete para aplicação" />
      <div>
        <span>to</span>
        <span>do</span>
      </div>
    </header>
  )
}