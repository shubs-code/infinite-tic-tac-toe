import React, { useEffect, useState } from 'react'

const Peice = ({isXturn, setIsXturn, pos}) => {
    const [card, setCard] = useState("");
    const [cardFade, setCardFade] = useState(false);
    const [turnCount, setTurnCount] = useState(0);

    useEffect(()=>{
        if(card!=""){
            if(turnCount >= 6){
                console.log(pos, card, turnCount);
                setTurnCount(0);
                setCard("");
                setCardFade(false);
            }else if(turnCount == 5){
                setCardFade(true);
                setTurnCount(turnCount+1);
            }else{
                setTurnCount(turnCount+1);
            }
        }
    },[isXturn]);

    const onCardClick = ()=>{
        console.log('click')
        if(card!=""){
            return;
        }
        if(isXturn){
            setCard("x");
        }else{
            setCard("o");
        }
        setIsXturn(!isXturn);
    }
    return (
        <div className={`m-1 rounded-md ${cardFade? 'opacity-30':'opacity-100'} `}
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