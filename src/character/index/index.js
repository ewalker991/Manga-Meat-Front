import React from 'react'

export default function CharIndex(props) {
    console.log("in index-page")
    return (
        <div className="characters">
            {props.currentCharacter && props.currentCharacter.map(char => (
                <div className="character" onClick={() => props.setDetail(char, char.Name)} key={char._id}>
                    {char.Name}<img src={char.Picture} alt="pic" />
                </div>
            ))}
            <div>
            {/* <img src="https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg" alt="pic" /> */}
            </div>
        </div>
        
    )
}