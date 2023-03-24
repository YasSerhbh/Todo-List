import React, {Component} from "react"
import "./Items.css"

class Items extends Component {
    render() {

        var {items, deleteItem} = this.props

        var listItems = items.map(e => {
            return (
                <div className="item" key={e.id}>
                    <span className="name"> {e.name} </span>
                    <span className="age">{e.age}</span>
                    <span className="action icon" onClick={() => deleteItem(e.id)}>&times;</span>
                </div>
            )
        })


        return (
            <div className="listitems">
                <div>
                    <span className="name title">Name</span>
                    <span className="age title">Age</span>
                    <span className="action title">Delete</span>
                </div>
                    {items.length === 0 ? <p>No Items To Show</p> : listItems}
            </div>
        )
    }
}

export default Items
