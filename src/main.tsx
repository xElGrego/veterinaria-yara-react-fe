import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { saveUser } from "./redux/User/user.slice";
import { App } from "./App";

const savedUser = JSON.parse(localStorage.getItem("user")!);

if (savedUser) {
  store.dispatch(saveUser(savedUser));
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
