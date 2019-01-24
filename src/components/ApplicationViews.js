// In this component, define how the application responds when the URL matches each of the routes we defined: /, /animals, and /employees.
// When a user clicks on one of the hyperlinks in the navbar, the code in this section will dictate which component should be rendered.

import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from "./AnimalList"
import LocationList from "./Locations"
import EmployeeList from "../employees/EmployeeList"
import Owners from "./Owners"


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "3749 Little Paws Parkway" },
        { id: 2, name: "Nashville South", address: "23098 Whiskers Way" }
    ]

    animalsFromAPI = [
            {id: 1, name: "Sage"},
            {id: 2, name: "Clove"},
            {id: 3, name: "Lady"},
            {id: 4, name: "Ebony"},
            {id: 5, name: "Moses"}
    ]

    ownersFromAPI = [
        {id: 1, name: "Hannah", phoneNumber: 1234567},
        {id: 2, name: "Brian", phoneNumber: 8901234},
        {id: 3, name: "Allison", phoneNumber: 5678901},
        {id: 4, name: "Emily", phoneNumber: 2345678}
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <React.Fragment> {/* This is simply a React wrapper which prevents unnecessary <div>, <article> or <section> tags from being created */}
            {/* "exact" is needed on the first route, below; without it, the route will match the other two routes and the Location will be the only component rendered, no matter what the URL is. */}
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <Owners owners=
                    {this.state.owners}/>
                }}/>
            </React.Fragment>
        )
    }
}

export default ApplicationViews