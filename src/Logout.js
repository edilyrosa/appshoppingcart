import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig";
import { AuthContext } from "./context/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  if (!currentUser) {
    return <p>No estás autenticado</p>;
  }

  return (
    <div>
      <h2>Bienvenido, {currentUser.email}</h2>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Logout;