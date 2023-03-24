import React, {Component} from "react"
import "./Additem.css"

class AddItem extends Component {

    submit = (e) => {
        e.preventDefault()
        var item = {
            id: Math.floor(Math.random() * 1000000),
            name: e.target.children[0].value,
            age: e.target.children[1].value
        }
        if (e.target.children[0].value && e.target.children[1].value) {
        this.props.addItem(item)
        }
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input type="text" placeholder="Enter Name" />
                <input type="number" placeholder="Enter Age" />
                <input type="submit" value="Add"></input>
            </form>
        )
    }
}

export default AddItem