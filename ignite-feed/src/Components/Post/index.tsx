import { FormEvent, useState } from "react"
import { Avatar } from "../Avatar"
import { Comment } from "../Comment"

import styles from "./styles.module.scss"

import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export interface PostType {
    id: number;
    author: {
        avatarUrl: string;
        name: string;
        role: string;
    },
    content: { type: 'paragraph' | 'link'; content: string; }[],
    publishedAt: Date;
}
interface PostProps {
    post: PostType;
}


export function Post({ post } : PostProps) {

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBr
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBr,
        addSuffix: true

    })

    const [comments, setComments] = useState<string[]>([])
    
    const [comment, setComment] = useState('')


    function handleSubmitNewComment(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        setComments([...comments, comment ])
        setComment('')
        console.log(comments)
    }

    function handleDeleteComment(commentToDelete: string){
        const commentsWithoutDeleteOne: string[] = comments.filter(comment => {
            return comment !== commentToDelete
        })
        const commentsWithoutDeleteOneString = commentsWithoutDeleteOne.join(' '); // Converte o array em uma única string
        setComments([commentsWithoutDeleteOneString]);
        // console.log(commentsWithoutDeleteOneString)
    }

    const isCommentEmpty = comment.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorders={true} src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {post.content.map((line, index) => {
                    if (line.type === 'paragraph'){
                        return (
                            <p key={index} >{line.content}</p>
                        )
                    } else if (line.type === 'link'){
                        return(
                            <p key={index} >
                                <a href="#">{line.content}</a>
                            </p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleSubmitNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    value={comment}
                    onChange={(event) => setComment(event.target.value)} 
                    placeholder="Deixe seu feedback"
                    required
                />

                <footer>
                    <button 
                        type="submit"
                        disabled={isCommentEmpty}
                    >
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return (
                        <Comment key={comment} comment={comment} deleteComment={handleDeleteComment} />
                    )
                })}
            </div>
        </article>
    )
}