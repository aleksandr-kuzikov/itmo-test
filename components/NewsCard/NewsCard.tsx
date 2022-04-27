import React from "react";
import Image from 'next/image'

import photo from '../../public/foto.png'
import styles from './NewsCard.module.scss'

const NewsCard: React.FC = () => {
    return(
        <article className={styles.card}>
            <div className={styles.image}>
                <Image src={photo} layout={'raw'} />
            </div>
            <div className={styles.desc}>
                <time className={styles.date}>2 декабря 2019</time>
                <p className={styles.preview}>Физарум//Перформер, 2019, Bioroboty019 это мультимедийный перформанс о связи человеческого и нечеловеческого, представленный на Кураторском форуме в Молодёжный...</p>
            </div>
        </article>
    )
}

export default NewsCard