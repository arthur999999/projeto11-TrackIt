import styled from "styled-components"
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Register () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')
    const navigation = useNavigate();

    function sendRegister() {

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            
                email: email,
                name: nome,
                image: foto,
                password: password
            

        });

        requisicao.then(resposta => {
           console.log(resposta);
            navigation('/')
        });

        requisicao.catch(erro => {
            console.log(erro.response.data);
            alert('deu errado')
        });
    }

    return(
        <Gerall>
            <div><img src="./assets/images/Group8.png" alt="sddf" /></div>
            <input type='text' data-identifier="input-email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
            <input type='text' data-identifier="input-password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" />
            <input type='text' data-identifier="input-name" value={nome} onChange={e => setNome(e.target.value)} placeholder="nome" />
            <input type='text' data-identifier="input-photo" value={foto} onChange={e => setFoto(e.target.value)} placeholder="foto" />
            <button onClick={()=> sendRegister()}>Cadastrar</button>
            <Link  to="/">
                <p data-identifier="back-to-login-action">Já tem uma conta? Faça login!</p>

            </Link>

        </Gerall>
    )
}

const Gerall = styled.div`
    margin-top: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        margin-bottom: 40px;
    }    

    input {
        width: 295px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        padding-left: 11px; 
    }

    input::placeholder {
        color: #DBDBDB;
    }

    button {
        width: 303px;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 4px;
        border: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        color: #FFF;
        cursor: pointer;
    }

    p {
        margin-top: 25px;
        text-decoration: underline;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        color: #52B6FF;
        cursor: pointer;
    }

`