import { useContext } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Error404 from "./pages/Error404";
import Header from "./header/Header";
import { ProviderTheme } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import CatalogueProducts from "./pages/CatalogueProducts";
import CrudApi from "./productsForm/CrudApi";
import Login from "../Login";
import SignUp from "../SignUp";
import Logout from "../Logout";

function AppRouter() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ element }) =>
    currentUser ? element : <Login />;

  return (
    <>
      <Router>
        <ProviderTheme>
          <Header />
        </ProviderTheme>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<ShoppingCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/form"
            element={ProtectedRoute({ element: <CrudApi /> })}
          />
          <Route
            path="/catalogue"
            element={ProtectedRoute({ element: <CatalogueProducts /> })}
          />
          <Route
            path="/logout"
            element={ProtectedRoute({ element: <Logout /> })}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;