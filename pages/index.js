import Head from 'next/head';
import ArticleList from '../components/ArticleList';
import { server } from '../config';
export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title> WebDev News</title>
        <meta name="keywords" content="web developement,programming" />
      </Head>
      <h2> Welcome to Next js</h2>
      <ArticleList articles={articles} />
    </div>
  );
}

// fetch from server
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

//fetch from local data
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

