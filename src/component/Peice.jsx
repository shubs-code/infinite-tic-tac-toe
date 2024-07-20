import React, { useEffect, useState } from 'react'

const Peice = ({isXturn, setIsXturn, pos, onUpdateCard, cardValue}) => {
    const [card, setCard] = useState("");
    const [cardFade, setCardFade] = useState(false);
    const [turnCount, setTurnCount] = useState(0);

    useEffect(()=>{
        if(card!=""){
            if(turnCount >= 6){
                setTurnCount(0);
                setCard("");
                setCardFade(false);
            }else if(turnCount == 5){
                onUpdateCard(pos, "");
                setCardFade(true);
                setTurnCount(turnCount+1);
            }else{
                setTurnCount(turnCount+1);
            }
        }
    },[isXturn]);

    const onCardClick = ()=>{
        if(cardValue != undefined || card!=""){
            return;
        }
        if(isXturn){
            setCard("x");
            onUpdateCard(pos, "x");
        }else{
            setCard("o");
            onUpdateCard(pos, "o");
        }
        setIsXturn(!isXturn);
    }
    return (
        <div className={`m-1 rounded-md ${cardFade? 'opacity-30':'opacity-100'} `}
            onClick={onCardClick}
        >
            {
                (cardValue??card)=='x' && <img src='/x.png'/>
            }
            {
                (cardValue??card)=='o' && <img src='/o.png'/>
            }
        </div>
    )
}

export default Peice