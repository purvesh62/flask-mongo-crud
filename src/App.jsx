import './App.css'
import SignUp from "./components/SignUp.jsx";
import Profile from "./components/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

    return (<BrowserRouter>
        <Routes>
            <Route index element={<SignUp/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </BrowserRouter>)
}

export default App
