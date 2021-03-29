import React from 'react'

export default function CharIndex(props) {
    console.log("in index-page")
    return (
        <div className="characters">
            {props.currentCharacter && props.currentCharacter.map(char => (
                <div className="character" onClick={() => props.setDetail(char, char.Name)} key={char._id}>
                    {char.Name}
                </div>
            ))}
        </div>
    )
}