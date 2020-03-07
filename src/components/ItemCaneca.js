
import React from 'react'


const Column = (items) => {
    return(
        <div className="col-6">
            {[].map.call(items.items, value => (
                <p>&#10004; {value}</p>
            ))}
        </div>
    )
}

class ItemCaneca extends React.Component {

    render(){
        return(
            <div className="col-md-2 bg-white m-4 p-4 item-caneca">
                <h4>{this.props.title}</h4>
                <img src={this.props.image} height="150"/>
                <br/>
                <br/>
                <div className="row">
                    <Column items={this.props.items.slice(0, Math.round(this.props.items.length / 2))} />
                    <Column items={this.props.items.slice(Math.round(this.props.items.length / 2), this.props.items.length)} />
                </div>
            </div>
        )
    }
}


export default ItemCaneca