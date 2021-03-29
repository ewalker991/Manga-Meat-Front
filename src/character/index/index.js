import React from 'react'

export default function CharIndex(props) {
    console.log("in index-page")
    return (
        <div className="characters">
            {props.currentCharacter && props.currentCharacter.map(char => (
                <div className="character" onClick={() => props.setDetail(char._id, char.Name)} key={char._id} test={char.Name}>
                    {char.Name}
                </div>
            ))}
        </div>
    )
}