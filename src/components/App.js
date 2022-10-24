import Home from "./Home";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import styled from "styled-components";
import Register from "./Register";
import { useState } from "react";
import Dashboard from "./Dashboard";
import MyContext from "../context/MyContext";
import Menu from "./Menu";
import Today from "./Today";
import History from "./History";


export default function App() {
    const [foto, setFoto] = useState('')
    const [token, setToken] = useState('')
    const [feito, setFeito] = useState(0)
    return(
        <Centralized>

            <BrowserRouter>
                <MyContext.Provider value={{foto, setFoto, token, setToken, feito, setFeito}}>
                    <Routes>
                   
                        <Route path="/" element={<Home />} /> 
                        <Route path="/cadastro" element={<Register/>} />
                        <Route path="/habitos" element={<><Dashboard /><Menu /></>} />
                        <Route path="/hoje" element={<><Today /><Menu /></>} />
                        <Route path="/historico" element={<><History/><Menu/></>} />
                    </Routes>
                </MyContext.Provider>
            </BrowserRouter>
        </Centralized>
        
    )
}
const Centralized = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;
`