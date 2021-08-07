import Link from "next/link";
import React from "react";
import articleStyle from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`} passHref={true}>
      <div className={articleStyle.card}>
        <h3>{article.title}</h3>
      </div>
    </Link>
  );
};

export default ArticleItem;
