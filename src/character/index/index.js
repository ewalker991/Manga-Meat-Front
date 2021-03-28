import React from 'react'

export default function CharIndex(props) {
    console.log("in index-page")
    return (<div>
        <h1>Characters</h1>
        {props.currentCharacter && props.currentCharacter.map(char => (
        <div onClick={()=>props.setDetail(char.Name)}key={char.Name}>{char.Name}</div>))}
        </div>)
}