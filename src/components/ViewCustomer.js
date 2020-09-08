import React, { Component } from 'react'

export default class ViewCustomer extends Component {
    render() {
        return (
            <div>
                <h6>This is Customer Details Page</h6>
                <ul>
                    <li>
                        Customer Id: 101<br />
                        Customer Name: Adam Henry<br />
                        Country: India
                    </li>
                </ul>
                <ul>
                    <li>
                        Customer Id: 102<br />
                        Customer Name: John Henry<br />
                        Country: USA
                    </li>
                </ul>
            </div>
        )
    }
}
