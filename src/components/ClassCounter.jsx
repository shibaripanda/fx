import React from "react"

export class ClassCounter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        this.inc = this.inc.bind(this)
        this.dcr = this.dcr.bind(this)
    }



    inc() {
        this.setState({count: this.state.count + 1})
    }
    dcr() {
        this.setState({count: this.state.count - 1})
    } 


    render() {
        return (
                <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.inc}>Inc</button>
                <button onClick={this.dcr}>Dec</button>
            </div>
        )
    }
}