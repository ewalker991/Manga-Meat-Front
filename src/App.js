import './App.css';
import Index from './character/index/index.js';
import Create from './character/create/create.js';
import Delete from './character/delete/delete.js';
import Edit from './character/edit/edit.js';
import React, { Component } from 'react';

import FoodIndex from './food/index/index.js';
import CreateFood from './food/create/create.js';
import EditFood from './food/edit/edit.js';
import DeleteFood from './food/delete/delete.js';

// import TestComp from './test-component/test-comp'

class App extends Component {

  constructor() {
    super()
    this.state = {
      characters: [],
      food: [],
      currentPage: "",
      bookmarkToDelete: "" // an object from child component state
    }
  }

  getAllCharacters = () => {
    console.log("Getting all characters...")
    const requestOptions = {
      method: "GET"
    }
    fetch('https://manga-meat-back.herokuapp.com/character', requestOptions)
      .then(resp => resp.json())
      .then(characters => {
        this.setState({ characters: characters })
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  }

  handleCreateCharacter = (data) => {
    const { Name, School } = data
    const newCharacter = { Name, School }
    fetch('https://manga-meat-back.herokuapp.com/character', //local HOST FOR TESTINGGG
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCharacter)
      }).then(response => response.json())
      .then(newCharacter => {
        console.log(newCharacter)
        this.setState({ characters: [...this.state.characters, newCharacter], currentPage: "Index" })
      })
  }


  handleDeleteCharacter = (id) => {
    fetch('https://manga-meat-back.herokuapp.com/character/' + id,
      {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => response.json())
      .then(
        this.setState({ characters: [...this.state.characters].filter(characters => characters._id !== id ? characters : null), currentPage: "Index" })
      )
  }

  handleUpdateCharacter = (data) => {
    const { Name, Picture, School, Age, ID, _id } = data
    const updated = { Name, Picture, School, Age, ID, _id }
    fetch('https://manga-meat-back.herokuapp.com/character/' + _id,
      {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updated)
      }).then(response => response.json())
      .then(updatedChar => {
        this.setState({ characters: [...this.state.characters].map(characters => characters._id === updatedChar._id ? updatedChar : characters), currentPage: "Index" })
      })

  }


  getAllFood = () => {
    console.log("Getting all food...")
    const requestOptions = {
      method: "GET"
    }
    fetch('https://manga-meat-back.herokuapp.com/food', requestOptions)
      .then(resp => resp.json())
      .then(food => {
        this.setState({ food: food })
      })
  }


  handleCreateFood = (data) => {
    const { _id, Ingredients, Name, Picture } = data
    const newFood = { _id, Ingredients, Name, Picture }
    fetch('https://manga-meat-back.herokuapp.com/food', //can use local host string for testing
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFood)
      }).then(response => response.json())
      .then(newFood => {
        console.log(newFood)
        this.setState({ food: [...this.state.food, newFood], currentPage: "Index" })
      })
  }

  handleUpdateFood = (data) => {
    const { _id, Ingredients, Name, Picture } = data
    const updated = { _id, Ingredients, Name, Picture }
    fetch('https://manga-meat-back.herokuapp.com/food/' + _id,
      {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updated)
      }).then(response => response.json())
      .then(updatedFood => {
        this.setState({ food: [...this.state.food].map(food => food._id === updatedFood._id ? updatedFood : food), currentPage: "Index" })
      })

  }

  handleDeleteFood = (id) => {
    fetch('https://manga-meat-back.herokuapp.com/food/' + id,
      {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => response.json())
      .then(
        this.setState({ food: [...this.state.food].filter(food => food._id !== id ? food : null), currentPage: "Index" })
      )
  }


  componentDidMount() {
    this.getAllCharacters()
    this.getAllFood()
  }

  setDetail = (data) => {
    console.log("Somethung", data)
    this.setState({ bookmarkToDelete: data })
  }//{console.log("Somethung", data)}

  render() {
    let currentCharacter = this.state.characters;
    // console.log(currentCharacter)
    // console.log(this.state.food)

    return (
      <div className="App">
        <Index currentCharacter={this.state.characters} setDetail={(data) => { this.setDetail(data) }} />
        <Create create={this.handleCreateCharacter} />
        <Edit edit={this.handleUpdateCharacter} />
        <Delete delete={this.handleDeleteCharacter} data={this.state.bookmarkToDelete} />//called from 105
        <FoodIndex currentFood={this.state.food} />
        <CreateFood create={this.handleCreateFood} />
        <EditFood edit={this.handleUpdateFood} />
        <DeleteFood delete={this.handleDeleteFood} />
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
