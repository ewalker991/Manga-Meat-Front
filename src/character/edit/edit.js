import React from 'react'

export default class CharEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    handleFormSubmit = (e) => {
        console.log(this.state.data)
        e.preventDefault()
        this.props.edit(this.state.data)
    }

    handleFormChange = (e) => { 
        this.setState({ 
            data: { ...this.state.data, [e.target.name]: e.target.value } 
        }) 
    }

    componentDidUpdate(){
        if(this.state.data._id != this.props.data._id){
            console.log("something char here")
            this.setState({
                data: this.props.data
            })
        }
    }
    render() {
        console.log("working edit log")
        console.log(this.props.data)
        return (
            <div className="edit">
                <h2>Edit Chef</h2>
                <h4>You are editing: {this.props.data.Name}?</h4>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="name">Edit Character Name</label>
                    <input name="Name" type="text" placeholder="enter character name" value={this.state.data.Name} required onChange={this.handleFormChange} />
                    <br />

                    <label htmlFor="url">Edit School Name</label>
                    <input name="School" type="text" placeholder="enter school name" value={this.state.data.School} required onChange={this.handleFormChange} />
                    <br />

                    <label htmlFor="url">Edit Picture Url</label>
                    <input name="Picture" type="text" placeholder="enter picture url" value={this.state.data.Picture} required onChange={this.handleFormChange} />
                    <br />

                    <button type="submit">Submit Edits</button>
                </form>
            </div>
        )
    }
}