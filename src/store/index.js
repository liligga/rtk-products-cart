import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { userReducer } from "./userReducer";
import { useSelector } from "react-redux";

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
});

export const store = createStore(rootReducer);

