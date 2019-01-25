import React, { Component } from 'react'

// ================================================  CHAPTER 5 SETUP    ===============================================

import cat from "./CatIcon.png"
import "./Animal.css"
//===============================================   CHAPTER 5 CODE (COPY-PASTA)    ================================================
export default class AnimalList extends Component {
        render () {
            return (
                <section className="animals">
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={cat} className="icon--cat" alt="Cute cartoon cat face" />
                                    {animal.name}
                                    <a href="#"
                                        onClick={() => this.props.deleteAnimal(animal.id)}
                                        className="card-link">Delete</a>
                                </h5>
                            </div>
                        </div>
                    )
                }
                </section>
            )
        }
    }


//===============================================   LEAH'S CODE (COPY-PASTA)    ================================================
//     return (
//         <section className="animals">
//           {this.props.animals.map(animal => (
//             <div key={animal.id} className="card">
//               <div className="card-body">
//                 <h5 className="card-title">
//                   <img src={dog} className="icon--dog" />
//                   {animal.name}
//                   <a
//                     href="#"
//                     onClick={() => this.props.deleteAnimal(animal.id)}
//                     className="card-link"
//                   >
//                     Delete
//                   </a>
//                 </h5>
//               </div>
//             </div>
//           ))}
//         </section>
//       );
//     }
//   }


// ===============================================================================================
// ================================================    PRACTICE 3      ===============================================
// 1. Create a new array in state in the Kennel component named animals. It will look just like the locations and employees arrays in state. Make sure each animal has an id property.
    // This was done in Kennel.js
// 2. Create an AnimalList component for displaying animals.
// 3. Update Kennel to pass its animals state to AnimalList and use the appropriate key on this.props to display all animal names.

// class AnimalList extends Component {
//     render() {
//         return(
//             <section className="animal-list">
//             {
//                 this.props.animals.map(responseAnimal=>
//                     <div key={responseAnimal.id}>
//                         {responseAnimal.name}
//                     </div>
//                 )
//             }
//             </section>
//         )
//     }
// }



// export default AnimalList