import api from "../api";
import { CREATE, FETCH_ALL, UPDATE } from "./posts.types";

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

export const createPost = (newPost) => async (dispatch) => {
	try {
		const { data } = await api.post("/posts", newPost);

		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const updatePost = (id, updatePost) => async (dispatch) => {
	try {
		const { data } = await api.patch(`/posts/${id}`, updatePost);

		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
