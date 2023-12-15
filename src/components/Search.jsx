import { useGlobalContext } from "../context/context";

const Search = () => {
	const { query, searchPost } = useGlobalContext();
	return (
		<>
			<h1>Search for your favourite Tech News ...</h1>
			<form action="#" onSubmit={(e) => e.preventDefault()}>
				<div>
					<input
						type="text"
						placeholder="Search here"
						value={query}
						onChange={(e) => searchPost(e.target.value)}
						style={{ fontSize: "2rem" }}
					/>
				</div>
			</form>
		</>
	);
};

export default Search;
