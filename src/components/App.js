import Home from "./Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import Register from "./Register";


export default function App() {
    return(
        <Centralized>

            <BrowserRouter>
                <Routes>
                    
                    <Route path="/" element={<Home/>} />
                    <Route path="/cadastro" element={<Register/>} />
                </Routes>
                
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