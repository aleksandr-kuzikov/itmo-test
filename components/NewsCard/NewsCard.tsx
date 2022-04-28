import React from "react";
import Image from 'next/image'
import Parser from "html-react-parser";
import styles from './NewsCard.module.scss'
import {INews} from "../../interfaces/INews";

type NewsProps = {
    news: INews
}

enum month {
    'месяц',
    'января',
    'февряля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
}

const NewsCard: React.FC<NewsProps> = ({news}: NewsProps) => {

    const {imageUrl, date, preview, title} = news
    const [y, m, d] = date.split(' ')[0].split('-')
    return(
        <article className={styles.card}>
            <div className={styles.image}>
                <Image src={imageUrl} width={500} height={500} layout={'raw'} />
            </div>
            <div className={styles.desc}>
                <time className={styles.date}>{`${d} ${month[Number.parseInt(m)]} ${y}`}</time>
                <div className={styles.preview}>{preview ? Parser(preview) : title}</div>
            </div>
        </article>
    )
}

export default NewsCard