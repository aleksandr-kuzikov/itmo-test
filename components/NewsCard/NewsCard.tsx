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
        <span className={styles.card}>
            <span className={styles.image}>
                <Image src={imageUrl} width={500} height={500} layout={'raw'} />
            </span>
            <span className={styles.desc}>
                <time className={styles.date}>{`${d} ${month[Number.parseInt(m)]} ${y}`}</time>
                <span className={styles.preview}>{preview ? preview.replace(/<[^>]+>/g, '') : title}</span>
            </span>
        </span>
    )
}

export default NewsCard