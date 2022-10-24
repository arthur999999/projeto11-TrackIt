import HeaderMenu from "./HeaderMenu";
import { useEffect, useContext, useState } from "react";
import MyContext from "../context/MyContext";
import axios from "axios";
import styled from "styled-components";
import dayjs from "dayjs";


export default function Today () {

    const {token, feito, setFeito} = useContext(MyContext)
    
    const [todayHabits, setTodayHabits] = useState([])

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", 
        { headers: { Authorization: `Bearer ${token}` } }
        );

		requisicao.then(res => {
			
            console.log(res)
            setTodayHabits(res.data)
            
            
            
		});
	}, []);

    const listConclued = []

    for(let i = 0; i < todayHabits.length ; i++){
        listConclued.push(todayHabits[i].done)
    }

    console.log(listConclued)
    let z = 0
    for( let zapzap of listConclued ){
        if(zapzap === true){
            z = z + 1
        }
    }

    setFeito( ((z / listConclued.length) * 100).toFixed(0))

    

    

  

    
		
	

    function renderAgain () {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", 
        { headers: { Authorization: `Bearer ${token}` } }
        );

		requisicao.then(res => {
			
            console.log(res)
            setTodayHabits(res.data)
		});
    }

    function conclued(m, z) {
        if(z !== true) {

            const newRequset = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${m}/check`, {},  {
                headers: { Authorization: `Bearer ${token}` }
            })
    
            newRequset.then(res => {
                console.log(res)
                renderAgain()
            })
        }else{
            const newRequset = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${m}/uncheck`, {},  {
                headers: { Authorization: `Bearer ${token}` }
            })
    
            newRequset.then(res => {
                console.log(res)
                renderAgain()
            })
        }
    }
    
    function dia () {
        switch (dayjs().day()) {
            case 0:
                return('Domingo')

                break;
            case 1:
                return('Segunda')
                break;
            case 2:
                return('Terça')
                break;
            case 3:
                return('Quarta')
                break;
            case 4:
                return('Quinta')
                break;
        
            case 5:
                return('Sexta')
                break;
            case 6:
                return('Sábado')
                break;
        
            default:
                break;
        }
    }

    return(
        <Globall>
        
            <HeaderMenu/>
                
                <Cabe><h1>{dia()}, {dayjs().date()}/{dayjs().month()}</h1><p>{feito}% dos hábitos concluídos</p></Cabe>
            <Habit>
                {todayHabits.map((m, key)=><div key={key} className="card">
                    <div>
                        <h1>{m.name}</h1>
                        <p>Sequência atual: {m.currentSequence} dias</p>
                        <p>Seu recorde: {m.highestSequence
} dias</p>
                    </div>
                    <div onClick={()=> conclued(m.id , m.done)} className={m.done == true ? 'green' : ''}><ion-icon name="checkmark-sharp"></ion-icon></div>
                </div>)}
            </Habit>
        </Globall>
    )
}

const Cabe = styled.div`
    width: 340px;
    
    margin-top: 28px;
    margin-bottom: 28px;

    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #8FC549;
    }
`

const Globall = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
`

const Habit = styled.div`
    * {
        box-sizing: border-box;
    }

    .card {
        width: 340px;
        height: 94px;
        background-color: red;
        margin-bottom: 10px;
        padding-left: 15px;
        padding-top: 13px;
        padding-right: 13px;
        display: flex;
        justify-content: space-between;
        background: #FFFFFF;
        border-radius: 5px;
    }

    .card h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        margin-bottom: 7px;
        color: #666666;
    }

    .card p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;

        color: #666666;
    }

    .card div:nth-child(2) {
        width: 69px;
        height: 69px;
        font-size: 45px;
        background-color: blue;
        justify-content: center;
        align-items: center;
        padding-left: 12px;
        padding-top:10px;
        color: #FFF;
        background: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        cursor: pointer;
    }

    .card div.green {
        background-color: #8FC549;
    }
`