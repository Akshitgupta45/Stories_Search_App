const reducer = (state, action) => {
	switch (action.type) {
		case "GET_STORIES":
			return {
				...state,
				hits: action.payload.hits,
				nbPages: action.payload.nbPages,
				loader: false,
			};
		case "SET_LOADER":
			return {
				...state,
				loader: true,
			};
		case "REMOVE_POST":
			return {
				...state,
				hits: state.hits.filter(
					(currPost) => currPost.objectID != action.payload
				),
			};
		case "SEARCH_POST":
			return {
				...state,
				query: action.payload,
			};
		case "PREV_POST":
			let decPage = state.pages - 1;
			if (decPage <= 0) {
				decPage = 0;
			}
			return {
				...state,
				pages: decPage,
			};
		case "NEXT_POST":
			let incPage = state.pages + 1;
			if (incPage >= 50) {
				incPage = 0;
			}
			return {
				...state,
				pages: incPage,
			};
	}
	return state;
};
export default reducer;
