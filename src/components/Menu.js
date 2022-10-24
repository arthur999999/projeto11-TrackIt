import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import { Link } from 'react-router-dom';
import {  useContext } from "react";
import MyContext from "../context/MyContext";
import styled from 'styled-components';

export default function Menu () {

    const { feito } = useContext(MyContext)
    return(
        <Geralll>
            <Link to='/habitos'>

                <p id='pp'>Hábitos</p>
            </Link>
            <Link to='/hoje'>
                <div style={{width: 91, height: 91}}>
                    <CircularProgressbar value={feito} text={`Hoje`}  

                        styles={buildStyles({
                            
                            rotation: 0,

                            
                            strokeLinecap: 'butt',

                            
                            textSize: '22px',
                            fontFamily: 'Lexend Deca',
                            
                            pathTransitionDuration: 0.5,

                            
                            

                        
                            pathColor: `#FFF`,
                            textColor: '#FFF',
                            trailColor: '#52B6FF',
                            backgroundColor: '#3e98c7',
                        })}
                    />

                </div>
            </Link>
            <Link to="/historico">
                <p>Histórico</p>
            
            </Link>
        </Geralll>
    )
}

const Geralll = styled.div`
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background: #FFF;
    width: 370px;
    font: 400 18px 'Lexend Deca', sans-serif;
    padding-left: 36px;
    padding-right: 31px;
    color: #52B6FF;
    
    Link {
        text-decoration: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    a:visited {
        color: #52B6FF;
    }
    

    div {
        box-sizing: border-box;
        border-radius: 45.5px;
        padding: 5px;
        background-color: #52B6FF;
        color: #FFF;
        position: absolute;
        bottom: 10px;
        left: 142px;
        cursor: pointer;
    }

    

    
`