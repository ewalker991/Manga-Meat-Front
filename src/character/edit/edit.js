import React from 'react'

export default class CharEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: { ...this.props.data }
        }
    }

    handleFormSubmit = (e) => {
        console.log(this.state.data)
        e.preventDefault()
        this.props.edit(this.state.data)
    }

    handleFormChange = (e) => { this.setState({ data: { ...this.state.data, [e.target.Name]: e.target.value } }) }

    render() {
        console.log("working edit log")
        return (
            <div className="edit">
                <h2>Edit Chef</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <h4>You are editing: <br /> < br /> {this.props.data}?</h4>
                    <label htmlFor="name">Edit Character Name</label>
                    <input id="name" name="Name" type="text" placeholder="enter character name" value={this.state.data.Name} required onChange={this.handleFormChange} />
                    <br />
                    <label htmlFor="url">Edit School Name</label>

                    <input id="url" name="School" type="text" placeholder="enter school name" value={this.state.data.School} required onChange={this.handleFormChange} />
                    <br />
                    <button type="submit">Submit Edits</button>
                </form>
            </div>
        )
    }
}