import React, { useState } from 'react'

const Peice = ({isXturn, setIsXturn}) => {
    const [card, setCard] = useState("");

    const onCardClick = ()=>{
        console.log('click')
        if(isXturn){
            setCard("x");
        }else{
            setCard("o");
        }
        setIsXturn(!isXturn);
    }
    return (
        <div className=' m-1 rounded-md'
            onClick={onCardClick}
        >
            {
                card=='x' && <img src='/x.png'/>
            }
            {
                card=='o' && <img src='/o.png'/>
            }
        </div>
    )
}

export default Peice