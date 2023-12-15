import React from "react";
import { useGlobalContext } from "../context/context";

const Pagination = () => {
	const { pages, nbPages, nextSearch, prevSearch } = useGlobalContext();
	return (
		<div className="pagination-btn">
			<button onClick={prevSearch}>Prev</button>
			<p style={{ color: "black" }}>
				{pages + 1} of {nbPages}
			</p>
			<button onClick={nextSearch}>Next</button>
		</div>
	);
};

export default Pagination;
