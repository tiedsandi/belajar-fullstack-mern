import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWares = [
	process.env.NODE_ENV === "development" && logger,
	thunk,
	// process.env.NODE_ENV === "development" && thunk,
].filter(Boolean);

const composeEnhancer =
	(process.env.NODE_ENV !== "production" &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

const store = createStore(rootReducer, composedEnhancers);

export default store;
