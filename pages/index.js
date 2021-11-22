import Head from 'next/head'

import {PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

/**
 *	In NextJS, you can define async functions at the bottom of your component, ensuring you use the 'getStaticProps' naming convention
 *	as well as the proper return type of object with property 'props'. These are immediately available to the component itself, and can be passed in as the arguments
 *	In this case, as { posts }
 */
export default function Home({ posts }) {
	return (
		<div className="container mx-auto px-10 mb-8">
			<Head>
				<title>DawnAuthor Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="grid grid-cols1 lg:grid-cols-12 gap-12">
				<div className="lg:col-span-8 col-span-1">
					{posts.map((post, index) => (
						<PostCard post={post} key={post.title}/>
					))}
				</div>
				<div className="lg:col-span-4 col-span-1">
					<div className="lg:sticky relative top-8">
						<PostWidget />
						<Categories />
					</div>
				</div>
			</div>
		</div>
	);
};

export async function getStaticProps() {
	const posts = (await getPosts()) || [];

	return {
		props: { posts }
	};
}
