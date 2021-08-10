/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
const Article = ({ article }) => {

  const router = useRouter()
  if (router.isFallback) {
    return (
      <img
        src="https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
        alt="Loading...."
      />
    );
  }
  // const {id} = router.query
  return (
    <div>
      {/* <h2> This is article {id} </h2> */}

      <h2> {article.name}</h2>
      <br />
      <p>{article.body}</p>

      <br />
      <br />
      <br />

      <Link href="/">Back To Home</Link>
    </div>
  );
};
export const getStaticPaths = async () => {
  // const url = `https://jsonplaceholder.typicode.com/posts`;
  // const res = await fetch(`${url}`);
  // const articles = await res.json();

  // const paths = articles.map(article => ({
  //   params:{id:(article.id).toString()}
  // }))
  return {
    // paths,
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
    ],
    fallback:true
  };
}

export const getStaticProps = async (context) => {
  // const res = await fetch(
  //   `http://localhost:3000/api/articles/${context.params.id}`
 
  // );
  const url = `https://61121c9a89c6d00017ac010a.mockapi.io/api/article/`;
  const res = await fetch(
    `${url}/${context.params.id}`
  );
  const article = await res.json()

  if (!article.id) {
    return {
      notFound: true,
    }
  }
    // if (!article.id) {
    //   return {
    //     redirect: {
    //       destination: "/",
    //       permanent: false,
    //     },
    //   };
    // }

  return {
    props: {
      article,
    },
    revalidate: 10,
  };
}


// export const getServerSideProps = async (context) => {
  
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

export default Article;
