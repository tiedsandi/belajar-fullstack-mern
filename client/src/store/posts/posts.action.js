import { POSTS_ACTION_TYPES } from "./posts.types";
import { createAction } from "../../utils/reducers.utils";
import api from "../api";

export const fetchPostStart = () =>
	createAction(POSTS_ACTION_TYPES.FETCH_DATA_START);

export const fetchPostuccess = (postsArr) =>
	createAction(POSTS_ACTION_TYPES.FETCH_DATA_SUCCESS, {
		posts: postsArr.data,
	});

export const fetchPostFailed = (error) =>
	createAction(POSTS_ACTION_TYPES.FETCH_DATA_FAILED, error);

export const getPosts = () => {
	return async (dispatch) => {
		dispatch(fetchPostStart());
		try {
			const postsArr = await api.get("/posts");
			dispatch(fetchPostuccess(postsArr));
		} catch (error) {
			dispatch(fetchPostFailed(error));
		}
	};
};
