import React from 'react';

class Profie extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "Sandip patel",
            email: "sandip7023@gmail.com",
            count: 0
        }
    }

    updatState() {
        this.setState({
            name:"bruce",
            count:this.state.count+1
        })
    }

    render() {
        return (
            <div>
                <h3>Count {this.state.count}</h3>
                <h3>Profile is {this.state.name}</h3>
                <h4>Email is {this.state.email}</h4>
                <button onClick>update</button>
            </div>
        );
    }
}

export default Profie;