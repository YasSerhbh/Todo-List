import React, {Component} from "react";
import './App.css';
import AddItem from "./components/AddItem/AddItem";
import Items from "./components/Items/Items";

class App extends Component {

    state = {
        items: [
            {id: 1, name: "Erling Haaland", age: 22},
            {id: 2, name: "Kevin De Bruyne", age: 31}
        ]
    }

    deleteItem = (id) => {
        var itms = this.state.items.filter(e => e.id !== id)
        this.setState({
            items: itms
        })
    }

    addItem = (item) => {
        var itmes = this.state.items
        itmes.push(item)
        this.setState({
            items: itmes
        })
    }
    render() {
        return (
            <div className="App container">
                <h1 className="text-center">Todo List</h1>
                <Items items={this.state.items} deleteItem={this.deleteItem} />
                <AddItem addItem={this.addItem} />
            </div>
        );
    }
}

export default App;
