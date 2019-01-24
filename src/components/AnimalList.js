import React, { Component } from 'react'

// ================================================    PRACTICE 3      ===============================================
// 1. Create a new array in state in the Kennel component named animals. It will look just like the locations and employees arrays in state. Make sure each animal has an id property.
    // This was done in Kennel.js
// 2. Create an AnimalList component for displaying animals.
// 3. Update Kennel to pass its animals state to AnimalList and use the appropriate key on this.props to display all animal names.

class AnimalList extends Component {
    render() {
        return(
            <section className="animal-list">
            {
                this.props.animals.map(responseAnimal=>
                    <div key={responseAnimal.id}>
                        {responseAnimal.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default AnimalList