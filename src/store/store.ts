import {legacy_createStore as createStore, combineReducers} from "redux";
import {createReducer} from "redux-orm";
import {ORM} from "redux-orm";

const orm = new ORM;

const rootReducer = combineReducers({
    orm: createReducer(orm), // This will be the Redux-ORM state.
    // … potentially other reducers
});
const store = createStore(rootReducer);