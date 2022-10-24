import { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import MyContext from "../context/MyContext"

export default function CardCreate ({hidden, setHidden, setRender}) {

    const [listDays, setListDays] = useState([])
    const [habitName, setHabitName] = useState('')
    const {token} = useContext(MyContext)

    

    function selectDay(m){
        if(!listDays.includes(m)){
            setListDays([...listDays, m])
        }
        console.log(listDays)
    }

    function sendHabit () {

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", 
            {
                name: habitName,
                days: listDays
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
    
            requisicao.then(resposta => {
               console.log(resposta);
               setHabitName('')
               setListDays([])
               setHidden('hidden')
               setRender(1)
               
                
            });
    
            requisicao.catch(erro => {
                console.log(erro.response.data);
                
                
                alert('Deu ruim!')
                
            });
    }

    function cancel () {
        setHidden('hidden')
        setListDays([])
    }

    return(
        <Globall className={hidden}>
            <input type="text" value={habitName} onChange={e => setHabitName(e.target.value)} placeholder="nome do hábito" />
            <div className="buttons">
                <button onClick={()=> selectDay(1)} className={listDays.includes(1)? 'grey' : ''}>D</button>
                <button onClick={()=> selectDay(2)} className={listDays.includes(2)? 'grey' : ''}>S</button>
                <button onClick={()=> selectDay(3)} className={listDays.includes(3)? 'grey' : ''}>T</button>
                <button onClick={()=> selectDay(4)} className={listDays.includes(4)? 'grey' : ''}>Q</button>
                <button onClick={()=> selectDay(5)} className={listDays.includes(5)? 'grey' : ''}>Q</button>
                <button onClick={()=> selectDay(6)} className={listDays.includes(6)? 'grey' : ''}>S</button>  
                <button onClick={()=> selectDay(7)} className={listDays.includes(7)? 'grey' : ''}>S</button>
            
            
            </div>
            <div className="others">
                <button onClick={()=> cancel()}>Cancelar</button><button onClick={()=> sendHabit()}>Salvar</button>
            </div>
        </Globall>
    )
}

const Globall = styled.div`
    box-sizing: border-box;
    
    width: 340px;
    height: 180px;
    padding-left: 17px;
    padding-top: 18px;
    padding-right: 18px;
    border-radius: 5px;
    background: #FFF;

    button {
        cursor: pointer;
    }

    input{
        box-sizing: border-box;
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        font: 400 19px 'Lexend Deca', sans-serif;
        padding-left: 11px;
        
    }

    input::placeholder {
        color: #DBDBDB;
    }

    .buttons {
        width: 234px;
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
       
        
    }

    .buttons button {
        font: 400 19px 'Lexend Deca', sans-serif;
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: #DBDBDB;
        background-color: white;
    }

    .others {
        margin-top: 29px;
        display: flex;
        justify-content: flex-end;
    }

    .others button {
        width: 84px;
        height: 35px;
        font: 400 16px 'Lexend Deca', sans-serif;
    }

    .others button:nth-child(1) {
        background: #FFF;
        border-radius: 4.63636px;
        border: none;
        color: #52B6FF;
        margin-right: 20px;
    }

    .others button:nth-child(2) {
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        color: white;
        
    }

    .buttons .grey {
        background-color: #CFCFCF;
        color: #FFF;
    }
`