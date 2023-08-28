import { combineReducers } from "redux";

import { postsReducer } from "./posts/posts.reducer";

export const rootReducer = combineReducers({
	post: postsReducer,
});
