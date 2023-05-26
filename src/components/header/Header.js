import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import NavBar from "./NavBar";
import garden from '../../assets/garden.mp4'
function Header() {
    const {handleTheme, theme} = useContext(ThemeContext)
   
    return ( 
        <div className="video-container">
            <video className='video-header ' autoPlay loop muted>
                <source src={garden} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
            </video>
            <header>
                <section className="header">
                    <h1 className='main-title'>SHOPPING CART 🦄</h1>
                        <button onClick={handleTheme}  >
                            <i id="dark" 
                                onClick={handleTheme} 
                                className={`fa-solid ${theme ? "fa-moon fa-beat" :" fa-sun fa-spin" } fa-2xl`} 
                                style={{color: "#f36dc2", padding:0}}
                                >
                            </i>
                        </button>
                </section>
                <section>
                <NavBar/>
                </section>
                <br/>
            </header>
        </div>
      
     );
}

export default Header;