//================================      CHAPTER 3: ROUTING       ==============================
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from './components/Kennel'

import './index.css'
import './components/nav/NavBar'

ReactDOM.render(
    <Router>
        <Kennel />
    </Router>, document.getElementById('root'))


//================================      SINGLE COMPONENT (USED FOR PRACTICES 1-3)       ==============================

// import ReactDOM from "react-dom"
// import React from 'react'
// import Kennel from "./components/Kennel"

// ReactDOM.render(<Kennel />, document.querySelector("#root"));

// Think of each one of your components as a factory function (i.e., a function that returns an object)
//  extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Kitten Kennels</h3>
//                 <h4>Nashville West Location</h4>
//                 <h5>500 Pouncing Path</h5>
//                 <EmployeeList />    {/* This line signals that the Kennel component is a parent of the EmployeeList component. */}
//             </div>
//         );
//     }
// }

//============================================================================================
//================================      CHILD COMPONENT       ================================

// A good developer adheres to the "Single Responsibility Principle"

// class EmployeeList extends Component {
//     render() {
//         return (
//             <article>
//                 <h1>Employee List</h1>
//                 <section>Jessica Younker</section>
//                 <section>Jordan Nelson</section>
//                 <section>Zoe LeBlanc</section>
//                 <section>Blaise Roberts</section>
//             </article>
//         );
//     }
// }
// ReactDOM.render(<Kennel />, document.querySelector("#root"));
