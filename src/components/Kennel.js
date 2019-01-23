// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import EmployeeList from "../employees/EmployeeList"  // Import EmployeeList component
import Locations from "./Locations" // Import EmployeeList component

export default class Kennel extends Component {
    render() {
        return (
            <div>
                <h3>Kitten Kennels</h3>
                <h4>Nashville West Location</h4>
                <h5>500 Pouncing Path</h5>
                <EmployeeList />    {/*This line signals that the Kennel component is a parent of the EmployeeList component. */}
                <Locations />
            </div>
        );
    }
}
