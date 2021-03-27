import React from 'react'

export default class Delete extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Are you sure you want to delete {this.props.data}?</h1>
                <button onClick={() => this.props.delete(this.props.data)}>Delete</button>
                <br />
            </div>
        )
    }
}