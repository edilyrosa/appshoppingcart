//npm install @splinetool/react-spline @splinetool/runtime
import Spline from '@splinetool/react-spline';
//import garden from '../../assets/garden.mp4'
import garden from '../../assets/home2.mp4'
function Home() {
    return ( 
        <>
            <h1>Soy Home</h1>
          
             {/* <Spline scene="https://prod.spline.design/runDeoidfG3pe-cw/scene.splinecode" />
             <Spline scene="https://prod.spline.design/KEZWZYSEEthdLdSO/scene.splinecode" /> */}
           {/* <Spline scene="https://prod.spline.design/g54b9JCODt1g4uD2/scene.splinecode" /> */}
           {/* <Spline scene="https://prod.spline.design/EqpmW9SM0RBYpFtA/scene.splinecode"/ > */}

           <div className='video-container-home'>
             <video className="video-home" autoPlay loop muted>
                <source src={garden} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
            </video>
           </div>

           
           
        </>
     );
}

export default Home;
