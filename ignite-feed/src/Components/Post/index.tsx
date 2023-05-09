import { Avatar } from "../Avatar"
import { Comment } from "../Comment"

import styles from "./styles.module.scss"

import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

interface PostProps {
    author: {
        avatarUrl: string;
        name: string;
        role: string;
    },
    content: { type: string; content: string; }[],
    publishedAt: Date;
}

export function Post({ author, content, publishedAt } : PostProps) {

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBr
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true

    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorders={true} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {content.map((line, index) => {
                    if (line.type === 'paragraph'){
                        return (
                            <p key={index} >{line.content}</p>
                        )
                    } else if (line.type === 'link'){
                        return(
                            <a href="#" key={index}>{line.content}</a>
                        )
                    }
                })}
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