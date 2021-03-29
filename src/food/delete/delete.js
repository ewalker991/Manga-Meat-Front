import React from 'react'

export default class Delete extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="delete">
                <h2>Delete</h2>
                <br />
                <h4>Are you sure you want to delete: <br /> <br /> {console.log(this.props.data)}{this.props.name}?</h4>
                <button onClick={() => this.props.delete(this.props.data)}>Delete</button>
                <br />
            </div>
        )
    }
}