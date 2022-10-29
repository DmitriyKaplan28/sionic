import {legacy_createStore as createStore, combineReducers} from "redux";
import {createReducer} from "redux-orm";
import {ORM} from "redux-orm";

const orm = new ORM;

const rootReducer = combineReducers({
    orm: createReducer(orm),
});
export const store = createStore(rootReducer);