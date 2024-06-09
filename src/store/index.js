import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";

// import { counterReducer } from "./counterReducer";
// import { userReducer } from "./userReducer";
// import { todosReducer } from "./todosReducer";


// const rootReducer = combineReducers({
// counter: counterReducer,
// user: userReducer,
// todos: todosReducer,
// });

// export const store = createStore(
//   rootReducer,
//   devToolsEnhancer()
// );


import { productsReducer } from "./products.slice"

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
})

