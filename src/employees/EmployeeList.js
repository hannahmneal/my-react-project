import React, { Component } from 'react'

// ================================================    PRACTICE 2      ===============================================
class EmployeeList extends Component {
    render() {
        // console.log(this.props.employees);
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                        {employee.name}
                        <a href="#"
                            onClick={() => this.props.deleteEmployee(employee.id)}
                            className="card-link">Delete</a>
                        </h5>
                    </div>
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


