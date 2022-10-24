import { useState, useEffect, useContext } from "react";
import axios from "axios";
import MyContext from "../context/MyContext";
import styled from "styled-components";

export default function ListHabitss ({render, setRender}) {
    const [listHabits, setListHabits] = useState([])
    const {token} = useContext(MyContext)
    const [idHabit, setIdHabit] = useState('')
    const [hiddenn , setHiddenn] = useState('hidden')

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", 
        { headers: { Authorization: `Bearer ${token}` } }
        );

		requisicao.then(res => {
			setListHabits(res.data);
            console.log(res.data)
		});
	}, []);

    if(render !== 0){
        const requisicao2 = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", 
        { headers: { Authorization: `Bearer ${token}` } }
        );

		requisicao2.then(res => {
			setListHabits(res.data);
            console.log(res.data)
		});
        setRender(0)
    }

    function newRender () {
        const requisicao2 = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", 
        { headers: { Authorization: `Bearer ${token}` } }
        );

		requisicao2.then(res => {
			setListHabits(res.data);
            console.log(res.data)
		});
    }

    function deletHabit () {
        const deletRequest = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabit}`, { headers: { Authorization: `Bearer ${token}` } } )
        deletRequest.then(res => {
            console.log(res)
            setIdHabit('')
            newRender()
            setHiddenn('hidden')
        } )
    }

    function selectDelet (m) {
        setIdHabit(m)
        setHiddenn('')
    }

    return(
        <Gerall>
            {listHabits.map((m, key)=><div key={key} className="habit"><header>
                
                    <p>{m.name}</p>
                    <span onClick={()=> selectDelet(m.id)}><ion-icon name="trash-outline"></ion-icon></span>

                </header>
                    <div>
                        <div className={(m.days).includes(0)? 'grey' : ''}>D</div>
                        <div className={(m.days).includes(1)? 'grey' : ''}>S</div>
                        <div className={(m.days).includes(2)? 'grey' : ''}>T</div>
                        <div className={(m.days).includes(3)? 'grey' : ''}>Q</div>
                        <div className={(m.days).includes(4)? 'grey' : ''}>Q</div>
                        <div className={(m.days).includes(5)? 'grey' : ''}>S</div>
                        <div className={(m.days).includes(6)? 'grey' : ''}>S</div>
                    </div>
                </div>)}
            <Delet className={hiddenn}>
                <p>Deseja deletar esse hábito?</p>
                <div><button onClick={()=> setHiddenn('hidden')}>Cancelar</button><button onClick={()=> deletHabit()}>Confirmar</button></div>
            </Delet>
        </Gerall>
    )
    
}

const Delet = styled.div`
    position: fixed;
    top: 0;
    margin-top: 200px;
    width: 200px;
    height: 90px;
    background-color: red;
    padding-top: 10px;
    padding-left: 10px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    background: #FFF;
    border-radius: 8px;
    border: 2px solid #CFCFCF;
    color: #666666;

    div {
        margin-top: 5px;
        
    }

    div button:nth-child(1) {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        background: #FFF;
        border: none;
        color: #52B6FF;
        cursor: pointer;
    }

    div button:nth-child(2) {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        background: #52B6FF;
        border: none;
        color: #FFF;
        border-radius: 5px;
        cursor: pointer;
    }
`

const Gerall = styled.div`
    * {
        box-sizing: border-box;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    .habit {
        width: 340px;
        background: #FFF;
        margin-bottom: 10px;
        padding-left: 15px;
        padding-top: 13px;
        height: 91px;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        padding-right: 10px;
    }

    .habit header {
        display: flex;
        justify-content: space-between;
        
    }

    .habit div {
        display: flex;
        margin-top: 8px;
        width: 234px;
        justify-content: space-between;
    }

    .habit div div {
        display: flex;
        justify-content: center;
        width: 30px;
        height: 30px;
        
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        text-align: center;
    }

    .grey {
        background: #CFCFCF;
        color: #FFF;
    }
`