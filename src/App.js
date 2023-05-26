//npm install react-router-dom
//npm install @splinetool/react-spline @splinetool/runtime
//npm install axios
//npm i @reduxjs/toolkit axios react-redux
//npm ls node-sass sass-loader css-loader resolve-url-loader
//!farebase

import AppRouter from "./components/AppRouter";
import { Provider } from "react-redux";
import store from "./store";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>

      <Provider store={store}>
        <AppRouter/>
      </Provider>
    </AuthProvider>
   
   
  );
}

export default App;
