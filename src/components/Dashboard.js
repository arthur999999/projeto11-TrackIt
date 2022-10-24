import { useContext, useState } from "react"
import styled from "styled-components"

import CardCreate from "./CardCreate"
import CriarHabito from "./CriarHabito"
import HeaderMenu from "./HeaderMenu"
import ListHabitss from "./ListHabitss"

export default function Dashboard () {

    
    const [hidden , setHidden] = useState('hidden')
    
    const [render, setRender] = useState(0)
    
    return(
        <Backk>
        
            <HeaderMenu/>
            <Habitoss>
                <CriarHabito setHidden={setHidden}/>
                <CardCreate hidden={hidden} setHidden={setHidden} setRender={setRender}/>
                <ListHabitss render={render} setRender={setRender}/>
            </Habitoss>
        </Backk>
        
        
    )
}
const Backk = styled.div`
    width: 100vw;
    height: 100vh;
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Habitoss = styled.div`
   
   .hidden {
    display: none;
   }
  
`