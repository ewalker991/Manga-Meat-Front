import React from "react"

export default class CharCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: { Name: "", School: ""}
        }
    }

    handleFormSubmit = (e) => {
        console.log(this.state.data)
        e.preventDefault()
        console.log('from handle form submit')
        this.props.create(this.state.data)
    }


    handleFormChange = (e) => {console.log(e.target.name);this.setState({data: { ...this.state.data, [e.target.name]: e.target.value }})}

    render() {

        return (
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor="name">Enter New Character Name</label>
                <input id="name" name="Name" type="text" placeholder="enter character name" value={this.state.data.Name} required onChange={this.handleFormChange} />
                <br />
                <label htmlFor="url">Enter New School Name</label>
                <input id="url" name="School" type="text" placeholder="enter school name" value={this.state.data.School} required onChange={this.handleFormChange} />
                <br/>
                <button type="submit">Create Character</button>
            </form>)
    }
}