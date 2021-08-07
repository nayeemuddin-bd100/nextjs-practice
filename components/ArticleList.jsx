import React from 'react';
import articleStyle from "../styles/Article.module.css";
import ArticleItem from './ArticleItem';

function ArticleList({articles}) {
    return (
      <div className={articleStyle.grid}>
        {articles.map((article, idx) => (
          <ArticleItem article={article} key={idx}/>
        ))}
      </div>
    );
}

export default ArticleList
