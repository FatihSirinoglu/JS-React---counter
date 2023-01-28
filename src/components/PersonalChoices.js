import React from 'react'
import { useState } from 'react'

function PersonalChoices() {
    const [personalIncrease, setPersonalIncrease] = useState("")
    const onChangeInc = (event)=> setPersonalIncrease(event.target.value);
    

    const [personalDecrease, setPersonalDecrease] = useState(1)
    const onChangeDec = (event)=> setPersonalDecrease(event.target.value);

    

  return (
    <div style={{color:"greenyellow",padding:"20px"}}>
    <br></br>
    <input value={personalIncrease} placeholder='personal increase' onChange={onChangeInc} type="number"/>
        {onChangeInc}
    <br></br>
    <br></br>

    <input  value={personalDecrease} placeholder='personal decrease' onChange={onChangeDec} type="number"/>
        {onChangeDec}
    </div>
  )
}

export default PersonalChoices;