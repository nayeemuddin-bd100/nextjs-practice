Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.

There are three unique Next.js functions you can use to fetch data for pre-rendering:

    getStaticProps (Static Generation): Fetch data at build time.
    static method of pre-rendering. where html pages are created at build time
    getStaticPaths (Static Generation): Specify dynamic routes to pre-render pages based on data.
    getServerSideProps (Server-side Rendering): Fetch data on each request.

\*\* First of all we'll talk about getStatic Props

export const getStaticProps = async (context) => {
return {
props: {}, // will be passed to the page component as props
}
}

context nicher jinish gula receive kore =>
\*\* params - router er parameter er sobgula item ekhane thake.

==> Incremental Static Regeneration

Dori , ekta page e api teke data ene show korlam ... ekhn page ta jodi build kori tkn se nirdistoo path er jonno html create kore nei ... ekn database jodi update eta re-build howar kono sujog nei .. jar karone database update dile o page e old data show kore . ei problm ta solve korar jonno asche ISG . isg er maddome ekta nirdistio tym por por page er behind the scene api er kase requst patai . r jokon upadated data pai tokon se oitar jonno ekta html file or data update kore dei .. eta korte hoi revalidate er maddome ...
template =>

export const getStaticProps = async () => {
const res = await fetch(
"https://61121c9a89c6d00017ac010a.mockapi.io/api/articles"
);
const articles = await res.json();

return {
props: { articles },
revalidate: 10, // ekhane 10 mane hosse 10s.
};
}

ekhane revalidate 10 deyar karone 10 sec por por jodi reloade dei tahole ei component tah 10 sec por regenerate hobe .. eta amra staticProps e console korar maddome bujte pari ... getStaticProps e jodi ekta console diy eta 10 sec por jodi reloade dei tahole ei console ta o print out hobe .. ekane revalidate er arekta beheviour hosse revalidate dile 10 sec por duibar refresh dite hobe noyto product update hobe nah

==>process.cwd()
server side er code lekhar jonno eta use kora hoi . ex: express er fs module jodi require kore kisu korte chai taa o kora jabe ekhan teke!

/==============/
Serverside

<!-- client side data fetching -->

we already have talk about two forms of pre-rendering. where, static site generation for static website and server sider rendering for server side.
In this both two types of data render was seo friendly.

Bt Sometime we dont need any seo. for instance we can talk about dashboard page. In dashboard page we dont need any seo . dashboard page alwys behind the login screen.it's private as well. Highly user specefic seo is not relevent and no need to pre-render. and thats time we can use client site data fetching. when we fetch data using useEffect and useState , that is called client site data fetching

we are discuss elaborately in dashboard page

==> SWR
firstly we have to install the library using npm i swr
The swr is simple libry to fetch data like axios , we crated a page with swr in dashoard-swr.js. It's much simpler and cleaner than using useEffetc or useState to data fetching

<!-- bootstrap cdn -->

to use bootstrap cdn we need to add and import head tag in \_app.js file . inside this head tag we can use bootstrap cdn and any other page or component will able to use any bootrap className
