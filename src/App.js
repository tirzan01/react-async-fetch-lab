// create your App component here
import React from 'react'

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            austronauts: [{name: "A1", craft: "C1"}, {name: "A2", craft: "C2"}, {name: "A3", craft: "C3"}]
        }
    }

    render() {
        return <div>{this.state.austronauts.map( austronaut => <p>name: {austronaut.name} / craft: {austronaut.craft}</p>)}</div>
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                this.setState({
                    austronauts: json.people
                })
            })
    }
}

export default App