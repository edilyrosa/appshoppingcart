import { combineReducers } from "redux";
import { shoppingReducer } from "./shoppingReducer";
import { crudReducer } from "./crudReducer";

const reducer = combineReducers({
    shopping: shoppingReducer,
    crud:crudReducer
})

export default reducer;