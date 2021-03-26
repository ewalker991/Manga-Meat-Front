import React from 'react'

export default function Index(props) {
    return (<div>
        <h1>Bookmarks</h1>
        {props.currentCharacter && props.currentCharacter.map(char => (
        <div onClick={()=>props.setDetail(char._id)}key={char._id} >{char.Name}</div>))}
        </div>)
}