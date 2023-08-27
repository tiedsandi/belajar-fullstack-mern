import api from "../api";
import { CREATE, FETCH_ALL } from "./posts.types";

export const getPosts = () => {
	return async (dispatch) => {
		try {
			const { data } = await api.get("/posts");
			dispatch({ type: FETCH_ALL, payload: data });
		} catch (error) {
			console.log(error);
		}
	};
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.post("/posts", post);

		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
