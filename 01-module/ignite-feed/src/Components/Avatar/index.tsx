interface AvatarProps {
    src: string
    hasBorders: boolean
}

import styles from "./styles.module.scss"

export function Avatar({src, hasBorders}:AvatarProps){
    return(
        <img 
            src={src} 
            alt="imagem do usuário escolhido pelo mesmo"
            className={hasBorders == true ? styles.avatarWithBorder : styles.avatar}
        />
    )
}