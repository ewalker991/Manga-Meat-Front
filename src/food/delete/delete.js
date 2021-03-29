import React from 'react'

export default class Delete extends React.Component {

    render() {
        return (
            <div className="delete">
                <h2>Delete</h2>
                <br />
                <h4>Are you sure you want to delete: <br /> <br /> {this.props.data.Name}?</h4>
                <button onClick={() => this.props.delete(this.props.data._id)}>Delete</button>
                <br />
            </div>
        )
    }
}