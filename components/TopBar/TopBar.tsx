import Link from 'next/link'
import Image from 'next/image'

import logo from '../../public/Logo.svg'
import styles from './TopBar.module.scss'
import LangSelector from "../LangSelector/LangSelector";
import ContentLayout from "../../layouts/ContentLayout";

const TopBar: React.FC = () => {
    return(
        <header className={styles.header}>
            <ContentLayout>
                <div className={styles.headerContent}>
                    <Link href={'/'}><a><Image src={logo} alt="Logo ITMO" /></a></Link>
                    <LangSelector />
                </div>
            </ContentLayout>
        </header>
    )
}

export default TopBar