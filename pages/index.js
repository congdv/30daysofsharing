import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Post from '../components/Post';
import Footer from '../components/Footer';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>30 days of sharing</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
        <h1 className="text-3xl font-bold text-center p-5 md:max-w-full">30 days of sharing</h1>
      </header>
      <main className="max-w-3xl m-auto -my-0">
        {allPostsData.map((post, key) => (
          <Post key={key} post={post} />
        ))}
      </main>
      <Footer/>
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
