import React from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";

const ArticlesListPage = () => (
  <>
    <h1>مقالات</h1>
    <ArticlesList articles={articleContent} />
  </>
);

export default ArticlesListPage;
