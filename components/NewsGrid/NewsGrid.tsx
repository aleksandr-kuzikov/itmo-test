import React from "react";

import styles from './NewsGrid.module.scss'

type Props = {
    children: React.ReactNode
}

const NewsGrid = (props: Props) => {
    return(
        <section className={styles.grid}>
            {props.children &&
                React.Children.map(props.children, child => {
                    return(
                        <div className={styles.item}>
                            {child}
                        </div>
                    )
                })
            }
        </section>
    )
}

export default NewsGrid