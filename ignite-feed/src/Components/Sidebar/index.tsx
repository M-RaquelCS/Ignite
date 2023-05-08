import styles from "./styles.module.scss"

import { PencilSimpleLine } from "@phosphor-icons/react"

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1567863786964-9d65fa4469ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="imagem de cover escolhida pelo usuário" 
                className={styles.cover}
            />
            <div className={styles.profile}>
                <img 
                    src="https://github.com/M-RaquelCS.png" 
                    alt="imagem do usuário escolhido pelo mesmo"
                />

                <strong>Maria Raquel</strong>
                <span>Software Engineer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}