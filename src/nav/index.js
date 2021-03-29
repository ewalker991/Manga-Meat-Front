import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation (){
    return (
      <>
    <Link to="/characters">Characters</Link>
    <Link to="/food">Food</Link>
    <Link to="">Home</Link>
    </>
    )
}