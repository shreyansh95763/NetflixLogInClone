// import '../public/netflix-logo-png.png';
import './App.css';
import { LoginContainer} from "./components/loginContainer";
import { Footer } from "./components/footer";

function App(){
  return (
    <div className="main-body">
      <div style={{paddingLeft:'13rem',paddingTop:'2rem'}}><img alt="logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" height="65" width="200"/></div>
      <LoginContainer />
      <Footer />
    </div>
  );
}

export default App;
