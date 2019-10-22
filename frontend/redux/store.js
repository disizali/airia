import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import composeWithDevTools from "redux-devtools-extension";
// import reducers from "./reducers";
// const middleware = applyMiddleware(thunk);
// let store = createStore(reducers, middleware);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  status: 0,
  user: {}
};

export const actionTypes = {
  AUTH: "AUTH"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH:
      state = { status: action.payload.status, user: action.payload.user };
      break;
  }
  return state;
};

// export const toggle = status => dispatch => {
// return dispatch({ type: actionTypes.AUTH, status });
// };

export const initStore = (store = initialState) => {
  return createStore(
    reducer,
    store
    // composeEnhancers(applyMiddleware(thunk))
  );
};
