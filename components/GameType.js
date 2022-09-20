import React, { useEffect, useState } from 'react'
import Style from '../styles/GameType.module.css'

export default function GameType({type, setIdType, setDisplay}) {

  return (
    <div className={Style.GameType}>
        <h5 className={Style.h5} onClick={ () => {setIdType(type.id); setDisplay(false);}}>{type.name}</h5>
    </div>
  )
}
