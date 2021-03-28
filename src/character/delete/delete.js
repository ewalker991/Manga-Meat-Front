import React from 'react'

export default class CharDelete extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <div>
                <h1>You are deleting: {this.props.data}?</h1>
                <button onClick={()=>this.props.delete(this.props.data)}>Delete</button><br/>
            </div>)
    }
}