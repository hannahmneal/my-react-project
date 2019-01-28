import React, {Component} from 'react'

export default class Owners extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owners =>
                    <div key={owners.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                            {<br/>}
                            {owners.name}
                            {<br/>}
                            {owners.phoneNumber}
                            {<br/>}
                            <a href="#"
                                onClick={() => this.props.deleteOwners(owners.id)}
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