import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
        this.handleClick = this.handleClick.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }
    handleClick(event) {
        this.setState({count: this.state.count + 1})
    }
    handleReset(event){
        this.setState({count: 0})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                <button onClick={this.handleReset}>Reset</button>
                <br/>
                <label>Value :
                    <textarea value={this.state.count} />
                </label>
            </div>
        );
    }
}
export default Counter