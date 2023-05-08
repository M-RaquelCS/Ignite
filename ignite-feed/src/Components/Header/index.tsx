import styles from './styles.module.scss';

export function Header(){
    return (
        <header className={styles.header}>
            <img src="/ignite.svg" alt="logo do ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}