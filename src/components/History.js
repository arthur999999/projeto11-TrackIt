import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";

export default function History () {
    return(
        <>
            <HeaderMenu/>
            <Hist>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
               </Hist> 
        </>
    )
}

const Hist = styled.div`
    width: 340px;
    margin-top: 28px;

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 17px;
    }
    
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`