import React, { Component } from 'react';

class Listingmaps extends Component {

    constructor() {
        super();

        this.state = {
            list: [
                { name: "anima", email: "anil@mail.com" },
                { name: "Kelly", email: "kelly@mail.com" },
                { name: "Scrus", email: "scrus@mail.com" }
            ]
        }

    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((items) =>
                            <li key={items.name}> <strong>Name</strong> <span>{items.name}</span> --  <strong>Email</strong> <span>{items.email}</span> </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Listingmaps;