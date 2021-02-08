import React, { Component } from 'react';


class CallApi extends React.Component {


    constructor() {
        super();

        this.state = {
            users: null,
            info: null
        }
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users').then((resp) => {
            resp.json().then((result) => {
                console.warn(result);
                console.warn(result.ad);
                this.setState({ users: result.data });
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Fetch API Data</h1>
                <ul>
                    {
                        this.state.users ?
                            this.state.users.map((userslist, i) =>
                                <li key={userslist.id}>{i} {userslist.first_name}</li>
                            )

                            : null
                    }
                </ul>
            </div>
        )
    }

}

export default CallApi;