import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./styles.module.scss"

export function Comment(){
    return (
        <div className={styles.comment}>
            <img 
                src="https://github.com/M-RaquelCS.png" 
                alt="imagem do usuário escolhido pelo mesmo"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Maria Raquel</strong>
                            <time title="8 de maio ás 11:00h" dateTime="2022-05-06 11:00:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}