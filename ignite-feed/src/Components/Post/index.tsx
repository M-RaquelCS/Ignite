import { Comment } from "../Comment"

import styles from "./styles.module.scss"

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        src="https://github.com/M-RaquelCS.png" 
                        alt="imagem do usuário escolhido pelo mesmo"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Maria Raquel</strong>
                        <span>Software Engineer</span>
                    </div>
                </div>

                <time title="8 de maio ás 11:00h" dateTime="2022-05-06 11:00:00">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. 
                    É um projeto que fiz no NLW Return, evento da Rocketseat. 
                    O nome do projeto é DoctorCare 🚀
                </p>
                <p>
                    👉{' '}
                    <a href="#">jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe seu feedback" />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}