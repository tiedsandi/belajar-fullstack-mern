import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducers";

import thunk from "redux-thunk";

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
