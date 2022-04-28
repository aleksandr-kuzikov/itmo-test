import {NextPage} from "next";
import {useTypedSelector} from "../../hooks/redux";
import {useRouter} from "next/router";
import Link from "next/link";
import Parser from 'html-react-parser';
import ContentLayout from "../../layouts/ContentLayout";

const NewsPage: NextPage = () => {
    const router = useRouter()
    const id = router.query.id ? Array.isArray(router.query.id) ? -1 : Number.parseInt(router.query.id) : -1
    const news = useTypedSelector(state => state.newsReducer.news && state.newsReducer.news.find(n => n.id == id))

    return(
        <ContentLayout>
            {news
            &&
            <article>
                <h1>{news.title}</h1>
                {news.preview && <div>{Parser(news.preview)}</div>}
            </article>
            ||
            <div>
                <h1>Контент не загружен!</h1>
                <Link href="/news"><a>Перейти к списку новостей</a></Link>
            </div>}
        </ContentLayout>
    )
}

export default NewsPage