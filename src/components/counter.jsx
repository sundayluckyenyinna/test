import React, { Component } from 'react';

class Counter extends Component {
    
    /**
     * Store the properties of this class component in a 'state' object with 
     * the attributes that will be passed in as attributes stored in the in-built
     * 'props' property.
     */
    state = {
        // A unique 'id' that is associated with this component.
        id: this.props.id,
        // a 'value' property associated with this component.
        value: this.props.value,
        // an array of things to display in a list item.
        array: this.props.array,
        // a progress value
        progressValue: this.props.progressValue
    }

    render() { 
        return (
            <React.Fragment>
                <h5> Hello world</h5>
                <h4>{this.state.value}</h4>
                <h4> id: {this.state.id} </h4>
                <button onClick={this.increase}>Increase</button>
                <p><progress max={100} value={Number(this.state.progressValue)}></progress></p>
            </React.Fragment>
        );
    }

    increase = () =>{
        this.setState({
            value: String(Number(this.state.value) + 1),
            id: String(Number(this.state.id) + 2),
            progressValue: String(Number(this.state.progressValue) + 5)
        });
        console.log(this);
    }

}
 
export default Counter;