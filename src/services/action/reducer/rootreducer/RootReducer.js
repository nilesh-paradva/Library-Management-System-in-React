import { combineReducers } from "redux";
import BookReducer from "../BookReducer";

const RootReducer = combineReducers({
    BookReducer,
})

export default RootReducer
