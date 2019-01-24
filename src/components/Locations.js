import React, { Component } from 'react'
// ================================================    PRACTICE 2      ===============================================

class Locations extends Component {
    render() {
        return (
            <article>
            <h5>Other Locations</h5>
                <section className = "other-locations">
                { /* If you do not use "this." before "props", you will get an error message that says "failed to define..." */
                    this.props.locations.map(responseLocation =>
                        <div key={responseLocation.id}>
                            {responseLocation.name}
                        </div>
                    )
                }
                </section>
                {/* </br> */}
            </article>
        );
    }
}

export default Locations


// ================================================    PRACTICE 1      ===============================================

// export default class Locations extends Component {
//     render() {
//         return (
//             <article>
//             <h2>Test</h2>
//                 <section>Nashville North</section>
//                 <p>3749 Little Paws Parkway</p>
//                 <section>Nashville South</section>
//                 <p>23098 Whiskers Way</p>
//             </article>
//         );
//     }
// }

