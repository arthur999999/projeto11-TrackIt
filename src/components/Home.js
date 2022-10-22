import styled from "styled-components"
import {Link} from "react-router-dom";

export default function Home () {
    return(
        <Gerall>
            <div><img src="./assets/images/Group8.png" alt="sddf" /></div>
            <input type='text' placeholder="email" />
            <input type='text' placeholder="senha" />
            <button>Entrar</button>
            <Link to="/cadastro">

                <p>Não tem uma conta? Cadastre-se!</p>
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