// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import EmployeeList from "../employees/EmployeeList"  // Import EmployeeList component
import Locations from "./Locations" // Import EmployeeList component

// ================================================    PRACTICE 2      ===============================================
    class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
   employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
]

// This will eventually get pulled from the API
locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "3749 Little Paws Parkway" },
    { id: 2, name: "Nashville South", address: "23098 Whiskers Way" }
]

state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI
}
render() {
    return (
        <article className="kennel">
            <Locations locations={this.state.locations} />
            <EmployeeList employees={this.state.employees} />
        </article>
    )
}
}

export default Kennel
// ================================================    PRACTICE 1      ===============================================

// export default class Kennel extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Kitten Kennels</h3>
//                 <h4>Nashville West Location</h4>
//                 <h5>500 Pouncing Path</h5>
//                 <EmployeeList />    {/*This line signals that the Kennel component is a parent of the EmployeeList component. */}
//                 <Locations />
//             </div>
//         );
//     }
// }
// =======================================================================================================================
