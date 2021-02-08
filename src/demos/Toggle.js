import React, { Component } from 'react';

class Toggle extends Component {

    constructor() {
        super()
        this.state= {
            show:true,
        }
    }

    render() {


        return (
            <div>
                {
                    this.state.show ? 
                    <h1>hide show</h1>
                    : null
                }
                <button onClick={()=>{this.setState({show:!this.state.show})}}>toggle now</button>
            </div>
        );
    }
}

export default Toggle;