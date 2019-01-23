import React, { Component } from 'react'

// ================================================    PRACTICE 2      ===============================================
class EmployeeList extends Component {
    render() {
        return (
            <section className="employee">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                    </div>

                )
                /*employee: this is just what we call the new array of data we received from the API when we used .map*/
                /*employee.id: this is the dataset's id*/
            }
            </section>
        )
    }
}

export default EmployeeList

// ================================================    PRACTICE 1      ===============================================
// export default class EmployeeList  extends Component {
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


