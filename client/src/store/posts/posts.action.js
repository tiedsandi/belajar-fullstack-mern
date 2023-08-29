import postsApi from "../api/postsApi";
import { CREATE_POST, DELETE_POST, FETCH_ALL, LIKE_POST, SET_CURRENT_ID, UPDATE_POST } from "./posts.types";

const createAction = (type, payload) => ({ type, payload });

export const setCurrentId = (id) => {
	return createAction(SET_CURRENT_ID, id);
};

export const getPostsAsync = () => {
	return async (dispatch) => {
		dispatch(createAction(FETCH_ALL, { isLoading: true }));
		try {
			const { data } = await postsApi.get("/");
			dispatch(createAction(FETCH_ALL, { isLoading: false, data }));
		} catch (error) {
			console.log(error);
			dispatch(createAction(FETCH_ALL, { isLoading: false, error }));
		}
	};
};

export const createPostAsync = (newPost) => {
	return async (dispatch) => {
		try {
			const { data } = await postsApi.post("/", newPost);
			dispatch(createAction(CREATE_POST, { data }));
		} catch (error) {
			console.log(error);
			dispatch(createAction(CREATE_POST, { error }));
		}
	};
};

export const updatePostAsync = (id, updatePost) => {
	return async (dispatch) => {
		dispatch(createAction(UPDATE_POST, { isLoading: true }));
		try {
			const { data } = await postsApi.patch(`/${id}`, updatePost);
			dispatch(createAction(UPDATE_POST, { isLoading: false, data }));
		} catch (error) {
			console.log(error);
			dispatch(createAction(UPDATE_POST, { isLoading: false, error }));
		}
	};
};

export const deletePostAsync = (id) => {
	return async (dispatch) => {
		dispatch(createAction(DELETE_POST, { isLoading: true }));
		try {
			await postsApi.delete(`/${id}`);
			dispatch(createAction(DELETE_POST, { isLoading: false, id }));
		} catch (error) {
			console.log(error);
			dispatch(createAction(DELETE_POST, { isLoading: false, error }));
		}
	};
};

export const likePostAsync = (id) => {
	return async (dispatch) => {
		dispatch(createAction(LIKE_POST, { isLoading: true }));
		try {
			const { data } = await postsApi.patch(`/${id}/likepost`);
			dispatch(createAction(LIKE_POST, { isLoading: false, data }));
		} catch (error) {
			console.log(error);
			dispatch(createAction(LIKE_POST, { isLoading: false, error }));
		}
	};
};
