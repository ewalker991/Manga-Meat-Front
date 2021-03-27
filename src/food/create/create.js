import React from 'react'

export default class Create extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: { Name: "", Ingredients: ""}
        }
    }

    handleFormSubmit = (e) => {
        console.log(this.state.data)
        e.preventDefault()
        console.log('from handle form submit on food')
        this.props.create(this.state.data)
    }

    handleFormChange = (e) => {console.log(e.target.name);this.setState({data: {...this.state.data}, [e.target.name]: e.target.value})}

    render() {
        return (
            <form onSubmite = {this.handleFormSubmit}>
                <label htmlFor="name">Enter New Food Dish</label>
                <input id="name" name="Name" type="text" placeholder="enter food dish name" value={this.state.data.Name} required onChange={this.handleFormChange} />
                <br />
                <label htmlFor="url">Enter Dish Ingredients</label>
                <input id="ingredients" name="Ingredients" type="text" placeholder="enter food ingredients" value={this.state.data.Ingredients} required onChange={this.handleFormChange} />
                <br />
                <button type="submit">Create Food Dish</button>
            </form>
        )
    }
}