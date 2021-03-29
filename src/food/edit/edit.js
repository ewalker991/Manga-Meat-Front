import React from 'react'

export default class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: { ...this.props.data }
        }
    }

    handleFormSubmite = (e) => {
        e.preventDefault()
        this.props.edit(this.state.data)
    }

    handleFormChange = (e) => {
        this.setState({ data: { ...this.state.data, [e.target.Name]: e.target.value } })
    }

    render() {
        return (
            <div className="edit">
                <h2>Edit Dish</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="name">Edit Food Dish</label>
                    <input id="name" name="name" type="text" placeholder="enter dish name" value={this.state.data.Name} required onChange={this.handleFormChange} />
                    <br />
                    <label htmlFor="url">Edit Ingredients</label>
                    <input id="ingredients" name="Ingredients" type="text" placeholder="enter ingredients" value={this.state.data.Ingredients} required onChange={this.handleFormChange} />
                    <br />
                    <button type="submit">Submit Change</button>
                </form>
            </div>
        )
    }

}