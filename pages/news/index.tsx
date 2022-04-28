import type {NextPage, NextPageContext} from 'next'
import ContentLayout from "../../layouts/ContentLayout";
import NewsGrid from "../../components/NewsGrid/NewsGrid";
import React, {useEffect} from "react";
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux";
import {fetchNews} from "../../store/ActionCreators";
import {newsSlice} from "../../store/reducers/newsSlice";
import {INewsResponseList} from "../../interfaces/INewsResponse";
import {loadNews} from "../../helpers/queries";
import {langSlice} from "../../store/reducers/langSlice";
import {INews} from "../../interfaces/INews";
import NewsCard from "../../components/NewsCard/NewsCard";
import {iNewsResponsItemTOiNews} from "../../helpers/functions";
import NewsGridPreload from "../../components/NewsGridPreload";

type NewsProps = {
    newsServ: INewsResponseList | null,
    langId: number
}

const News: NextPage<NewsProps> = ({newsServ, langId}: NewsProps) => {
    const dispatch = useTypedDispatch()

    const {news, per_page, error, isLoading} = useTypedSelector(state => state.newsReducer)
    const lang = useTypedSelector(state => state.langReducer.current)

    useEffect(() => {
        if (newsServ && !news)
            dispatch(newsSlice.actions.newsFetchingSuccess(newsServ))
        else
            dispatch(fetchNews(per_page, lang.id))
    }, [lang])

    const actualNews = newsServ && !news && iNewsResponsItemTOiNews(newsServ.news) || news

    return (
        <ContentLayout>
            <h1>Новости и события</h1>
            {error !== '' && <div>{error}</div>}
            {actualNews && !isLoading
                &&
                <NewsGrid>
                    {actualNews.map((i: INews) => (
                        <NewsCard
                            key={i.id}
                            news={i}
                        />
                    ))}
                </NewsGrid>
                || <NewsGridPreload />}
        </ContentLayout>
    )
}

News.getInitialProps = async ({req}: NextPageContext) => {
    if (!req)
        return { newsServ: null, langId: 1 }

    const langId = langSlice.getInitialState().current.id
    const newsServ = await loadNews(newsSlice.getInitialState().per_page, langId)

    return { newsServ, langId }
}

export default News