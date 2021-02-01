import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Post from '../components/Post';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>30 days of sharing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="text-3xl font-bold text-center p-5">30 days of sharing</h1>
      </header>
      <main className="max-w-3xl m-auto -my-0">
        {allPostsData.map((post, key) => (
          <Post key={key} post={post} />
        ))}
      </main>
      <footer></footer>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
