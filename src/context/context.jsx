import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer";

const AppContext = createContext();
const API_URL = "https://hn.algolia.com/api/v1/search";
const AppProvider = ({ children }) => {
	const initialState = {
		loader: false,
		hits: [],
		nbPages: 0,
		pages: 0,
		query: "React",
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const getFecthData = async (url) => {
		dispatch({
			type: "SET_LOADER",
		});
		try {
			const resp = await fetch(url);
			const data = await resp.json();
			console.log(data);
			dispatch({
				type: "GET_STORIES",
				payload: {
					hits: data.hits,
					nbPages: data.nbPages,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};
	// console.log(state);

	//To remove the post
	const removePost = (postID) => {
		dispatch({ type: "REMOVE_POST", payload: postID });
	};

	//Serach post
	const searchPost = (value) => {
		dispatch({ type: "SEARCH_POST", payload: value });
	};

	//Pahgination
	const prevSearch = () => {
		dispatch({ type: "PREV_POST" });
	};
	const nextSearch = () => {
		dispatch({ type: "NEXT_POST" });
	};
	useEffect(() => {
		getFecthData(`${API_URL}?query=${state.query}&page=${state.pages}`);
	}, [state.query, state.pages]);

	return (
		<AppContext.Provider
			value={{ ...state, removePost, searchPost, prevSearch, nextSearch }}
		>
			{children}
		</AppContext.Provider>
	);
};

// Creating a custom hook
const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
