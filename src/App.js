import './App.css';
import Index from './character/index/index.js';
import Create from './character/create/create.js';
import React, { Component } from 'react';

// import TestComp from './test-component/test-comp'

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      food: [],
      currentPage: ""
    }
  }

  getAllCharacters = () => {
    console.log("Getting all characters...")
    const requestOptions = {
      method: "GET"
    }
    fetch('https://manga-meat-back.herokuapp.com/character', requestOptions)
      .then(resp=>resp.json())
      .then(characters=>{
        this.setState({characters: characters})
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  }

  handleCreateCharacter = (data) => {
    const {Name, School} = data
    const newCharacter = { Name, School }
    fetch('https://manga-meat-back.herokuapp.com/character', //local HOST FOR TESTINGGG
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCharacter)
        }).then(response=>response.json())
        .then(newCharacter=>{
          console.log(newCharacter)
          this.setState({characters: [...this.state.characters, newCharacter], currentPage: "Index"})
        })
  }


  getAllFood = () => {
    console.log("Getting all food...")
    const requestOptions = {
      method: "GET"
    }
    fetch('https://manga-meat-back.herokuapp.com/food', requestOptions)
      .then(resp=>resp.json())
      .then(food=>{
        this.setState({food: food})
      })
  }

  componentDidMount() {
    this.getAllCharacters()
    this.getAllFood()
  }

  render() {
    let currentCharacter = this.state.characters;
    console.log(currentCharacter)
    console.log(this.state.food)

    return (
      <div className="App">
        <Index currentCharacter={this.state.characters}/>
        <Create create={this.handleCreateCharacter}/>
        <header className="App-header">
          <h1>MangaMeat</h1>
        </header>
        <div className="feed">
          {/* <h5>FEED</h5> */}
          <div className="post">
            <div className="author">
              <h3>character name</h3>
              {/* poster's profile picture, replace <p> with image? */}
              <p className="profilePicture">A</p>
              <p>Post text</p>
              {/* poster's submitted picture replace <p> with image?*/}
              <p className="postPicture">B</p>
              <button className="submit-comment">CREATE COMMENT</button>
            </div>

            <div className="comments">
              <h3>username</h3>
              <p>comment</p>
              <button className="edit">EDIT</button>
              <button className="delete">DELETE</button>
            </div>

          </div>

        </div>

      </div>
    )
  }
}

export default App;
