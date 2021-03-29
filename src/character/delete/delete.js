import React from 'react'

export default class CharDelete extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <div className="delete">
                <h2>Delete</h2>
                <h4>Are you sure you want to delete: <br /> <br /> {console.log(this.props.data)}{this.props.data.Name}?</h4>
                <button onClick={()=>this.props.delete(this.props.data._id)}>Delete</button><br/>
            </div>)
    }
}