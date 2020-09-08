import React, { Component } from 'react'

export default class RegisterCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId: '',
            customerName: '',
            country: ''
        }
    }
    render() {
        const { customerId, customerName, country } = this.state
        return (
            <div>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        if (customerId === "")  alert("Please enter Customer Id");
                        else if(customerName === "") alert("Please enter Customer Name");
                        else if(country === "") alert("Please enter country");
                        else {
                            console.log(customerId," ",customerName, " ",country)
                        }
                    }}
                >
                    <label> Enter customer Name :
                    <br></br>
                    <input
                        type="text"
                        name="customerName"
                        placeholder="customerName"
                        value={customerName}
                        onChange={(event) => {
                            this.setState({
                                customerName: event.target.value,
                            });
                        }}
                    ></input></label>
                    <br></br>
                    <br></br>
                    <label> Enter customer ID :
                    <br></br>
                    <input
                        type="number"
                        name="customerId"
                        placeholder="customerId"
                        min="1"
                        value={customerId}
                        onChange={(event) => {
                            this.setState({ customerId: event.target.value });
                        }}
                    ></input></label>
                    <br></br>
                    <br></br>
                    <label> Enter Country:
                    <br></br>
                    <select                        
                        value={country}
                        onChange={(event) => {
                            this.setState({ country: event.target.value });
                        }}
                    >
                        <option value="none" selected hidden> 
                            Select Country 
                        </option> 
                        <option value="India">
                            India
                </option>

                        <option  value="USA">
                            USA
                </option>
                    </select></label>
                    <br></br>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
