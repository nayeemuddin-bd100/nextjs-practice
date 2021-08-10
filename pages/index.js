import Head from 'next/head';
import ArticleList from '../components/ArticleList';


export default function Home({ articles }) {

  return (
    <div>
      <Head>
        <title> WebDev Newss</title>
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
// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   // const res = await fetch(`http://localhost:3000/api/articles`);
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// };



// work with ISG

export const getStaticProps = async () => {
  const res = await fetch(
    "https://61121c9a89c6d00017ac010a.mockapi.io/api/article/"
  );
  const data = await res.json()
  const articles = data.slice(0,5)
  

  return {
    props: { articles },
    revalidate: 10,
  };
}