import React, {useState} from "react";
import Image from 'next/image'
import flagRus from '../../public/Flag-RUS.svg'
import flagEng from '../../public/Flag-ENG.svg'

import styles from './LangSelector.module.scss'
import classNames from "classnames";

enum Languages {
    rus="Рус",
    eng="Eng"
}

const LangSelector: React.FC = () => {

    const [lang, setLang] = useState<Languages>(Languages.rus)

    const [isDrop, setIsDrop] = useState<boolean>(false)

    const dropBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsDrop(!isDrop)
    }

    const changeLangHandler = (e: React.MouseEvent<HTMLButtonElement>, lang: Languages) => {
        e.preventDefault()
        setLang(lang)
        setIsDrop(false)
    }

    return(
        <div className={styles.wrap}>
            <button className={classNames([styles.button, styles.buttonDrop])}
                    onClick={dropBtnHandler}
            ><Image src={flagRus} /><span className={styles.buttonText}>{lang}</span></button>
            {isDrop &&
                <div className={styles.drop}>
                    <button className={classNames([styles.button, styles.buttonSelect])}
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => changeLangHandler(e, Languages.rus)}
                    ><Image src={flagRus} /><span className={styles.buttonText}>{Languages.rus}</span></button>
                    <button className={classNames([styles.button, styles.buttonSelect])}
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => changeLangHandler(e, Languages.eng)}
                    ><Image src={flagEng} /><span className={styles.buttonText}>{Languages.eng}</span></button>
                </div>}
        </div>
    )
}

export default LangSelector
