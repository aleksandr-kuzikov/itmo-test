import CardPreload from "./CardPreload";
import NewsGrid from "./NewsGrid/NewsGrid";
import React from "react";

const NewsGridPreload: React.FC = () => (
    <NewsGrid>
        <CardPreload />
        <CardPreload />
        <CardPreload />
        <CardPreload />
        <CardPreload />
        <CardPreload />
        <CardPreload />
        <CardPreload />
        <CardPreload />
    </NewsGrid>
)

export default NewsGridPreload