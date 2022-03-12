import "../styles/globals.css";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../src/store";
import thunkMiddleware from "redux-thunk";

function MyApp({ Component, pageProps }) {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
