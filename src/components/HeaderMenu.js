import styled from "styled-components"
import MyContext from "../context/MyContext"
import { useContext } from "react"

export default function HeaderMenu () {

    const {foto} = useContext(MyContext)

    return(
        <Gerall>
                <header><div><span>TrackIt</span><img data-identifier="avatar" src={foto} alt="" /></div></header>
        </Gerall>
    )
}

const Gerall = styled.div`
    background-color: #126BA5;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 70px;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    

    div {
        display: flex;
        justify-content: space-between;
        width: 340px;
        align-items: center;
        font: 400 39px 'Playball', sans-serif;
        color: #FFF;
        
        
    }



    img {
        width: 51px;
        height: 51px;
        object-fit: cover;
        border-radius: 98.5px;
    }

`