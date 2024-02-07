import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "./componentsHome/Home";
import "./App.css";

function Main(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/login' element={<App />} />
            </Routes>

        </BrowserRouter>

    );
}

export default Main;