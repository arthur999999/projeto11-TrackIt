import styled from "styled-components"

export default function CriarHabito ({setHidden}) {
    return(
        <Criar>
            <span>Meus hábitos</span><button data-identifier="create-habit-btn" onClick={()=> setHidden('')}><div>+</div></button>
        </Criar>
    )
}

const Criar = styled.div`
    font: 400 23px 'Lexend Deca', sans-serif;
    display: flex;
    justify-content: space-between;
    width: 340px;
    align-items: center;
    margin-top: 22px;
    color: #126BA5;
    margin-bottom: 20px;

    button {
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 4.7px;
        border: none;
        font: 400 27px 'Lexend Deca';
        color: #FFF;
        
        position: relative;
        cursor: pointer;
        
        
    }

    button div {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 12px;
    }

    
`