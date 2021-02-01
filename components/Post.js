import Link from 'next/link';
import Date from './Date';

export default function Post({ post }) {
  return (
    <div className="m-3 p-5 border-2 rounded-md shadow-small bg-white hover:shadow-lg">
      <h3 className="font-bold text-center text-lg">{post.title}</h3>
      <h5 className="text-center mt-3 font-light">
        <Date dateString={post.date} />
      </h5>
      <div className="mt-3 content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      <div className="mt-7 text-center">
        <a className="bg-gray-50 p-2 rounded-full inline hover:bg-gray-100 hover:shadow-md" href={post.github ?? '#'} target="_blank">
          @{post.author}
        </a>
      </div>
    </div>
  );
}
