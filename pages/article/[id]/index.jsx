// import { useRouter } from 'next/router'
import Link from "next/link";
const Article = ({ article }) => {
  // const router = useRouter()
  // const {id} = router.query
  return (
    <div>
      {/* <h2> This is article {id} </h2> */}

      <h2> {article.title}</h2>
      <br />
      <p>{article.body}</p>

      <br />
      <br />
      <br />

      <Link href="/">Back To Home</Link>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default Article;
