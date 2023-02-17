import './App.css'
import SignUp from "./components/SignUp.jsx";
import Profile from "./components/Profile";
import {HashRouter, Routes, Route} from "react-router-dom";

function App() {

    return (<HashRouter>
        <Routes>
            <Route index path="/" element={<SignUp/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </HashRouter>)
}

export default App
