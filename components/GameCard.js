import Image from 'next/image'
import React from 'react'
import Style from '../styles/GameCard.module.css'

export default function GameCard({game,setDisplay, setGameDescription}){
    return (
        <div className={Style.GameCard} onClick={ () => {setGameDescription(game); setDisplay(true); } }>
        <p className={Style.p}> {game.name}</p>
        <Image
          src={game.background_image}
          alt=""
          width="400"
          height="150"
        />
      </div>
    )

}
