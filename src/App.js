import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Main from "./pages/Main";
import Tort from "./pages/Tort";
import Private from "./pages/Private";
import {createContext, useEffect, useState} from "react";
import {cards} from "./database";
import Send from "./pages/Send";

export const AppContext = createContext(null)

function App() {
    const [torts, setTorts] = useState([])
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const response = cards
        setTorts(response)
    }, [])

    return (
        <AppContext.Provider value={{torts, setTorts, isAuth, setIsAuth}}>
            <Navigation/>

            <main style={{padding: 32}}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/torts/:id" element={<Tort/>}/>
                    <Route path="/private" element={<Private/>}/>
                    <Route path="/send/:tortId" element={<Send/>}/>
                    <Route path="*" element={<Navigate to='/'/>}/>
                </Routes>
            </main>

        </AppContext.Provider>
    );
}

export default App;
