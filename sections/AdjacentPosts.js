import React, { useState, useEffect } from 'react'

import { AdjacentPostCard } from '../components'
import { getAdjacentPosts } from '../services'

const AdjacentPosts = ({ createdAt, slug }) => {
	const [adjacentPost, setAdjacentPost] = useState(null);
	const [dataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		getAdjacentPosts(createdAt, slug)
		.then((result) => {
			setAdjacentPost(result);
			setDataLoaded(true);
		})
	}, [slug]);

	return (
		<div className="grid gird-cols1 lg:grid-cols-8 gap-12 mb-8">
			<h3 className="text-xl text-white font-semibold border-b pb-2">
				Adjacent Posts
			</h3>
			{dataLoaded && (
				<>
					{adjacentPost.previous && (
						<div className={`${adjacentPost.next ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
							<AdjacentPostCard post={adjacentPost.previous} position="LEFT" />
						</div>
					)}
					{adjacentPost.next && (
						<div className={`${adjacentPost.next ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
							<AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default AdjacentPosts;
