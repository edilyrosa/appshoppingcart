//npm install react-router-dom
//npm install @splinetool/react-spline @splinetool/runtime
//npm install axios
//npm i @reduxjs/toolkit axios react-redux

import AppRouter from "./components/AppRouter";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
   
  );
}

export default App;
