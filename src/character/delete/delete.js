import React from 'react'

export default class CharDelete extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <div>
                <h1>You are deleting: {console.log(this.props.data)}{this.props.name}?</h1>
                <button onClick={()=>this.props.delete(this.props.data)}>Delete</button><br/>
            </div>)
    }
}