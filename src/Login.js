import { useState } from 'react';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setError(error)
      console.error('Error al iniciar sesión**************', error);
      //!llamar aca un componente de q la clave es incorrecta
    }
  };

  return (
    <>
      <div className="login-container">
        <h2>Administrative Staff's Login 👮🏼‍♀️</h2>
        <br/>
        <form onSubmit={signIn} className="login-form">
          <div className="form-control">
            <label htmlFor="email">Email 📧</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">password 🔑</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
      <div>
        {error && <p> Either the <b>Email📧</b> or <b>password🔑</b> is wrong, check them, please👮🏼‍♀️</p>}
        <br/>
      </div>
      <div>
        <p>Just out <b>Abministrative Staff</b> has accese to <i>Crud-Products</i> and <i>Catalogue-Productos.</i></p>
        <p>Our  <b>Distinguished Customers</b> can browse on the <i>Shopping Products</i> and make purchases📦.</p>
      </div>
    </>
    );
  
};

export default Login;
