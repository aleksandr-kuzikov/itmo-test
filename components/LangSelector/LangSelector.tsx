import React, {useState} from "react";
import Image from 'next/image'
import arrowImg from '../../public/arrow.svg'
import styles from './LangSelector.module.scss'
import classNames from "classnames";
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux";
import {langSlice} from "../../store/reducers/langSlice";
import {ILanguage} from "../../interfaces/ILanguage";

const LangSelector: React.FC = () => {
    const dispatch = useTypedDispatch()

    const {languages, current} = useTypedSelector(state => state.langReducer)

    const {setLang} = langSlice.actions

    const [isDrop, setIsDrop] = useState(false)

    const dropBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsDrop(!isDrop)
    }

    const changeLangHandler = (e: React.MouseEvent<HTMLButtonElement>, lang: ILanguage) => {
        e.preventDefault()
        dispatch(setLang(lang))
        setIsDrop(false)
    }

    return(
        <div className={styles.wrap}>
            <button className={classNames([styles.button, styles.buttonDrop])}
                    onClick={dropBtnHandler}
            >
                <Image src={current.imageUrl} />
                <span className={styles.buttonText}>{current.label}</span>
                <div className={styles.arrowImage}>
                    <Image src={arrowImg} />
                </div>
            </button>
            {isDrop &&
                <div className={styles.drop}>
                    {languages.map(l => (
                        <button key={l.id}
                                className={classNames([styles.button, styles.buttonSelect])}
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => changeLangHandler(e, l)}
                        >
                            <Image src={l.imageUrl} />
                            <span className={styles.buttonText}>{l.label}</span>
                        </button>
                    ))}
                </div>}
        </div>
    )
}

export default LangSelector
