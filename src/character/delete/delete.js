import React from 'react'

export default class Delete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {...this.props.data},
        }
    }
    render() {
        return (
            <div>
                <h1>You are deleting: {this.state.data.Name}?</h1>
                <button onClick={()=>this.props.deleteCharacter(this.state.data._id)}>Delete</button><br/>
            </div>)
    }
}