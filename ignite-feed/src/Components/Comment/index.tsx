import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./styles.module.scss"
import { Avatar } from "../Avatar"
import { useState } from "react";

interface CommentProps {
    comment: string
    deleteComment: (comment: string) => void;
}

export function Comment({ comment, deleteComment }:CommentProps){

    function handleDeleteComment(){
        deleteComment(comment);
    }

    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment(){
        setLikeCount((state) => state + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorders={false} src={"https://github.com/M-RaquelCS.png"} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Maria Raquel</strong>
                            <time title="8 de maio ás 11:00h" dateTime="2022-05-06 11:00:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}