import React from 'react'

export default class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: { ...this.props.data }
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.props.edit(this.state.data)

        //call local fetch
        //do something that causes rerender of app (setting state via props)
    }
    //fetch call

    handleFormChange = (e) => {this.setState({data: { ...this.state.data, [e.target.Name]: e.target.value }})}

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor="name">Edit Character Name</label>
                <input id="name" name="name" type="text" placeholder="enter character name" value={this.state.data.Name} required onChange={this.handleFormChange} />
                <br />
                <label htmlFor="url">Edit School Name</label>
                <input id="url" name="url" type="text" placeholder="enter school name" value={this.state.data.School} required onChange={this.handleFormChange} />
                <br/>
                <button type="submit">Submit Edits</button>
            </form>)
    }
}