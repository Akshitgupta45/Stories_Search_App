import React from "react";
import { useGlobalContext } from "../context/context";
import Loader from "./Loader";

const Stories = () => {
	const { hits, loader, removePost } = useGlobalContext();

	if (loader) {
		return <Loader />;
	}
	return (
		<div className="stories-div">
			{hits.map((currPost) => {
				const { title, author, num_comments, objectID, url } = currPost;
				return (
					<div className="card" key={objectID}>
						<h2>{title}</h2>
						<p>
							By <span>{author}</span> | <span>{num_comments} Comments</span>
						</p>
						<div className="card-button">
							<a href={url} target="_blank">
								Read More
							</a>
							<a href="#" onClick={() => removePost(objectID)}>
								Remove
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Stories;
