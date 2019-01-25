
// ================================================    PRACTICE 2      ===============================================
import React, { Component } from 'react'
class EmployeeList extends Component {
    render() {
        {console.log(this.props.employees)};

        return (
            <section className="employees">
            {
                this.props.employees.map(responseEmployee =>
                    <div key={responseEmployee.id}>
                        {responseEmployee.name}
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
// import React, { Component } from 'react'


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


