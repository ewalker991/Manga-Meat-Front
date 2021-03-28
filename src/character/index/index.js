import React from 'react'

export default function CharIndex(props) {
    console.log("in index-page")
    return (<div>
        <h1>Characters</h1>
        {props.currentCharacter && props.currentCharacter.map(char => (
        <div onClick={()=>props.setDetail(char._id, char.Name)}key={char._id} test={char.Name}>{char.Name}</div>))}
        </div>)
}