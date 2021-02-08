import React, { Component } from 'react';
import MatInput from '../component/MatInput';
import HsButton from '../component/HsButton';

class Forms extends React.Component {

    constructor() {
        super();

        this.state = {
            user: "",
            pass: "",
            nameError: "",
            passError: "",
            active: false
        }
    }

    valid() {
        if (!this.state.user.includes("@") && this.state.pass.length < 5) {
            this.setState({ nameError: "Invalid Name", passError: "invalid password" });
        }
        else if (!this.state.user.includes("@")) {
            this.setState({ nameError: "Invalid Name" });
        }
        else if (this.state.pass.length < 5) {
            this.setState({ passError: "please enter altleast 6 letter" });
        }
        else {
            return true;
        }
    }

    submit() {
        this.setState({ nameError: "", passError: "" });
        if (this.valid()) {
            alert('Form has been submited');
        }
    }

    render() {
        return (
            <div>
                <h1>Material Form</h1>
                <div className="form-group">
                    <MatInput labelName="name" type="text" name="user" onChange={(e) => { this.setState({ user: e.target.value }) }} />
                    <p style={{ color: "red", fontSize: "13px" }}>{this.state.nameError}</p>
                </div>
                <div className="form-group">
                    <MatInput labelName="Pasword" type="text" name="pass" onChange={(e) => { this.setState({ pass: e.target.value }) }} />
                    <p style={{ color: "red", fontSize: "13px" }}>{this.state.passError}</p>
                </div>
                <div className="form-group mt-4">
                    <button onClick={() => this.submit()}>Submit</button>
                    <HsButton shape="round" color="primary" size="20px" content="Submit" />
                </div>
                <button className={this.state.active && 'active'} onClick={() => this.setState({ active: !this.state.active })}>Click me</button>
            </div>
        );
    }

}

export default Forms;