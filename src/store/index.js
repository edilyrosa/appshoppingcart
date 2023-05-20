/*import { createStore } from 'redux';
import reducer from "../reducers";

const store = createStore(reducer)
store.subscribe(() => console.log(store))

export default store;
*/

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "../reducers";

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });

export default store;